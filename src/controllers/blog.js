const { validationResult } = require("express-validator"); //import
const BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  //   const image = req.body.image;
  const body = req.body.body;
  const errors = validationResult(req); // buat variabel errors

  if (!errors.isEmpty()) {
    const err = new Error("Input Value Tidak Sesuai");
    errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const Posting = new BlogPost({
    title: title,
    body: body,
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
