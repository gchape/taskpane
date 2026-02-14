package io.taskpane.backend.entities;

import io.taskpane.backend.model.Address;
import io.taskpane.backend.model.Contact;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.ColumnDefault;

import java.time.OffsetDateTime;

@Entity
@Table(name = "company")
@SuppressWarnings("unused")
public class Company {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    private Address address;

    @NotNull
    private Contact contact;

    @ColumnDefault("now()")
    private OffsetDateTime createdAt;

    public Company(String name, Contact contact) {
        this.name = name;
        this.contact = contact;
    }

    protected Company() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Address getAddress() {
        return address;
    }

    public Contact getContact() {
        return contact;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }
}
