const { app } = require("./app");
const { PORT } = require("./config/constants");
const { sequelize } = require("./models");
const { httpServer } = require("./graphql");

const bootStrap = async () => {
  try {
    await httpServer.listen(PORT);
    console.log(
      `🚀  GraphQL server running at port: ${PORT}`,
      `http://localhost:${PORT}/graphql`
    );
    sequelize
      .authenticate()
      .then(() => console.log("Database connected!!"))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log("Not able to run GraphQL server");
  }
};

bootStrap();
