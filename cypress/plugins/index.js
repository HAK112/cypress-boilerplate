const cucumber = require("cypress-cucumber-preprocessor").default;
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  const options = {
    browserifyOptions: {
      extensions: [".js", ".ts"],
      plugin: [["tsify"]],
    },
  };
  on("file:preprocessor", cucumber(options));
};
