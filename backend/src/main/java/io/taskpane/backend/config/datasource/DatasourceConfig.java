package io.taskpane.backend.config.datasource;

import com.zaxxer.hikari.HikariDataSource;
import net.ttddyy.dsproxy.listener.logging.SLF4JQueryLoggingListener;
import net.ttddyy.dsproxy.support.ProxyDataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.autoconfigure.DataSourceProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;
import java.util.concurrent.TimeUnit;

@Configuration(proxyBeanMethods = false)
public class DatasourceConfig {
    @Bean
    @ConfigurationProperties(value = "datasource")
    HikariDataSource hikariDataSource(DataSourceProperties properties) {
        return properties.initializeDataSourceBuilder()
                .type(HikariDataSource.class)
                .build();
    }

    @Bean
    @Primary
    DataSource dataSource(HikariDataSource hikariDataSource) {
        var loggingListener = new SLF4JQueryLoggingListener();
        loggingListener.setWriteDataSourceName(false);
        loggingListener.setWriteConnectionId(false);

        return ProxyDataSourceBuilder.create()
                .dataSource(hikariDataSource)
                .name("DS-PROXY")
                .listener(loggingListener)
                .logSlowQueryBySlf4j(200, TimeUnit.MILLISECONDS)
                .multiline()
                .build();
    }
}
