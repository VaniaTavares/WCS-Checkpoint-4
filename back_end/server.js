const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const apiRouter = require("./routes");
const authRouter = require("./routes/authRoutes");

const { handleError } = require("./middleware/errorHandling");
const PORT = process.env.SERVER_PORT || 4001;

app.use(express.json());

app.use(
  cors({
    origin: process.env.ORIGINS.split(","),
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

// app.use(session(sessionSettings));
app.use("/auth", authRouter);
app.use("/api", apiRouter);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server listening to port: http://localhost:${PORT}`);
});
