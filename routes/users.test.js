import app from "../app";
import request from "supertest";
import { getAllUsers } from "../helpers/users.js";

describe("GET /user", function () {
  it("GET api/user", async function () {
    const response = await request(app).get("/api/user");
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
    expect(Array.isArray(response.body.payload)).toBeTruthy();
  });
});

describe("POST /user", function () {
  it("POST api/user - good request", async function () {
    const response = await request(app).post("/api/user/auth0_user").send({
      jobTitle: "Junior Dev",
      company: "Google",
      jobStatus: "Applied",
      minSalary: 22000,
      maxSalary: 30000,
    });
    expect(response.status).toEqual(201);
    expect(response.body.success).toBeTruthy();
  });

  it("POST api/user - bad resquest", async function () {
    const response = await request(app).post("/api/user/auth0_user").send({
      jobTitle: "Junior Dev",
      company: "Google",
      jobStatus: 123,
      maxSalary: "30000",
    });
    expect(response.status).toEqual(400);
    expect(response.body.success).toBeFalsy();
  });
});

describe("GET api/user/:id - get one user", function () {
  it("GET api/user/:id - user found", async function () {
    const response = await request(app).get("/api/user/auth0_user");
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
    expect(Array.isArray(response.body.payload)).toBeTruthy();
    expect(response.body.payload.length).toBe(1);
  });

  it("GET api/user/:id - user NOT found", async function () {
    const response = await request(app).get("/api/user/not_a_user");
    expect(response.status).toEqual(404);
    expect(response.body.success).toBeFalsy();
  });
});
