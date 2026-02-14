package io.taskpane.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public record Contact(@Column(nullable = false, length = 50) String phone,
                      @Column(nullable = false, unique = true) String email) {
}
