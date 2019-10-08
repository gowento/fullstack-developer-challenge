import logger from '../lib/logger';

const logQuery = (req, res, next) => {
  logger.info(
    `${req.method} ${req.path} query=%o body=%o`,
    req.query,
    req.body
  );
  next();
};

export default logQuery;
