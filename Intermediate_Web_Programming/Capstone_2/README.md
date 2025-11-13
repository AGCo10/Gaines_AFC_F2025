# Brightforge Docs

## About

A storefront style web application with simple configuration using Spring Boot, React, and TypeScript.

## Running the application

The application currently runs as a separate frontend and backend, both instances will need to be running for it to function.

### Start dependent services

Run `docker-compose up -d` to start containers for Postgres

### Start the Spring Boot application

By default, the application runs at [http://localhost:8080](http://localhost:8080).

Run the backend application with the following commands:

- MacOS: `./gradlew bootRun` | `./gradlew bR`

### Start the React application

As configured, the application runs at [http://localhost:5434](http://localhost:5434).

Run the frontend application with the following commands:

- MacOS: `cd frontend && yarn dev`

## Running Tests

- Run `docker compose up -d`

| Tests to Run | Command(s)                                         |
|:-------------|:---------------------------------------------------|
| Frontend     | Run `yarn test` in the `frontend` director         |
| Backend      | Run `./gradlew test` in the project root directory 


## CRUD Functionality
The frontend uses a WidgetClient.ts file to map to the backend with axios API calls.
The backend uses a DTO to transfer data from the frontend to the DB/repository.

## Error Handling
Limited Error Handling has been implemented, however YUP validation is used to handle most of the CRUD requests.

## Known Issues/Incomplete Features
Still working on getting images to be uploadable for each new widget. For now, the default image is applied to all of the widgets.