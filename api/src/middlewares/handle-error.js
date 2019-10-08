import logger from '../lib/logger';

// eslint-disable-next-line no-unused-vars
const handleError = (err, req, res, next) => {
  logger.error(err);

  res.statusCode = err.statusCode || err.status || 500;
  res.send(err.message);
};

export default handleError;
