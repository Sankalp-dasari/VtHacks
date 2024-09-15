package com.Encompass.Entities;

import com.Encompass.Role;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "users")
public class User {

    @Id
    private String id;
    private String email;
    private String password;
    private String name;
    private String address;
    private Role role;

    private String serviceType;
    private String serviceDescription;
}