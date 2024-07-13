const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connect DB
mongoose.connect("mongodb://localhost/pcat-test-db");

// Create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

// Create a photo
Photo.create({
  title: "Photo Title 1",
  description: "Photo description 1 lorem ipsum",
});

// Read a photo
Photo.find().then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });

// Update photo
Photo.findByIdAndUpdate("668ee5d827d9adcc345adc45", {
  title: "Photo Title 4",
  description: "Photo description 4 lorem ipsum",
}, {new: true})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Delete a photo
Photo.findByIdAndDelete("668eeafc33bc8a3fe164015a")
  .then((data) => {
    console.log("Fotoğraf silindi");
  })
  .catch((err) => {
    console.log(err);
  });