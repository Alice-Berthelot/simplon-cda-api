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

const app_port = process.env.PORT || 3000;

app.listen(app_port, () => {
  console.log(`Server is running on http://localhost:${app_port}`);
});
