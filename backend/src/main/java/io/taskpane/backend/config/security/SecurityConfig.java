package io.taskpane.backend.config.security;

import io.taskpane.backend.config.hibernate.TenantFilter;
import io.taskpane.backend.dao.EmployeeUserDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AnonymousAuthenticationFilter;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenBasedRememberMeServices;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration(proxyBeanMethods = false)
public class SecurityConfig {
    private final EmployeeUserDao userDao;

    @Value("${frontend.url}")
    private String frontendUrl;

    public SecurityConfig(EmployeeUserDao userDao) {
        this.userDao = userDao;
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http,
                                            RememberMeServices rememberMeServices) {

        var urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        var corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin(frontendUrl);
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.setAllowCredentials(true);

        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);

        return http
                .cors(cors -> cors
                        .configurationSource(urlBasedCorsConfigurationSource)
                )

                .csrf(CsrfConfigurer::spa)

                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                        .sessionFixation(SessionManagementConfigurer.SessionFixationConfigurer::migrateSession)
                        .maximumSessions(1)
                        .expiredUrl(frontendUrl + "?expired=true")
                )

                .addFilterAfter(new TenantFilter(), AnonymousAuthenticationFilter.class)

                .authorizeHttpRequests(registry -> registry
                        .requestMatchers(
                                frontendUrl + "/login",
                                frontendUrl + "/error").permitAll()
                        .anyRequest().authenticated()
                )

                .formLogin(formLogin -> formLogin
                        .usernameParameter("email")
                        .passwordParameter("password")

                        .loginPage(frontendUrl + "/login")
                        .defaultSuccessUrl(frontendUrl + "/", true)
                        .failureUrl(frontendUrl + "/error" + "?error=true")
                )

                .rememberMe(rememberMe -> rememberMe
                        .rememberMeServices(rememberMeServices)
                )

                .build();
    }

    @Bean
    HttpSessionEventPublisher httpSessionEventPublisher() {
        return new HttpSessionEventPublisher();
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
