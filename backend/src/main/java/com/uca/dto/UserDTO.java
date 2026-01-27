package com.uca.dto;

import java.time.LocalDateTime;

public record UserDTO(
        Long id,
        String email,
        String name,
        String cellphone,
        String userType,
        LocalDateTime createdAt) {
}
