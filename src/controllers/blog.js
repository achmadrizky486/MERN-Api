const { validationResult } = require("express-validator"); //import
const path = require("path");
const fs = require("fs"); //file system
const BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const errors = validationResult(req); // buat variabel errors
  if (!errors.isEmpty()) {
    const err = new Error("Input Value Tidak Sesuai");
    errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  if (!req.file) {
    const err = new Error("Dimana images nyaaaaaa????? <Yusuf Mansur vibe>");
    errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: {
      uid: 1,
      name: "Achmad",
    },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create Blog Success",
        data: result,
      });
    })
    .catch((err) => {
      console.log("err : ", err);
    });
};

exports.getAllBlogPost = (req, res, next) => {
  BlogPost.find()
    .then((result) => {
      res.status(200).json({
        message: "Semua Data Berhasil Dipanggil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getBlogPostById = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then((result) => {
      if (!result) {
        const error = new Error("Data Tidak Ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      res.status(200).json({
        message: "Data Blog Post Berhasil Dipanggil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateBlogPost = (req, res, next) => {
  const errors = validationResult(req); // buat variabel errors
  if (!errors.isEmpty()) {
    const err = new Error("Input Value Tidak Sesuai");
    errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  if (!req.file) {
    const err = new Error("Dimana images nyaaaaaa????? <Yusuf Mansur vibe>");
    errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Data Tidak Ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      post.title = title;
      post.body = body;
      post.image = image;
      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Data Berhasil Diupdate",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteBlogPost = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error("Data Tidak Ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      removeImage(post.image);
      return BlogPost.findByIdAndRemove(postId);
    })
    .then((result) => {
      res.status(200).json({
        message: "Data Blog Post Berhasil Dihapus",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const removeImage = (filePath) => {
  filePath = path.join(__dirname, "../..", filePath);
  console.log("filePath = ", filePath);
  console.log("dir name = ", __dirname);
  fs.unlink(filePath, (err) => console.log(err)); //remove
};
