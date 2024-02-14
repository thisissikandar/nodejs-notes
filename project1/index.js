const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

// app.use(express.json({limit:"17kb"}))
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server " });
});

app.get("/users", (req, res) => {
  const html = `
    <ul>${users.map((item) => `<li>${item.first_name}</li>\n`)}</ul>
    `;
  res.send(html);
});

// ################Rest API############
app.get("/api/users", (req, res) => {
  res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const singleUser = users.find((user) => user.id == id);
    res.json(singleUser);
  })
  .patch((req, res) => {
    res.json("pending");
  })
  .delete((req, res) => {
    const id = req.params.id;
    const deleteItem = users.map((user) => user.id == id).indexOf(id)
    users.splice(deleteItem, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        res.json({ status: "Success", id: users.id });
      });
  })

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log(body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "Success", id: users.id });
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`App Running on Port ${PORT}`);
});
