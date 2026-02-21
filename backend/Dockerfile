# Build stage
FROM maven:3.9.12-eclipse-temurin-25 AS build

WORKDIR /backend

COPY pom.xml .

RUN mvn -B -q -e -DskipTests dependency:go-offline

COPY src ./src

RUN mvn -B -q clean package -DskipTests

# Production stage
FROM eclipse-temurin:25-jre-alpine
WORKDIR /backend

COPY --from=build /backend/target/*.jar backend.jar

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s \
  CMD wget -qO- http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-XX:MaxRAMPercentage=75.0", "-jar", "backend.jar"]