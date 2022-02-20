import Resource from "../models/resources.js";

export async function getAllResources() {
  return await Resource.find();
}

export async function createResource(req) {
  const resource = new Resource({
    name: req.body.name,
    link: req.body.link,
  });

  return await resource.save();
}
