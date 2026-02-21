package io.taskpane.backend.config;

import io.taskpane.backend.config.hibernate.TenantFilter;
import io.taskpane.backend.dao.EmployeeUserDao;
import io.taskpane.backend.model.EmployeeUserDetails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AnonymousAuthenticationFilter;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenBasedRememberMeServices;

@Configuration(proxyBeanMethods = false)
public class SecurityConfig {
    private final EmployeeUserDao userDao;

    public SecurityConfig(EmployeeUserDao userDao) {
        this.userDao = userDao;
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http,
                                            RememberMeServices rememberMeServices) {

        return http
                .addFilterAfter(new TenantFilter(), AnonymousAuthenticationFilter.class)

                .authorizeHttpRequests(auth ->
                        auth.requestMatchers("/login", "/error").permitAll()
                                .anyRequest().authenticated()
                )

                .formLogin(conf ->
                        conf.usernameParameter("email")
                                .passwordParameter("password")
                                .loginPage("/login")
                                .defaultSuccessUrl("/", true)
                                .failureUrl("/error?error=true")
                )

                .rememberMe(conf ->
                        conf.rememberMeServices(rememberMeServices)
                )

                .build();
    }

    @Bean
    RememberMeServices rememberMeServices(UserDetailsService userDetailsService,
                                          @Value("${spring.security.remember-me.key}") String rememberMeKey) {

        var rememberMeServices = new PersistentTokenBasedRememberMeServices(
                rememberMeKey,
                userDetailsService,
                new JdbcTokenRepositoryImpl() {{
                    setCreateTableOnStartup(false);
                }}
        );
        rememberMeServices.setTokenValiditySeconds(60 * 60 * 6);

        return rememberMeServices;
    }

    @Bean
    UserDetailsService userDetailsService() {
        return email -> {
            var employeeUser = userDao.findByEmail(email);

            return new EmployeeUserDetails(employeeUser);
        };
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(10);
    }
}
