import mongoose from 'mongoose';

async function main() {
  await mongoose.connect("mongodb://localhost:27017/kaeon");

  const schema = new mongoose.Schema({
    name: String,
    num: Number,
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
  });

  const Entity = mongoose.model("Entity", schema);

  const entity = new Entity({
    name: "Kaeon",
    num: 7,
  });

  await entity.save();

  const anotherSchema = new mongoose.Schema({
    occupation: String,
    age: Number,
  })

  const Person = mongoose.model("Person", anotherSchema);

  const person = new Person({
    occupation: "Developer",
    age: 7,
  })

  await person.save();

  const cogdiss = new Entity({
    name: "Cognitive Dissonance",
    num: 14,
  });

  const fortress = new Entity({
    name: "vertical",
    num: 25,
  });

  Entity.insertMany([cogdiss, fortress]);

  /* find() no longer accepts callback
Entity.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    entities.forEach(function(entity){ 
      console.log(entity.name);
    });
  }
});
*/

  async function findEntities() {
    try {
      const entities = await Entity.find();
      entities.forEach(function(entity) {
        console.log(entity.name);
      });
    } catch (err) {
      console.log(err);
    } finally {
      mongoose.connection.close();
    }
  }

  await findEntities();
}

await main();
