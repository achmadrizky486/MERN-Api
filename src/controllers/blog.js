const { validationResult } = require("express-validator"); //import

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

  res.json({
    message: "Create Blog Success",
    data: {
      post_id: 1,
      title: "Title Blog",
      image: "image.jpg",
      body: "Lorem ipsum dolor si jamet",
      created_at: "01/01/2022",
      author: {
        uid: 1,
        name: "Apem",
      },
    },
  });
  res.status(201).json({ result });
};
