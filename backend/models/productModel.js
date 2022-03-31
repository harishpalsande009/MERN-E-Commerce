const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, " Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "Please Enter Product Discription"],
  },
  price: {
    type: String,
    require: [true, " Please Enter Product Price"],
    maxLenght: [8, [" Price can not exceed 8 character"]],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, " Please Enter Product Category"],
  },
  Stock: {
    type: Number,
    require: [true, "Please Enter Product Stock"],
    maxLenght: [5, "Stock cabnot excced 5 Character"],
    default: 1,
  },
  numberOfReview: {
    type: Number,
    default: 0,
  },
  rewiews: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.Now,
  },
});

module.exports = mongoose.model("Product", productSchema);
