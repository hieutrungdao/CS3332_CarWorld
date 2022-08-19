package com.cs3332.carEcommerce.DTOmodel.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SignInForm {

    private String email;
    private String password;

}
