import ApiError from "../utils/errorHandler.js";
import {logger} from "../utils/logger.js";

const authenticateRequest = (req, res, next) => {
  const userId = req.headers["x-user-id"];

  if (!userId) {
    logger.warn(`Access attempted without user ID`);
    return res.status(401).json(
      new ApiError(
        400,
        {
      "success" : false,
        },
      "Authencation required! Please login to continue",
      ));
  }

  req.user = { userId };
  next();
};

export { authenticateRequest };