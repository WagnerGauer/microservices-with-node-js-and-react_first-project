import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(
    req.originalUrl,
    req.body.data,
    req.body.type,
    "that was baseUrl and data"
  );

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log("err");
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log("err");
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log("err");
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log("err");
  });

  res.send({ status: "OK" });
});

app.listen(4005, () => console.log("Listening on port 4005"));
