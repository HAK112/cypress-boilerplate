FROM cypress/base:12.1.0

WORKDIR /cypressautomation
COPY ./package.json package.json
RUN npm install
RUN npm install cypress-cucumber-preprocessor
COPY ./tsconfig.json ./tsconfig.json
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
RUN npm i && npx cypress open 