import { StatusCodes } from "../config/constants.js"
import { AppError } from "../controllers/errorController.js";

function registerRequest(req, res, next) {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username) throw new AppError('Nombre de usuario obligatorio', StatusCodes.BAD_REQUEST, 'ValidationError');
    if (!email) throw new AppError('Email obligatorio', StatusCodes.BAD_REQUEST, 'ValidationError');
    if (!password) throw new AppError('Contraseña obligatoria', StatusCodes.BAD_REQUEST, 'ValidationError');
    if (!confirmPassword) throw new AppError('Confirmación de contraseña obligatoria', StatusCodes.BAD_REQUEST, 'ValidationError');
    if (password !== confirmPassword) throw new AppError('Las contraseñas no coinciden', StatusCodes.BAD_REQUEST, 'ValidationError');

    return next();
  } catch (error) {
    return next(error);
  }
}

export default registerRequest;
