import app from "../app";
import request from "supertest";

import { getUsersByID } from "../helpers/users";

import { jest } from "@jest/globals";

jest.mock("../helpers/users");

describe("GET api/user/:id - get one user", function () {
  it("GET api/user/:id - user found", async function () {
    jest.spyOn(mockUserHelpers, "getUsersByID")
        .mockImplementationOnce(() => Promise.resolve({}))

    const response = await request(app).get("/api/user/auth0_user");
    expect(response.status).toEqual(200);
    expect(response.body.success).toBeTruthy();
    expect(Array.isArray(response.body.payload)).toBeTruthy();
    expect(response.body.payload.length).toBe(1);
  });
});
