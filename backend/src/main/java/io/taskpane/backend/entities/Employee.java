package io.taskpane.backend.entities;

import io.taskpane.backend.model.EmployeeRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.OffsetDateTime;

@Entity
@Table(name = "employee")
@SuppressWarnings("unused")
public class Employee {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @JoinColumn(name = "company_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Company company;

    @NotNull
    @ColumnDefault("'EMPLOYEE'")
    @Enumerated(EnumType.STRING)
    private EmployeeRole role;

    @NotNull
    @Size(max = 255)
    private String email;

    @NotNull
    @Size(max = 64)
    private String firstName;

    @NotNull
    @Size(max = 64)
    private String lastName;

    @NotNull
    @Size(max = 255)
    private String passwordHash;

    @ColumnDefault("now()")
    private OffsetDateTime createdAt;

    protected Employee() {
    }

    public Employee(Company company, EmployeeRole role, String email,
                    String firstName, String lastName, String passwordHash) {
        this.company = company;
        this.role = role;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passwordHash = passwordHash;
    }

    public Long getId() {
        return id;
    }

    public Company getCompany() {
        return company;
    }

    public EmployeeRole getRole() {
        return role;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }
}
