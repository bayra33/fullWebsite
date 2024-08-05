const { Router } = require("express");
const {
  getAllAccounts,
  createAccount,
  deleteAccount // Make sure this is imported
} = require("../controllers/account.controller");

const accountRouter = Router();

accountRouter.get("/", getAllAccounts)
  .post("/", createAccount)
  .delete("/:id", deleteAccount); // Add this line for handling DELETE requests

module.exports = { accountRouter };
