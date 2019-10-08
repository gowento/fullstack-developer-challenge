import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
