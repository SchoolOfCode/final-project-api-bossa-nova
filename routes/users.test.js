import app from "../app";
import request from "supertest";
import { getUsersByID } from "../helpers/users";

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

  it("POST api/user - good request two", async function () {
    const response = await request(app).post("/api/user/test_user").send({
      jobTitle: "Senior Dev",
      company: "School Of Code",
      jobStatus: "Applied",
      minSalary: 23000,
      maxSalary: 38000,
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

describe("GET api/user/:user_id/:job_id - get one job from one user", function () {
  it("GET api/user/:user_id/:job_id - user found - job found", async function () {
    const user = await getUsersByID("auth0_user");
    const jobs = user[0].jobs;
    const job_id = String(jobs[jobs.length - 1]._id);
    const response = await request(app).get(`/api/user/auth0_user/${job_id}`);
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
    expect(Array.isArray(response.body.payload)).toBeTruthy();
    expect(response.body.payload.length).toBe(1);
  });

  it("GET api/user/:user_id/:job_id - user not found", async function () {
    const response = await request(app).get("/api/user/not_a_user/not_a_job");
    expect(response.status).toEqual(404);
    expect(response.body.success).toBeFalsy();
  });
});

describe("PUT api/user/:user_id/:job_id - update one job for one user", function () {
  it("PUT api/user/:user_id/:job_id - update job - good request", async function () {
    const user = await getUsersByID("auth0_user");
    const jobs = user[0].jobs;
    const job_id = String(jobs[jobs.length - 1]._id);
    const response = await request(app)
      .put(`/api/user/auth0_user/${job_id}`)
      .send({
        jobTitle: "Junior Dev",
        company: "Google",
        jobStatus: "Interview",
        minSalary: 22000,
        maxSalary: 30000,
        location: "London",
        notes: "a good job",
      });
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
    expect(typeof response.body.payload).toBe("object");
    expect(response.body.payload._id).toEqual("auth0_user");
  });
  it("PUT api/user/:user_id/:job_id - update job - bad request", async function () {
    const user = await getUsersByID("auth0_user");
    const jobs = user[0].jobs;
    const job_id = String(jobs[jobs.length - 1]._id);
    const response = await request(app)
      .put(`/api/user/auth0_user/${job_id}`)
      .send({
        jobStatus: 123,
        minSalary: "I dont know",
        maxSalary: "I wish it was more",
        location: "London",
        notes: "a good job",
      });
    expect(response.status).toEqual(400);
    expect(response.body.success).toBeFalsy();
  });
});

describe("DELETE api/user/:user_id/:job_id", function () {
  it("DELETE api/user/:user_id/:job_id delete on job for one user", async function () {
    const user = await getUsersByID("test_user");
    const jobs = user[0].jobs;
    const job_id = String(jobs[jobs.length - 1]._id);
    const response = await request(app).delete(`/api/user/test_user/${job_id}`);
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
  });
});

describe("DELETE api/user/:user_id", function () {
  it("DELETE api/user/:user_id delete one user", async function () {
    const response = await request(app).delete(`/api/user/test_user`);
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
  });
});
