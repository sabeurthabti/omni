const dataStore = [];

export default function storageMiddleware(req, res, next) {
  res.dataStore = dataStore;
  next();
}