import Resource from "../models/resources.js";

export async function getAllResources() {
  return await Resource.find();
}

export async function createResource(req) {
  const resource = new Resource({
    link: req.body.link,
    category: req.body.category,
  });

  return await resource.save();
}

export async function updateResource(updates, resource) {
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
