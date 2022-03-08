import app from "../app.js";
import request from "supertest";
import { getAllResources } from "../helpers/resources.js";
import { db } from "../db";

describe("Resources", function () {
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

  describe("GET resources by id", function () {
    it("GET api/resources/:id - resource found", async function () {
      const resources = await getAllResources();
      const id = String(resources[resources.length - 1]._id);
      const response = await request(app).get(`/api/resources/${id}`);
      expect(response.status).toEqual(200);
      expect(response.body.success).toBeTruthy();
      expect(Array.isArray(response.body.payload)).toBeTruthy();
      expect(response.body.payload.length).toBe(1);
    });
  });

  describe("UPDATE resources by id", function () {
    it("PUT api/resources/:id - good request", async function () {
      const resources = await getAllResources();
      const id = String(resources[resources.length - 1]._id);
      const response = await request(app)
        .put(`/api/resources/${id}`)
        .send({ link: "https://www.google.com" });
      expect(response.status).toEqual(200);
      expect(response.body.success).toBeTruthy();
      expect(typeof response.body.payload).toBe("object");
    });
  });

  describe("DELETE resources by id", function () {
    it("DELETE api/resources/:id - resource found", async function () {
      const resources = await getAllResources();
      const id = String(resources[resources.length - 1]._id);
      const response = await request(app).delete(`/api/resources/${id}`);
      expect(response.status).toEqual(200);
      expect(response.body.success).toBeTruthy();
    });
  });
  // afterAll(() => db.close());
});
