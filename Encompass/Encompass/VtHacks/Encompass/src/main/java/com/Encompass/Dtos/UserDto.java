package com.Encompass.Dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserDto {

    @Email
    @NotEmpty(message = "Email is required")
    private String email;

    @NotEmpty(message = "Password is required")
    private String password;

    @NotEmpty(message = "Name is required")
    private String name;

    @NotEmpty(message = "Role is required")
    private String role;

    private String address;
    private String serviceType;
    private String serviceDescription;
}
