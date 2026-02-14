package io.taskpane.backend.config.hibernate;

public class TenantContext {
    private static final ThreadLocal<String> CURRENT_TENANT_SCHEMA = new ThreadLocal<>();

    public static String getCurrentTenantSchema() {
        return CURRENT_TENANT_SCHEMA.get();
    }

    public static void setCurrentTenantSchema(String tenant) {
        CURRENT_TENANT_SCHEMA.set(tenant);
    }

    public static void clearCurrentTenantSchema() {
        CURRENT_TENANT_SCHEMA.remove();
    }
}
