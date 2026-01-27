package com.uca.dto;

import java.util.List;

public record PropertyCreateRequest(
        String title,
        String address,
        Double price,
        Integer bedrooms,
        Integer bathrooms,
        Double squareMeters,
        Integer floors,
        String type,
        String description,
        Boolean pool,
        Integer garage,
        Boolean recreationArea,
        Boolean barbecue,
        Boolean airConditioning,
        Boolean furnished,
        List<String> images) {
}
