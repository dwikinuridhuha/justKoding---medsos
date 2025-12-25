export const register = (req, res) => {
  const { email, password, fullName, username } = req.body;

  return res.status(200).send({
    data: {
      email,
      password,
      fullName,
      username,
    },
    message: "successfully",
  });
};

export const login = (req, res) => {
  res.send("Hello World! - login");
};
