import app from "../app.js";
import request from "supertest";
import { db } from "../app.js";

describe("GET /test", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/api/resources")
      .set("Accept", "application/json");
    console.log(response.body);
    expect(response.status).toEqual(200);
  });
});

// afterAll(() => db.close());
