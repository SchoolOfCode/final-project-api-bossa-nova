import express from "express";
import request from "supertest";

const app = express();

app.get("/test", function (req, res) {
  res.status(200).json({ message: "pass" });
});

describe("GET /test", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/test")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });
});
