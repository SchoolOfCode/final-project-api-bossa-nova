import express from "express";
import {
  getAllUsers,
  getUsersByID,
  createUser,
  deleteUser,
} from "../helpers/users.js";
import {
  createJob,
  getJobByID,
  updateJob,
  deleteJob,
} from "../helpers/jobs.js";
const router = express.Router();

//get all users
router.get("/", async (req, res) => {
  const payload = await getAllUsers();
  res.status(200).json({ success: true, payload: payload });
});

// get one user (id and array with all jobs)
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = await getUsersByID(id);
  if (payload.length > 0) {
    res.status(200).json({ success: true, payload: payload });
  } else {
    res
      .status(404)
      .json({ success: false, message: `No user found with id ${id}` });
  }
});

//get one job for one user
router.get("/:user_id/:job_id", async (req, res) => {
  const userID = req.params.user_id;
  const jobID = req.params.job_id;
  const [user] = await getUsersByID(userID);
  if (user) {
    const payload = await getJobByID(user, jobID);
    if (payload.length > 0) {
      res.status(200).json({ success: true, payload: payload });
    } else {
      res
        .status(404)
        .json({ success: false, message: `No job found with id ${jobID}` });
    }
  } else {
    res
      .status(404)
      .json({ success: false, message: `No user found with id ${userID}` });
  }
});

//create new user with job if user doesn't exist, if user exists create a new job for that user
router.post("/:id", async (req, res) => {
  const id = req.params.id;
  const [user] = await getUsersByID(id);
  if (user) {
    try {
      const payload = await createJob(id, req.body);
      res.status(201).json({ success: true, payload: payload });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  } else {
    try {
      const payload = await createUser({ _id: id, jobs: [req.body] });
      res.status(201).json({ success: true, payload: payload });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
});

// update a job for one user
router.put("/:user_id/:job_id", async (req, res) => {
  const userID = req.params.user_id;
  const jobID = req.params.job_id;
  const updates = req.body;
  const [user] = await getUsersByID(userID);
  if (user) {
    const [job] = await getJobByID(user, jobID);
    if (job) {
      try {
        const payload = await updateJob(updates, userID, jobID);
        res.status(200).json({ success: true, payload: payload });
      } catch (err) {
        res.status(400).json({ success: false, message: err.message });
      }
    } else {
      res
        .status(404)
        .json({ success: false, message: `No job found with id ${jobID}` });
    }
  } else {
    res
      .status(404)
      .json({ success: false, message: `No user found with id ${userID}` });
  }
});

//delete one user

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const [user] = await getUsersByID(id);
  if (user) {
    const payload = await deleteUser(id);
    res.status(200).json({ success: true, payload: payload });
  } else {
    res
      .status(404)
      .json({ success: false, message: `No user found with id ${id}` });
  }
});

//delete a job for one user
router.delete("/:user_id/:job_id", async (req, res) => {
  const userID = req.params.user_id;
  const jobID = req.params.job_id;
  const [user] = await getUsersByID(userID);
  if (user) {
    const [job] = await getJobByID(user, jobID);
    if (job) {
      const payload = await deleteJob(userID, jobID);
      res.status(200).json({ success: true, payload: payload });
    } else {
      res
        .status(404)
        .json({ success: false, message: `No job found with id ${jobID}` });
    }
  } else {
    res
      .status(404)
      .json({ success: false, message: `No user found with id ${userID}` });
  }
});

export default router;
