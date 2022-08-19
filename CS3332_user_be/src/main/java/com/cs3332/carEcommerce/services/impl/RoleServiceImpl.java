package com.cs3332.carEcommerce.services.impl;

import com.cs3332.carEcommerce.entity.Role;
import com.cs3332.carEcommerce.entity.RoleName;
import com.cs3332.carEcommerce.repositories.IRoleRepository;
import com.cs3332.carEcommerce.repositories.IUserRepository;
import com.cs3332.carEcommerce.services.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements IRoleService {

    @Autowired
    IRoleRepository roleRepository;

    @Override
    public Optional<Role> findByRoleName(RoleName roleName) {
        return roleRepository.findByRoleName(roleName);
    }
}
