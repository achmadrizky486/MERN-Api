exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  //   const image = req.body.image;
  const body = req.body.body;
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
