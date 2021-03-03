const app = (module.exports = require("express")());
const {
 getAll,
 search,
 detail
} = require("../controllers").movie;

app.get("/", getAll);
app.get("/detail/", detail);
app.get("/search/", search);
