import ErrorHandler, { errorMiddleware } from '../error/error.js';
import Reservation from '../models/reservationSchema.js';

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if(!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill all the fields  firstName, lastName, email, phone, date, time", 400));
  }
  try {
    await Reservation.create({
      firstName,lastName,email,phone,date,time
    });
    res.status(201).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationError = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationError.join(","), 400));
  } 
    return next(new ErrorHandler(error.message, 500));
}};