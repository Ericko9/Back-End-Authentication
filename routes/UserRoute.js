import ekspress from "express";
import {
  getUsers,
  getUserById,
  creatUser,
  deleteUser,
} from "../controllers/Users";

const router = express.Router();

router.get("/user", getUsers);
router.get("/user", getUsers);
router.get("/user", getUsers);
router.get("/user", getUsers);

export default router;
