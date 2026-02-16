package io.taskpane.backend.config.hibernate;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class TenantRequestFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain chain) throws ServletException, IOException {
        String tenant = request.getHeader("TENANT-SCHEMA");

        if (tenant == null || tenant.isBlank()) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Missing TENANT-SCHEMA header");
            return;
        }

        try {
            TenantContext.setCurrentTenantSchema(tenant);
            chain.doFilter(request, response);
        } finally {
            TenantContext.clearCurrentTenantSchema();
        }
    }
}
