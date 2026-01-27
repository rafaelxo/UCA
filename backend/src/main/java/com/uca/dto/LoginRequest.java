package com.uca.dto;

public record LoginRequest(
        String email,
        String password) {
}
