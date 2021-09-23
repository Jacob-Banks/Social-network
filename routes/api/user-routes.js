const router = require("express").Router();
//user routes
const {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  removeFriend,
  addFriend,
} = require("../../controllers/user-conroller");

// /api/pizzas
router.route("/").get(getAllUsers).post(createUser);

// /api/Users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//api/users/:userId/friends/:friendId

router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);
module.exports = router;
