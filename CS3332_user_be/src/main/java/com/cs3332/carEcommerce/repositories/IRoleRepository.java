package com.cs3332.carEcommerce.repositories;

import com.cs3332.carEcommerce.entity.Role;
import com.cs3332.carEcommerce.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(RoleName roleName);
}
