import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  console.log(
    req.originalUrl,
    req.body.data,
    req.body.type,
    "that was baseUrl and data"
  );

  events.push(event);

  axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
    console.log(err);
  });
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log("err");
  });
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log("err");
  });
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log("err");
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log("Listening on port 4005"));
