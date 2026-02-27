const app = require("./src/app");
const connectToDb = require("./src/config/db");

app.listen(3000, () => {
  console.log("Server listening on PORT 3000");
});

connectToDb();
