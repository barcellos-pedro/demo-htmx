import Express from "express";
import handlebars from "express-handlebars";

import { data } from "./mock.js";
import HELPERS from "./helpers.js";

const app = Express();

app.use(Express.json());
app.use(Express.static("public"));
app.use(Express.urlencoded({ extended: false }));

app.engine("handlebars", handlebars.engine({ helpers: HELPERS }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("index", data));

app.get("/partials/hobbies", (req, res) => {
  res.render("hobbies/index", { hobbies: data.hobbies });
});

app.post("/form", (req, res) => {
  res.json(req.body);
});

app.listen(8000);
