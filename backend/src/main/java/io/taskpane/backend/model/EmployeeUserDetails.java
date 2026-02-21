package io.taskpane.backend.model;

import io.taskpane.backend.dto.EmployeeUserDto;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class EmployeeUserDetails implements UserDetails {
    private final EmployeeUserDto employeeUser;

    public EmployeeUserDetails(EmployeeUserDto employeeUser) {
        this.employeeUser = employeeUser;
    }

    @Override
    public @NullMarked Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + employeeUser.role()));
    }

    @Override
    public @Nullable String getPassword() {
        return employeeUser.passwordHash();
    }

    @Override
    public @NullMarked String getUsername() {
        return employeeUser.email();
    }
}
