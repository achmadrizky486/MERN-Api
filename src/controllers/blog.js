const { validationResult } = require("express-validator"); //import
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
