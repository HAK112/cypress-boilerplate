FROM cypress/base:12.1.0

WORKDIR /cypressautomation
COPY ./tsconfig.json ./tsconfig.json
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install && npm install cypress-cucumber-preprocessor && npx cypress run
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run
