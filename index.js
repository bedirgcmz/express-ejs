import express from "express";
import * as path from "path";
import jediRouter from "./routes/jedi.js";
import sithRouter from "./routes/sith.js";

const app = express();
const port = 3002;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("pages/home", {
    pageTitle: "Wlcome to the force",
    subTitle: "Midaclorians",
    underline: false,
  });
});

app.use("/jedi", jediRouter);
app.use("/sith", sithRouter);

app.use(express.static("public"));
app.listen(port, console.log(`Project running on port ${port}`));
