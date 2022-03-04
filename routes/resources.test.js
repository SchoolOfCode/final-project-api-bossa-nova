import app from "../app.js";
import request from "supertest";
// import { db } from "../app.js";

describe("GET /resources", function () {
  it("get/api/resources with correct response", async function () {
    const response = await request(app)
      .get("/api/resources")
      .set("Accept", "application/json");
    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
    expect(Array.isArray(response.body.payload)).toBeTruthy();
  });
});

// afterAll(() => db.close());
