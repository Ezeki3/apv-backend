const checkAuth = (req, res, next) => {
  console.log('desde middleware');

  next();
};

export default checkAuth;
