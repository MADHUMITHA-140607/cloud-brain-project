package com.example.demo;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")   // VERY IMPORTANT
@RestController
@RequestMapping("/api")
public class CloudController {

    private String status = "HEALTHY";

    @GetMapping("/status")
    public String getStatus() {
        return status;
    }

    @GetMapping("/simulate-failure")
    public String simulateFailure() {
        status = "FAILED";
        return "Failure simulated!";
    }

    @GetMapping("/auto-heal")
    public String autoHeal() {
        if (status.equals("FAILED")) {
            status = "HEALTHY";
            return "System healed!";
        }
        return "System already healthy";
    }
}