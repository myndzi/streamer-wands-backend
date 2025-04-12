import { ErrorRequestHandler, RequestHandler } from 'express';

export const notFound: RequestHandler = (req, res) => {
  res.status(404).send('Not found ' + req.path);
};

export const stackTraceErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err,
    status: 500,
  });
};

export const productionErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).send('Error');
};
