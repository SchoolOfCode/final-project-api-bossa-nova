import User from "../models/users.js";

export async function getAllUsers() {
  return await User.find();
}

export async function getUsersByID(id) {
  return await User.find({ _id: id });
}

export async function createUser(user) {
  const newUser = await new User(user);
  const doc = await newUser.save();
  return doc;
}

export async function deleteUser(id) {
  return await User.deleteOne({ _id: id });
}
