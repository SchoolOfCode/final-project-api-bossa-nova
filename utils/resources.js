import Resource from "../models/resources.js";

export async function getAllResources() {
  return await Resource.find();
}

export async function createResource(req) {
  const resource = new Resource({
    name: req.body.name,
    link: req.body.link,
    category: req.body.category,
  });

  return await resource.save();
}

export async function updateResource(updates, resource) {
  if (updates.name) {
    resource.name = updates.name;
  }
  if (updates.link) {
    resource.link = updates.link;
  }
  if (updates.category) {
    resource.category = updates.category;
  }

  return await resource.save();
}

export async function deleteResource(resource) {
  return await resource.remove();
}
