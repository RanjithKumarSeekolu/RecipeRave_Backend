require("dotenv").config();
const app = require("./src/app");
const { connectDB } = require("./src/services/postgress");
const {
  connectSequelize,
  disconnectSequelize,
} = require("./src/services/sequelize");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("recipe rave");
  res.send("Welcome to RecipeRave!");
});

app.listen(PORT, () => {
  //   connectDB();
  connectSequelize();
  console.log(`listening on port ${PORT}`);
});
