import app from "../app";
import request from "supertest";

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
});
