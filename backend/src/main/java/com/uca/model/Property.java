package com.uca.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "properties")
@Data
@NoArgsConstructor
@AllArgsConstructor
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
}
