import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: "LOGGER" }),
    timestamp(),
    format.timestamp({
      format: "YY-MM-DD HH:mm:ss",
    }),
    myFormat
  ),

  transports: [
    new transports.File({
      maxsize: 512000,
      maxFiles: 5,
      filename: "error.log",
      level: "error",
      dirname: __dirname + "../../../logs",
    }),
    new transports.File({
      maxsize: 512000,
      maxFiles: 5,
      filename: "combined.log",
      dirname: __dirname + "../../../logs",
    }),
  ],
});

logger.add(new transports.Console({
  format: combine(format.splat()),
}));

export default logger;
