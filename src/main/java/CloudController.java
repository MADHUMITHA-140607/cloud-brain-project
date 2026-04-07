package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CloudController {

    private String status = "HEALTHY";

    // Check status
    @GetMapping("/status")
    public String getStatus() {
        return status;
    }

    // Simulate failure
    @GetMapping("/simulate-failure")
    public String simulateFailure() {
        status = "FAILED";
        return "Failure simulated!";
    }

    // Auto heal
    @GetMapping("/auto-heal")
    public String autoHeal() {
        if (status.equals("FAILED")) {
            status = "HEALTHY";
            return "System healed!";
        }
        return "System already healthy";
    }
}