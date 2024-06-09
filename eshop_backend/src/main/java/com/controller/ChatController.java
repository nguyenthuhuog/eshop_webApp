// ChatController.java
package com.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api")
public class ChatController {

    @Autowired
    private ChatGPTConfig chatGPTConfig;

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/chat")
    public Map<String, Object> chat(@RequestBody Map<String, String> request) throws Exception {
        String message = request.get("message");

        String url = "https://api.openai.com/v1/engines/davinci-codex/completions";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        headers.set("Authorization", "Bearer " + chatGPTConfig.getApiKey());

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("prompt", message);
        requestBody.put("max_tokens", 150);
        requestBody.put("n", 1);
        requestBody.put("stop", null);
        requestBody.put("temperature", 0.5);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(response.getBody());
        String reply = root.path("choices").get(0).path("text").asText();

        Map<String, Object> result = new HashMap<>();
        result.put("reply", reply);
        return result;
    }
}