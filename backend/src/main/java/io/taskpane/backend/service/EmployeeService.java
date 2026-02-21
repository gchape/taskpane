package io.taskpane.backend.service;

import io.taskpane.backend.dao.EmployeeDao;
import io.taskpane.backend.dto.EmployeeDto;
import io.taskpane.backend.entities.Employee;
import io.taskpane.backend.exception.EmployeeAlreadyExistsException;
import io.taskpane.backend.exception.EmployeeNotFoundException;
import io.taskpane.backend.exception.InvalidCredentialsException;
import jakarta.transaction.Transactional;
import org.jspecify.annotations.NonNull;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Transactional
public class EmployeeService {
    private final EmployeeDao employeeDao;
    private final PasswordEncoder passwordEncoder;

    public EmployeeService(EmployeeDao employeeDao,
                           PasswordEncoder passwordEncoder) {
        this.employeeDao = employeeDao;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(@NonNull Employee employee) {
        if (employeeDao.findByEmail(employee.getEmail()).isPresent()) {
            throw new EmployeeAlreadyExistsException(employee.getEmail());
        }

        employee.setPasswordHash(passwordEncoder.encode(employee.getPasswordHash()));
        employeeDao.save(employee);
    }

    @Transactional(Transactional.TxType.SUPPORTS)
    public EmployeeDto findByEmail(@NonNull String email) {
        return employeeDao.findByEmail(email)
                .orElseThrow(() -> new EmployeeNotFoundException(email));
    }

    public void updatePassword(@NonNull String email,
                               @NonNull String currentPassword,
                               @NonNull String newPassword) {
        var password = employeeDao.findPasswordByEmail(email)
                .orElseThrow(() -> new EmployeeNotFoundException(email));

        if (!passwordEncoder.matches(currentPassword, password)) {
            throw new InvalidCredentialsException();
        }

        employeeDao.updatePassword(
                email,
                Objects.requireNonNull(passwordEncoder.encode(newPassword))
        );
    }

    public GrantedAuthority getAuthority(@NonNull String email) {
        var role = employeeDao.findRoleByEmail(email)
                .orElseThrow(() -> new EmployeeNotFoundException(email));

        return new SimpleGrantedAuthority(role);
    }
}
