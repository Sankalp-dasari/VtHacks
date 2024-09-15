package com.Encompass.repositories;

import com.Encompass.Entities.ServiceListing;
import org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ServiceListingRepo extends MongoRepository<ServiceListing, String> {
}
