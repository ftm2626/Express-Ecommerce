import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorized: true,
    },
  },
});

export default logger;
