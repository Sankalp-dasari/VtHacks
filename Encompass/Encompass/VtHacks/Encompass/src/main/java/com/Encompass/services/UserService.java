package com.Encompass.services;

import com.Encompass.Dtos.UserDto;
import com.Encompass.Entities.User;
import com.Encompass.Role;
import com.Encompass.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


@Service
public class UserService {

   @Autowired
    private UserRepository userRepository;


    public User registerUser(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setName(userDto.getName());
        user.setRole(Role.valueOf(userDto.getRole().toUpperCase()));
        user.setAddress(userDto.getAddress());


        if (user.getRole() == Role.SERVICE_PROVIDER) {
            user.setServiceType(userDto.getServiceType());
            user.setServiceDescription(userDto.getServiceDescription());
        }

        return userRepository.save(user);
    }

}
