import express from "express";

const sithRouter = express.Router();

sithRouter.get("/", (req, res) => {
  res.render("pages/force", {
    pageTitle: "Join the Dark Side",
    subTitle: "We deal in absolutes!",
    className: "sith",
  });
});

export default sithRouter;
