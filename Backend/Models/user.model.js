const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      require: true,
      minLength: [3, "Atleast 3 character long"],
    },
    LastName: {
      type: String,
      minLength: [3, "Atleast 3 character long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email must be 5 character long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },

  //for live tracking
  socketID: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  return (token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET));
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
