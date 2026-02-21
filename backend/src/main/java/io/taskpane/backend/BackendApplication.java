package io.taskpane.backend;

import org.springframework.boot.Banner;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication(
        proxyBeanMethods = false,
        scanBasePackages = {
                "io.taskpane.backend.dao",
                "io.taskpane.backend.config",
                "io.taskpane.backend.service",
                "io.taskpane.backend.entities",
                "io.taskpane.backend.controller",
        },
        exclude = {
                JmxAutoConfiguration.class
        }
)
public class BackendApplication {
    static void main(String[] args) {
        new SpringApplicationBuilder()
                .sources(BackendApplication.class)
                .bannerMode(Banner.Mode.OFF)
                .web(WebApplicationType.SERVLET)
                .headless(false)
                .run(args);
    }
}
