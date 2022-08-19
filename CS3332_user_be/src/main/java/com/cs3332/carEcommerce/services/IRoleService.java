package com.cs3332.carEcommerce.services;

import com.cs3332.carEcommerce.entity.Role;
import com.cs3332.carEcommerce.entity.RoleName;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByRoleName(RoleName name);
}
