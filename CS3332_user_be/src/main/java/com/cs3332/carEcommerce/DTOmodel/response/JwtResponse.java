package com.cs3332.carEcommerce.DTOmodel.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JwtResponse {

    private String message;
    private String token;
    private String type = "Bearer";
    private Long id;
    private String name;
    private Collection<? extends GrantedAuthority> roles;

//    private Object data;

    public JwtResponse(String message, String token, Long id, String name, Collection<? extends GrantedAuthority> roles) {
        this.message = message;
        this.token = token;
        this.id = id;
        this.name = name;
        this.roles = roles;
    }

}
