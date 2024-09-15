package com.Encompass.controllers;

import com.Encompass.Entities.ServiceListing;
import com.Encompass.repositories.ServiceListingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/services")
public class ServiceController {
    @Autowired
    private ServiceListingRepo serviceListingRepository;

    // Create a new service listing
    @PostMapping("/create")
    public ResponseEntity<ServiceListing> createService(@RequestBody ServiceListing serviceListing) {
        // Simply save the service listing without associating with any user
        return ResponseEntity.ok(serviceListingRepository.save(serviceListing));
    }

    // Search for services by a query string (service name)
    @GetMapping("/search")
    public Optional<ServiceListing> searchServices(@RequestParam String query) {
        return serviceListingRepository.findById(query);
    }

    // Get all services
    @GetMapping("/all")
    public List<ServiceListing> getAllServices() {
        return serviceListingRepository.findAll();
    }
    }

