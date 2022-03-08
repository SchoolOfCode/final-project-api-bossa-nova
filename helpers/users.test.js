import { getUsersByID, createUser, deleteUser } from "./users";
import User from "../models/users.js";
import { jest } from "@jest/globals";

const testId = "arthurbendy@gmail.com";
const testUser = {
  _id: testId,
  jobs: [
    {
      jobTitle: "Developer",
      company: "Microsoft",
      jobStatus: "Interviews",
      minSalary: 10000,
      maxSalary: 90000
    }
  ]
};
const testFind = {
  _id: testId
}

describe("Users model", function () {
  beforeAll(() => {
    jest.resetAllMocks()
  });

  it("can return a user with passed id", async function () {
    const mockFind = jest.spyOn(User, 'find')
                     .mockImplementationOnce(() => Promise.resolve(testUser))
    
    const user = await getUsersByID(testId);
    expect(user).toBeDefined();
    expect(user._id).toEqual(testId);
    expect(user).toEqual(testUser);

    expect(mockFind).toHaveBeenCalledTimes(1);
    expect(mockFind).toHaveBeenCalledWith(testFind);
  });

  it("can create a user", async function () {
    const mockSave = jest.spyOn(User.prototype, 'save')
                     .mockImplementationOnce(() => Promise.resolve(testUser))

    const user = await createUser(testUser);
    expect(user).toBeDefined();
    expect(user._id).toEqual(testId);
    expect(user).toEqual(testUser);

    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledWith();
  });

  it("can delete a user", async function () {
    const mockDeleteOne = jest.spyOn(User, 'deleteOne')
                          .mockImplementationOnce(() => Promise.resolve())

    await deleteUser(testId);

    expect(mockDeleteOne).toHaveBeenCalledTimes(1);
    expect(mockDeleteOne).toHaveBeenCalledWith(testFind);
  });
});
