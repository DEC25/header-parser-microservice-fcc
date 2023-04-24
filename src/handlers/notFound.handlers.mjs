export const notFoundHandler = (_req, res) => {
  res.json({ errorCode: 404, error: 'Page not found' });
}