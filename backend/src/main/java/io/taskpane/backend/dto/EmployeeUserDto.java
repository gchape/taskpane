package io.taskpane.backend.dto;

import io.taskpane.backend.model.EmployeeRole;

public record EmployeeUserDto(
        String firstName,
        String lastName,
        String email,
        String passwordHash,
        String role
) {
    public EmployeeUserDto(String firstName, String lastName, String email, String passwordHash, EmployeeRole role) {
        this(firstName, lastName, email, passwordHash, role.name());
    }
}
