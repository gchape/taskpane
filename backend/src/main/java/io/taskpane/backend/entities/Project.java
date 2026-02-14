package io.taskpane.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.OffsetDateTime;

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
    @ColumnDefault("false")
    private Boolean isDone;

    @NotNull
    @Size(max = 255)
    private String title;

    private String description;

    @ColumnDefault("now()")
    private OffsetDateTime createdAt;

    protected Project() {
    }

    public Project(Company company, Employee manager, String title, String description) {
        this.company = company;
        this.manager = manager;
        this.title = title;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public Company getCompany() {
        return company;
    }

    public Employee getManager() {
        return manager;
    }

    public Boolean getDone() {
        return isDone;
    }

    public void setDone(Boolean done) {
        isDone = done;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }
}
