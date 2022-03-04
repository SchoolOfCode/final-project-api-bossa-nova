import app from "../app.js";
import request from "supertest";
// import { db } from "../app.js";

describe("GET /resources", function () {
  it("GET api/resources with correct response", async function () {
    const response = await request(app)
      .get("/api/resources")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
    expect(Array.isArray(response.body.payload)).toBeTruthy();
  });
});

describe("POST /resources", function () {
  it("POST api/resources - good request", async function () {
    const response = await request(app)
      .post("/api/resources")
      .send({ link: "https://www.facebook.com" });
    expect(response.status).toBe(201);
    expect(response.body.success).toBeTruthy();
    expect(typeof response.body.payload).toBe("object");
  });

  it("POST api/resources - bad request", async function () {
    const response = await request(app)
      .post("/api/resources")
      .send({ link: 1234 });
    expect(response.status).toBe(400);
    expect(response.body.success).toBeFalsy();
  });
});

// afterAll(() => db.close());
