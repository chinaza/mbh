module.exports = {
  ctrlError(message, code = 0) {
    const error = new Error(message);
    error.code = code || 500;
    throw error;
  },

  ctrlErrorResponse(err, res) {
    const { code = 500, message } = err || { message: err };
    console.error(err);
    return res.status(code).send({ message });
  }
};
