package com.cs3332.carEcommerce.DTOmodel.mapper;

import com.cs3332.carEcommerce.entity.User;
import com.cs3332.carEcommerce.DTOmodel.DTO.UserDTO;

public class UserMapper {

    public static UserDTO toUserDTO(User user) {

        UserDTO tmp = new UserDTO();
        tmp.setId(user.getId());
        tmp.setFirstName(user.getFirstName());
        tmp.setLastName(user.getLastName());
        tmp.setEmail(user.getEmail());
        tmp.setPhone(user.getPhone());
        tmp.setAvatar(user.getAvatar());
        tmp.setRoles(user.getRoles());

        return tmp;
    }

}
