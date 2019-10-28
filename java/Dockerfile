# Build stage
FROM maven:3.6.2-jdk-8-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

# Package stage
FROM openjdk:8-jre-slim
COPY --from=build /home/app/target/ts-java-workshop-0.0.1-SNAPSHOT.jar /usr/local/lib/ts-java-workshop-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD java -jar /usr/local/lib/ts-java-workshop-0.0.1-SNAPSHOT.jar
