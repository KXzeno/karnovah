import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/kaeon");

const insertDocuments = function(db, callback) {
  const collection = db.collection('one');
  collection.insertMany([
    {
      name: "Kx",
      num: 7
    },
    {
      name: "Kaeon",
      num: 3
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

const findDocuments = function(db, callback) {
}
