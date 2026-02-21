package io.taskpane.backend.dao;

import io.taskpane.backend.dto.EmployeeDto;
import io.taskpane.backend.entities.Employee;
import jakarta.persistence.EntityManager;
import org.hibernate.jpa.AvailableHints;
import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {
    private final EntityManager em;

    public EmployeeDaoImpl(EntityManager em) {
        this.em = em;
    }

    @Override
    public void save(@NonNull Employee employee) {
        em.persist(employee);
    }

    @Override
    public Optional<String> findPasswordByEmail(@NonNull String email) {
        return Optional.ofNullable(
                em.createQuery("""
                                select p.passwordHash
                                from Employee p
                                where p.email = :email
                                """, String.class)
                        .setParameter("email", email)
                        .setHint(AvailableHints.HINT_READ_ONLY, true)
                        .getSingleResultOrNull()
        );
    }

    @Override
    public Optional<EmployeeDto> findByEmail(@NonNull String email) {
        return Optional.ofNullable(
                em.createQuery("""
                                    select new io.taskpane.backend.dto.EmployeeDto(
                                        e.firstName,
                                        e.lastName,
                                        e.email
                                    )
                                    from Employee e
                                    where e.email = :email
                                """, EmployeeDto.class)
                        .setParameter("email", email)
                        .setHint(AvailableHints.HINT_READ_ONLY, true)
                        .getSingleResultOrNull()
        );
    }

    @Override
    public void updatePassword(@NonNull String email,
                               @NonNull String newPassword) throws IllegalArgumentException {
        var updatedRows = em.createQuery("""
                        update Employee e
                        set e.passwordHash = :newPassword
                        where e.email = :email
                        """)
                .setParameter("email", email)
                .setParameter("newPassword", newPassword)
                .executeUpdate();

        if (updatedRows == 0) {
            throw new IllegalArgumentException("Employee with email " + email + " not found");
        }
    }

    @Override
    public Optional<String> findRoleByEmail(@NonNull String email) {
        return Optional.ofNullable(
                em.createQuery("""
                                select e.role
                                from Employee e
                                where e.email = :email
                                """, String.class)
                        .setParameter("email", email)
                        .setHint(AvailableHints.HINT_READ_ONLY, true)
                        .getSingleResultOrNull()
        );
    }
}
