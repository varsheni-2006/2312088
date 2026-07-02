const express=require("express");

const router=express.Router();

const controller=require("../controllers/notificationController");

router.get("/notifications",controller.getNotifications);

module.exports=router;