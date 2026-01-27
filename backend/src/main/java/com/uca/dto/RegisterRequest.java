package com.uca.dto;

public record RegisterRequest(
        String email,
        String password,
        String name,
        String cellphone) {
}
