const express = require("express");
const router = express.Router();
const GifCtrl = require("./git.controller");
const { auth } = require("../../config/auth");

router.post("/", auth, GifCtrl.PostGif);
router.get("/", auth, GifCtrl.gifFeed);
router.delete("/:id", auth, GifCtrl.deleteGif);
router.get("/:id", auth, GifCtrl.viewGif);
route.post("/comment", auth, GifCtrl.postGifComment);

module.exports = router; 