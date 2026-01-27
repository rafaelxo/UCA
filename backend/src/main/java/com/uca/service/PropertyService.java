package com.uca.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.uca.dto.PropertyCreateRequest;
import com.uca.dto.PropertyDTO;
import com.uca.model.Property;
import com.uca.model.User;
import com.uca.repository.PropertyRepository;
import com.uca.repository.UserRepository;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private UserRepository userRepository;

    public List<PropertyDTO> getAllProperties() {
        return propertyRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public PropertyDTO getPropertyById(Long id) {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found"));
        return convertToDTO(property);
    }

    public PropertyDTO createProperty(PropertyCreateRequest request) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Property property = new Property();
        property.setTitle(request.title());
        property.setAddress(request.address());
        property.setPrice(request.price());
        property.setBedrooms(request.bedrooms());
        property.setBathrooms(request.bathrooms());
        property.setSquareMeters(request.squareMeters());
        property.setFloors(request.floors());
        property.setType(request.type());
        property.setDescription(request.description());
        property.setPool(request.pool());
        property.setGarage(request.garage());
        property.setRecreationArea(request.recreationArea());
        property.setBarbecue(request.barbecue());
        property.setAirConditioning(request.airConditioning());
        property.setFurnished(request.furnished());
        property.setImages(request.images());
        property.setOwner(user);

        property = propertyRepository.save(property);

        return convertToDTO(property);
    }

    public PropertyDTO updateProperty(Long id, PropertyCreateRequest request) {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found"));

        property.setTitle(request.title());
        property.setAddress(request.address());
        property.setPrice(request.price());
        property.setBedrooms(request.bedrooms());
        property.setBathrooms(request.bathrooms());
        property.setSquareMeters(request.squareMeters());
        property.setFloors(request.floors());
        property.setType(request.type());
        property.setDescription(request.description());
        property.setPool(request.pool());
        property.setGarage(request.garage());
        property.setRecreationArea(request.recreationArea());
        property.setBarbecue(request.barbecue());
        property.setAirConditioning(request.airConditioning());
        property.setFurnished(request.furnished());
        property.setImages(request.images());

        property = propertyRepository.save(property);

        return convertToDTO(property);
    }

    public void deleteProperty(Long id) {
        if (!propertyRepository.existsById(id)) {
            throw new RuntimeException("Property not found");
        }
        propertyRepository.deleteById(id);
    }

    private PropertyDTO convertToDTO(Property property) {
        return new PropertyDTO(
                property.getId(),
                property.getTitle(),
                property.getAddress(),
                property.getPrice(),
                property.getBedrooms(),
                property.getBathrooms(),
                property.getSquareMeters(),
                property.getFloors(),
                property.getType(),
                property.getDescription(),
                property.getPool(),
                property.getGarage(),
                property.getRecreationArea(),
                property.getBarbecue(),
                property.getAirConditioning(),
                property.getFurnished(),
                property.getImages(),
                property.getCreatedAt());
    }
}
