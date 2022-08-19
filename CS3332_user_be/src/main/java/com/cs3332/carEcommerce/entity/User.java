package com.cs3332.carEcommerce.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "first_name", nullable = false, length = 25)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 45)
    private String lastName;

    @Column(unique = true, nullable = false, length = 45)
    private String email;

    @Column(unique = true, length = 14)
    private String phone;

    //@JsonIgnore //when return request by json file, the file will hide password field
    @Column(nullable = false, length = 150)
    private String password;

    @Column(length = 100)
    private String avatar;

    //@ManyToMany(fetch = FetchType.EAGER)
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable( name = "user_role",
                joinColumns = @JoinColumn(name = "user_id"),            //primary foreign key pointer to ID field of user table (hear)
                inverseJoinColumns = @JoinColumn(name = "role_id"))     //sub foreign key pointer to ID field of roles table (hear)
    private Set<Role> roles = new HashSet<>();

    public User(String firstName, String lastName, String email, String phone, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

}
