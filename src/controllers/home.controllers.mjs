export const getHomePage = (_req, res) => {
  res.sendFile(__dirname + '/views');
};