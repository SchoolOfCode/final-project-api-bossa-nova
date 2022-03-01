import Resource from "../models/resources.js";

export async function getAllResources() {
  return await Resource.find();
}

export async function createResource(resource) {
  const doc = new Resource(resource);
  return await doc.save();
}

export async function getResourcesByID(id) {
  return await Resource.find({ _id: id });
}

//A.findOneAndUpdate(conditions, update)
export async function updateResource(id, updatedResource) {
  return await Resource.findOneAndUpdate({ _id: id }, updatedResource);
}
