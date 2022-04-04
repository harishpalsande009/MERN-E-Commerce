const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },

  discription: {
    type: String,
    required: [true, "Please Enter Product Discription"],
  },

  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxLength: [8, "Price Cannot Exceed 8 Characters"],
  },

  rating: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },

  stock: {
    type: String,
    required: [true, "Please Enter Product Stock "],
    maxLength: [4, "Stock Cannot Exceed 4 Charactoers"],
    default: 1,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  // user: {
  //   type: mongoose.Schema.ObjectID,
  //   ref: "User",
  //   required: true,
  // },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
