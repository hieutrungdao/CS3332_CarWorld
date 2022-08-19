package com.cs3332.carEcommerce.DTOmodel.DTO;

import com.cs3332.carEcommerce.entity.Role;
import lombok.Data;

import java.util.Set;

@Data
public class UserDTO {

    private Long Id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String avatar;
    private Set<Role> roles;

}
