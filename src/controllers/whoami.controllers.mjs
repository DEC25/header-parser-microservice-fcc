export const getRequestData = (req, res) => {
  let { ip } = req;
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  // ip = ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) ?? ip;
  res.json({ ip, language, software });
};