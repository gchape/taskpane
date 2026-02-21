package io.taskpane.backend.dao;

import io.taskpane.backend.dto.EmployeeUserDto;
import org.jspecify.annotations.NonNull;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface EmployeeUserDao {
    EmployeeUserDto findByEmail(@NonNull String email) throws UsernameNotFoundException;
}
