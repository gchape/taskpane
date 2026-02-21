package io.taskpane.backend.exception;

public class EmployeeNotFoundException extends RuntimeException {

    public EmployeeNotFoundException(String email) {
        super("Employee with email '" + email + "' was not found.");
    }
}
