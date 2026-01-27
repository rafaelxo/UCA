package com.uca.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Integer bedrooms;

    @Column(nullable = false)
    private Integer bathrooms;

    @Column(nullable = false)
    private Double squareMeters;

    @Column(nullable = false)
    private Integer floors = 1;

    @Column(nullable = false)
    private String type;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private Boolean pool = false;

    @Column(nullable = false)
    private Integer garage = 0;

    @Column(nullable = false)
    private Boolean recreationArea = false;

    @Column(nullable = false)
    private Boolean barbecue = false;

    @Column(nullable = false)
    private Boolean airConditioning = false;

    @Column(nullable = false)
    private Boolean furnished = false;

    @ElementCollection
    @CollectionTable(name = "property_images", joinColumns = @JoinColumn(name = "property_id"))
    @Column(name = "image_url")
    private List<String> images = new ArrayList<>();

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private User owner;

    public Property() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public Integer getBedrooms() { return bedrooms; }
    public void setBedrooms(Integer bedrooms) { this.bedrooms = bedrooms; }

    public Integer getBathrooms() { return bathrooms; }
    public void setBathrooms(Integer bathrooms) { this.bathrooms = bathrooms; }

    public Double getSquareMeters() { return squareMeters; }
    public void setSquareMeters(Double squareMeters) { this.squareMeters = squareMeters; }

    public Integer getFloors() { return floors; }
    public void setFloors(Integer floors) { this.floors = floors; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Boolean getPool() { return pool; }
    public void setPool(Boolean pool) { this.pool = pool; }

    public Integer getGarage() { return garage; }
    public void setGarage(Integer garage) { this.garage = garage; }

    public Boolean getRecreationArea() { return recreationArea; }
    public void setRecreationArea(Boolean recreationArea) { this.recreationArea = recreationArea; }

    public Boolean getBarbecue() { return barbecue; }
    public void setBarbecue(Boolean barbecue) { this.barbecue = barbecue; }

    public Boolean getAirConditioning() { return airConditioning; }
    public void setAirConditioning(Boolean airConditioning) { this.airConditioning = airConditioning; }

    public Boolean getFurnished() { return furnished; }
    public void setFurnished(Boolean furnished) { this.furnished = furnished; }

    public List<String> getImages() { return images; }
    public void setImages(List<String> images) { this.images = images; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public User getOwner() { return owner; }
    public void setOwner(User owner) { this.owner = owner; }
}
