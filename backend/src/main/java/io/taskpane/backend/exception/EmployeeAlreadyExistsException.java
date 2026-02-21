package io.taskpane.backend.exception;

public class EmployeeAlreadyExistsException extends RuntimeException {

    public EmployeeAlreadyExistsException(String email) {
        super("Registration failed: employee with email '" + email + "' already exists.");
    }
}
