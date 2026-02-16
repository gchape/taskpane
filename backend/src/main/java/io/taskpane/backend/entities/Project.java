package io.taskpane.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "project")
@SuppressWarnings("unused")
public class Project {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @JoinColumn(name = "company_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Company company;

    @JoinColumn(name = "manager_id")
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Employee manager;

    @NotNull
    @Size(max = 255)
    private String title;

    private String description;

    protected Project() {
    }

    public Project(Company company, Employee manager, String title, String description) {
        this.title = title;
        this.company = company;
        this.manager = manager;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Company getCompany() {
        return company;
    }

    public Employee getManager() {
        return manager;
    }

    public String getDescription() {
        return description;
    }
}
