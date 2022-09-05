const mongoose = require("mongoose");
const user = require("./schema/user");
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
    /* new user creation */
    const user = await User.create({
      name: "visva",
      age: 23,
    });

    console.log(user, "created user");
  } catch (error) {
    console.log(error.message);
  }
}

// newUser();

/* finding users and making some advanced stuffs */

async function findUser() {
  try {
    const user =
      // await User.find(); /* used to find all the users in dp with that model */
      // await User.findById("63158e7e3b06344b8e306091"); /* used to find user with id */
      await User.find({
        name: "visva",
      }); /* find user with their keys and values */
    //   await User.find({ name: "siva" }).populate(
    //     "bestFriend"
    //   ); /* populate used to show the complete details of data with objectid also it should be mentioned inside the populate method as argument */

    // console.log(user);
    // user[0].sayHi();
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

// findUser();
