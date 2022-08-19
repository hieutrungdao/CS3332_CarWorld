package com.cs3332.carEcommerce.DTOmodel.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SignUpForm {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String password;
    private Set<String> roles;

}
