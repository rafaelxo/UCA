package com.uca.dto;

public record AuthResponse(
        String token,
        UserDTO user) {
}
