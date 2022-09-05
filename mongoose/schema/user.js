const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    required: true,
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User" /*  refering the collection*/,
  },
});

/* we can add custom methods to our object using the below method */
// userSchema.methods.sayHi = function () {
//   console.log(`Hi, Good morning ${this.name}`);
// };

/* in adding to this we can also use virtual and static methods which works almost same */
/* but virtual is not persisted in database and commonly used for get and set usages */
/* and static is used in places where we want to do static operations */

/* there's also middlewares which are used when want to do operations pre/post it's most common use case is password hasing and saving */

module.exports = mongoose.model("User", userSchema);
