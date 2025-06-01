import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this post.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide the content for this post.'],
  },
  excerpt: {
    type: String,
    required: [true, 'Please provide an excerpt for this post.'],
    maxlength: [200, 'Excerpt cannot be more than 200 characters'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug for this post.'],
    unique: true,
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;