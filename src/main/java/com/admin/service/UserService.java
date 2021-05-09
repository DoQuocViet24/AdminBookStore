package com.admin.service;

import com.admin.model.User;
import com.admin.model.security.UserRole;

import java.util.Set;

public interface UserService {
    User createUser(User user, Set<UserRole> userRoles) throws Exception;

    User save(User user);
}
