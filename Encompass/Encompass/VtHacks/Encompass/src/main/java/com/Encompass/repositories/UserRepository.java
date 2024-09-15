package com.Encompass.repositories;

import com.Encompass.Entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String Email);
}

