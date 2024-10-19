import Todo from "../models/todo.model.js";

export const createTodo = async (req, res) => {
  const data = req.body;
  // Todo: validation

  // Save data to mongoDB
  const todo = new Todo(data);
  todo.save();

  res.json(todo);
};
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.json({
        message: "Todo not found",
      });
      return;
    }
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    //  Todo: validation
    const updateTodo = await Todo.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.json(updateTodo);
  } catch (error) {}
};

export const deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({
      message: `Todo with ${id} is deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
