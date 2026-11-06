# Development image: JDK + Maven Wrapper, source is bind-mounted by docker-compose
FROM eclipse-temurin:21-jdk

WORKDIR /usr/src/exercise-catalog-api

# Copy only the build descriptors first so the dependency layer is cached
COPY mvnw pom.xml ./
COPY .mvn .mvn
RUN sed -i 's/\r$//g' mvnw && chmod +x mvnw \
    && ./mvnw -B dependency:go-offline

COPY . .

CMD ["./mvnw", "spring-boot:run"]
