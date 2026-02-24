package io.taskpane.backend.config.security;

import io.taskpane.backend.dto.EmployeeUserDto;
import org.jspecify.annotations.NullMarked;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class EmployeeUserDetails implements UserDetails {
    private final String employeeEmail;
    private final EmployeeUserDto employeeUser;

    public EmployeeUserDetails(final EmployeeUserDto employeeUser) {
        this.employeeUser = employeeUser;
        this.employeeEmail = employeeUser.email();
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

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeUserDetails that = (EmployeeUserDetails) o;
        return Objects.equals(employeeEmail, that.employeeEmail);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(employeeEmail);
    }
}
