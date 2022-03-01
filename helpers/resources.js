import Resource from "../models/resources.js";

export async function getAllResources() {
  return await Resource.find();
}

export async function createResource(resource) {
  const doc = new Resource(resource);
  return await doc.save();
}
