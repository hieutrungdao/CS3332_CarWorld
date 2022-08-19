package com.cs3332.carEcommerce.controller;

import com.cs3332.carEcommerce.DTOmodel.response.ResponseObject;
import com.cs3332.carEcommerce.entity.User;
import com.cs3332.carEcommerce.DTOmodel.DTO.UserDTO;
import com.cs3332.carEcommerce.DTOmodel.mapper.UserMapper;
import com.cs3332.carEcommerce.services.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER', 'AUTHOR')")
    public List<UserDTO> getListUser() {
        return userService.getAllUser();
    }

    //profile
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER', 'AUTHOR')")
    public ResponseEntity<ResponseObject> getUserByID(@PathVariable Long id) {

        Optional<User> foundUser = userService.getUserById(id);

        if (foundUser.isPresent()) {

            UserDTO userDTO = UserMapper.toUserDTO(foundUser.get());
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Query user successfully", userDTO)
            );
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Failed", "Cannot find user with id = " + id, "")
            );
        }

    }

    @PutMapping("update/{id}")
    @PreAuthorize("hasAnyAuthority('USER', 'AUTHOR')")
    public ResponseEntity<ResponseObject> updateUserByID(@RequestBody User newUser, @PathVariable Long id) {

        User updateUser = updateUser = userService.updateUserByID(newUser, id);

        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update User by ID Successful", UserMapper.toUserDTO(updateUser))
        );
    }

    //profile
    @PutMapping("/{email}")
    @PreAuthorize("hasAnyAuthority('USER', 'AUTHOR')")
    public ResponseEntity<ResponseObject> updateUserByEmail(@RequestBody User newUser, @PathVariable String email) {

        User updatedUser = userService.updateUserByEmail(newUser, email);

        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update User by Email Successful", updatedUser)
        );
    }

}
