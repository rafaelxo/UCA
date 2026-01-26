package com.uca.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import PROJECTS.UCA.backend.src.main.java.com.uca.model.Property;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByOwnerId(Long ownerId);
}
