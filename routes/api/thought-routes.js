//thoughts
const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  newThought,
  updateThought,
  deleteThought,
  postReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

//  /api/
router.route("/").get(getAllThoughts);

//  /api/comments/pizzaId
router.route("/:userId").post(newThought);

//  /thoughtId
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thoughts reactions
router.route("/:thoughtId/reactions").post(postReaction);

//  /api/thoughtId/ reactions/reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
