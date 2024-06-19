const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({ msg: "ไม่มีหน่้านี้ นะจ๊ะ" });
};

module.exports = notFoundMiddleware;
