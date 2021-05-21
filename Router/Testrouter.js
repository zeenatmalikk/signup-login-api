const express = require("express");

const {
  getalldata,
  getsingledata,
  deletedata,
  updatedata,
  createdata,
} = require("../Controller/Testcontroller");

const router = express.Router();

router.route("/all").get(getalldata);
router.route("/one").get(getsingledata);
router.route("/update").put(updatedata);
router.route("/create").post(createdata);
router.route("/del").delete(deletedata);

module.exports = router;
