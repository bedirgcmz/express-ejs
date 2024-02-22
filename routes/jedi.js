import express from "express";

const jediRouter = express.Router();

jediRouter.get("/", (req, res) => {
  res.render("pages/force", {
    pageTitle: "Trust the Force!",
    subTitle: "we are the good guys!",
    className: "jedi",
  });
});

export default jediRouter;
