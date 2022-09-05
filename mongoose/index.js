const mongoose = require("mongoose");
const User = require("./schema/user");

mongoose.connect(
  "mongodb+srv://pavithran:pavithran123@chatapp.hvppe.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Mongoose is connected");
  },
  (error) => {
    console.log(error.message);
  }
);

async function newUser() {
  try {
    const user = await User.create({
      name: "mukesh",
      age: 25,
    });

    console.log(user, "created user");
  } catch (error) {
    console.log(error.message);
  }
}

newUser();
