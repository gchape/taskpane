package io.taskpane.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public record Address(@Column String street,
                      @Column(length = 100) String city,
                      @Column(length = 100) String state,
                      @Column(length = 20) String zip) {
}
