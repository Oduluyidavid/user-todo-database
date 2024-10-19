import User from "../models/user.model.js";

export const register = async (req, res) => {
  const data = req.body;
  // User: validation

  // save to mongoDB

  const user = new User(data);
  user.save();
  res.json(user);
};

export const login = async (req, res) => {
  try {
    res.json({
      message: "login Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.json({
      message: "logout Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getUsers = async (req, res) => {
// try {
// const users = await User.find();
// res.json(users);
// } catch (error) {
// console.log(error);
// }
// };

export const getUser = async (req, res) => {
  try {
    const { id } = req.parasms;
    const user = await User.findById(id);
    if (!user) {
      res.json({
        message: "user not found",
      });
      return;
    }
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.parasms;
    //   User: validation
    const updateUser = await User.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.json(updateUser);
  } catch (error) {}
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({
      message: `User with ${id} is deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
