import Express from "express";
import handlebars from "express-handlebars";

const app = Express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
    ok: true,
    hobbies: ["movies", "games", "dating"],
    form: {
      name: "Pedro",
      email: "pedro@gmail.com",
      age: 26,
      married: false,
    },
  });
});

app.get("/hobbies", (req, res) => {
  res.render("hobbies/index", {
    hobbies: ["movies", "games", "dating"],
  });
});

app.listen(8000);
