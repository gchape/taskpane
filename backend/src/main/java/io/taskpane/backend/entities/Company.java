package io.taskpane.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

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

    @NotNull
    private String email;

    @NotNull
    private String phone;

    @OneToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JoinTable(
            name = "company_address",
            joinColumns = {
                    @JoinColumn(name = "company_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "address_id",
                            nullable = false,
                            unique = true)
            })
    private Address address;

    protected Company() {
    }

    public Company(String name, String email, String phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public Address getAddress() {
        return address;
    }
}
