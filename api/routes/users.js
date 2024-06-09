import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hey, you are logged in to the system!")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hiiiiiii you are locked in to the system! and you can delete your account now!")
// })

// router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hiiiiiii Admin bosaa you are locked in to the system! and you can delete ALL accounts now! yaaaaaaaaaaaaaa(:")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;