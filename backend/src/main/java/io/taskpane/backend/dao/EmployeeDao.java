package io.taskpane.backend.dao;

import io.taskpane.backend.dto.EmployeeDto;
import io.taskpane.backend.entities.Employee;
import org.jspecify.annotations.NonNull;

import java.util.Optional;

public interface EmployeeDao {
    void save(@NonNull Employee employee);

    Optional<EmployeeDto> findByEmail(@NonNull String email);

    Optional<String> findPasswordByEmail(@NonNull String email);

    void updatePassword(@NonNull String email, @NonNull String newPassword);

    Optional<String> findRoleByEmail(@NonNull String email);
}
