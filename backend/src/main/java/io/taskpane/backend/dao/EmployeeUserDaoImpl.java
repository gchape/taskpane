package io.taskpane.backend.dao;

import io.taskpane.backend.dto.EmployeeUserDto;
import jakarta.persistence.EntityManager;
import org.hibernate.jpa.AvailableHints;
import org.jspecify.annotations.NonNull;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeUserDaoImpl implements EmployeeUserDao {
    private final EntityManager em;

    public EmployeeUserDaoImpl(EntityManager em) {
        this.em = em;
    }

    @Override
    public EmployeeUserDto findByEmail(@NonNull String email) {
        var user = em.createQuery("""
                            select new io.taskpane.backend.dto.EmployeeUserDto(
                                e.firstName,
                                e.lastName,
                                e.email,
                                e.passwordHash,
                                e.role
                            )
                            from Employee e
                            where e.email = :email
                        """, EmployeeUserDto.class)
                .setParameter("email", email)
                .setHint(AvailableHints.HINT_READ_ONLY, true)
                .getSingleResultOrNull();

        if (user == null) {
            throw new UsernameNotFoundException(email);
        }

        return user;
    }
}
