const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 1,
      maxlength: 150,
    },
    subtitle: {
      type: String,
      minlength: 2,
      maxlength: 100,
    },
    image: {
      type: Buffer,
    },
    topics: [
      {
        type: String,
      },
    ],
    tags: [
      {
        type: String,
      },
    ],

    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    comment: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        replies: [
          {
            user: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
            text: {
              type: String,
            },
            date: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post',PostSchema);
module.exports=Post
