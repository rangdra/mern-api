const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");
//[POST] : /v1/blog/post
// Membuat Post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai"),
  ],
  blogController.createBlogPost
);
// Mengambil semua data post
router.get("/posts", blogController.getAllBlogPost);
// mengambil satu data post
router.get("/post/:postId", blogController.getBlogPostById);
// mengupdate post
router.put(
  "/post/:postId",
  [
    body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai"),
  ],
  blogController.updateBlogPost
);

router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
