exports.post = (req, res) => {
  if (req.user) {
    const token = req.user.auth();
    let admin = false;
    if (req.user.admin) {
      admin = true;
    }
    const user = {
      username: req.user.username,
      token,
      admin,
    };
    return res.json(user);
  }
  return res.send(400);
};

exports.checkAuth = (req, res) => {
  if (req.user) {
    const user = {
      username: req.user.username,
    };
    return res.json(user);
  }
  return res.json({ error: 'Not able to find the user' });
};
