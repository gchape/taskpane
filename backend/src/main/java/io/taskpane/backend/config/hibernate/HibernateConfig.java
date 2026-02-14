package io.taskpane.backend.config.hibernate;

import com.zaxxer.hikari.HikariDataSource;
import org.hibernate.cfg.AvailableSettings;
import org.hibernate.context.spi.CurrentTenantIdentifierResolver;
import org.hibernate.engine.jdbc.connections.spi.MultiTenantConnectionProvider;
import org.springframework.boot.hibernate.autoconfigure.HibernatePropertiesCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@Configuration(proxyBeanMethods = false)
public class HibernateConfig {
    private static final String DEFAULT_SCHEMA = "public";

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(DataSource dataSource) {
        return props -> {
            props.put(AvailableSettings.MULTI_TENANT_IDENTIFIER_RESOLVER,
                    new TenantIdentifierResolver());
            props.put(AvailableSettings.MULTI_TENANT_CONNECTION_PROVIDER,
                    new TenantConnectionProvider(dataSource));
        };
    }

    static class TenantIdentifierResolver implements CurrentTenantIdentifierResolver<String> {
        @Override
        public String resolveCurrentTenantIdentifier() {
            String tenant = TenantContext.getCurrentTenantSchema();
            return tenant != null ? tenant : DEFAULT_SCHEMA;
        }

        @Override
        public boolean validateExistingCurrentSessions() {
            return true;
        }
    }

    static class TenantConnectionProvider implements MultiTenantConnectionProvider<String> {
        private final DataSource dataSource;

        TenantConnectionProvider(DataSource dataSource) {
            this.dataSource = dataSource;
        }

        @Override
        public Connection getAnyConnection() throws SQLException {
            return dataSource.getConnection();
        }

        @Override
        public void releaseAnyConnection(Connection connection) throws SQLException {
            connection.close();
        }

        @Override
        public Connection getConnection(String tenantId) throws SQLException {
            Connection connection = getAnyConnection();
            connection.setSchema(tenantId);
            return connection;
        }

        @Override
        public void releaseConnection(String tenantId, Connection connection) throws SQLException {
            connection.setSchema(DEFAULT_SCHEMA);
            connection.close();
        }

        @Override
        public boolean supportsAggressiveRelease() {
            return false;
        }

        @Override
        public boolean isUnwrappableAs(Class<?> unwrapType) {
            return HikariDataSource.class.isAssignableFrom(unwrapType);
        }

        @Override
        @SuppressWarnings("unchecked")
        public <T> T unwrap(Class<T> unwrapType) {
            if (isUnwrappableAs(unwrapType)) return (T) dataSource;
            throw new IllegalArgumentException("Cannot unwrap to " + unwrapType);
        }
    }
}
