import cors from "cors";
import express from "express";
import logger from "./utils/logger";
import dotenv from "dotenv";
import authRouter from "./modules/auth/auth.route";
import { notFoundMiddleware } from "./middleware/not-found";
import { errorHandlerMiddelware } from "./middleware/error-handler";
import customersRouter from "./modules/customers/customers.route";
import { authenticationMiddleware } from "./middleware/authentication";
import productRouter from "./modules/products/products.route";
import categoryRouter from "./modules/categories/categories.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use(authenticationMiddleware);
app.use("/api/customers", customersRouter);

app.use(errorHandlerMiddelware);
app.use(notFoundMiddleware);

const server = app.listen(4000, async () => {
  logger.info("server running on port 4000");
});

const signals = ["SIGTERM", "SIGINT"];

function gracefulShutDown(signal: string) {
  process.on(signal, async () => {
    server.close();
    logger.info("my work here is done");
    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutDown(signals[i]);
}
