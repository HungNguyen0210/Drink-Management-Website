import mongoose from "mongoose";
import bcrypt from "bcrypt";

const accountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Đảm bảo không trùng username
    },
    password: {
      type: String,
      required: true,
    },
    numbers: {
      type: String,
      required: true,
    },
    gmail: {
      type: String,
      required: true,
    },
    isActive: { type: Number, default: 1 },
    role: {
      type: [String],
      enum: ["admin", "staff", "customer"], // Liệt kê các giá trị có thể
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

accountSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

accountSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Account = mongoose.model("Account", accountSchema);

export default Account;
