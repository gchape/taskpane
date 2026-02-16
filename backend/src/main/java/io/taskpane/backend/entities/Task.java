package io.taskpane.backend.entities;

import io.taskpane.backend.model.TaskStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;

@Entity
@Table(name = "task")
@SuppressWarnings("unused")
public class Task {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @JoinColumn(name = "project_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Project project;

    @JoinColumn(name = "assignee_id")
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Employee assignee;

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate dueDate;

    @NotNull
    @Size(max = 255)
    private String title;

    private String description;

    @NotNull
    @ColumnDefault("'TODO'")
    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    protected Task() {
    }

    public Task(Project project, LocalDate startDate,
                LocalDate dueDate, String title, String description) {
        this.title = title;
        this.project = project;
        this.dueDate = dueDate;
        this.startDate = startDate;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public Project getProject() {
        return project;
    }

    public Employee getAssignee() {
        return assignee;
    }

    public void setAssignee(Employee assignee) {
        this.assignee = assignee;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }
}
