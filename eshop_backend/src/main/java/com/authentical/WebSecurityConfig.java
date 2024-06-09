package com.authentical;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
 
@Configuration
public class WebSecurityConfig {
 
    @Bean
    UserDetailsService userDetailsService() {
        return new UserDetailsServiceImpl();
    }
     
    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
     
    @Bean
    DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
         
        return authProvider;
    }
 
    @Bean
    SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.csrf((csrf) -> csrf.disable())
            .cors(cors -> {
                cors.configurationSource(corsConfigurationSource());
            })
            .authorizeHttpRequests(auth -> auth
            .requestMatchers("/", "/home", "/signup", "/login").permitAll()
            // .requestMatchers("/api/**").hasAnyAuthority("ADMIN", "USER")
            .anyRequest().permitAll()
            // .anyRequest().authenticated()
            )
            .formLogin(login -> login
                .loginPage("/login") // Specify the custom login page URL
                .successHandler(new SavedRequestAwareAuthenticationSuccessHandler()) // Redirect to the saved request URL on successful login
                .permitAll()
            )
            .logout(logout -> logout.permitAll())
            .exceptionHandling(eh -> eh
                .accessDeniedPage("/403")
                );
         
        return http.build();
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:3000"); 
        configuration.addAllowedMethod("*"); 
        configuration.addAllowedHeader("*"); 
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new 
        UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
