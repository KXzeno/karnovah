import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/kaeon");

const schema = new mongoose.Schema({
  name: String,
  num: Number,
});

const Entity = mongoose.model("Entity", schema);

const entity = new Entity({
  name: "Kaeon",
  num: 7
});

entity.save();
