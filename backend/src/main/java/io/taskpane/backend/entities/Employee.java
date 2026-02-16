package io.taskpane.backend.entities;

import io.taskpane.backend.model.EmployeeRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "employee")
@SuppressWarnings("unused")
public class Employee {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 255)
    private String email;

    @NotNull
    @Size(max = 64)
    private String lastName;

    @NotNull
    @Size(max = 64)
    private String firstName;

    @NotNull
    @ColumnDefault("'EMPLOYEE'")
    @Enumerated(EnumType.STRING)
    private EmployeeRole role;

    @NotNull
    @Size(max = 255)
    private String passwordHash;

    @NotNull
    @JoinColumn(name = "company_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Company company;

    @OneToOne(
            fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST, CascadeType.REMOVE
            })
    @JoinTable(
            name = "employee_address",
            joinColumns = {
                    @JoinColumn(name = "employee_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "address_id",
                            nullable = false,
                            unique = true
                    )
            }
    )
    private Address address;

    protected Employee() {
    }

    public Employee(Company company, EmployeeRole role, String email,
                    String firstName, String lastName, String passwordHash) {
        this.role = role;
        this.email = email;
        this.company = company;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passwordHash = passwordHash;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public EmployeeRole getRole() {
        return role;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Company getCompany() {
        return company;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getPasswordHash() {
        return passwordHash;
    }
}
