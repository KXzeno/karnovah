import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/kaeon");

const schema = new mongoose.Schema({
  name: String,
  num: Number,
});

const Entity = mongoose.model("Entity", schema);

const entity = new Entity({
  name: "Kaeon",
  num: 7,
});

entity.save();

const anotherSchema = new mongoose.Schema({
  occupation: String,
  age: Number,
})

const Person = mongoose.model("Person", anotherSchema);

const person = new Person({
  occupation: "Developer",
  age: 7,
})

person.save();

const cogdiss = new Entity({
  name: "Cognitive Dissonance",
  num: 14,
});

const fortress = new Entity({
  name: "vertical",
  num: 25,
});

Entity.insertMany([cogdiss, fortress]);


