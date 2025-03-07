const app = require("./config/app"); 
const sequelize = require("./config/db"); 
require("dotenv").config();

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error(
      "An error occured while synchronizing the database:",
      error
    );
  });

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
