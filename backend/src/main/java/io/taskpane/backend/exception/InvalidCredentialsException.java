package io.taskpane.backend.exception;

public class InvalidCredentialsException extends RuntimeException {

    public InvalidCredentialsException() {
        super("Authentication failed: invalid email or password.");
    }
}
