package com.cs3332.carEcommerce.services;

import com.cs3332.carEcommerce.entity.User;
import com.cs3332.carEcommerce.DTOmodel.DTO.UserDTO;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    List<UserDTO> getAllUser();
    Optional<User> getUserById(Long id);
    Optional<User> getUserByEmail(String email);
    User saveUser(User user);
    User updateUserByID(User newUser, Long id);
    User updateUserByEmail(User newUser, String email);
    Boolean existsByEmail(String email);


}
