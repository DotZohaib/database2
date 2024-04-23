use("CrudDB")

// Creating a collection named "lectures"
db.createCollection("lectures")

// Inserting a document into the "lectures" collection
db.lectures.insertOne({
  name: "Zohaib is a Web developer and app developer",
  price: 576565,
  city: "larkana" // Corrected the key from 'City' to 'city'
})

// Updating the document with correct syntax
db.lectures.updateOne(
  { price: 576565, city: "larkana" }, // Using correct field values and quoting the string
  { $set: { price: 0, city: "karachi" } } // Corrected syntax with $set and added colon (:)
)



db.lectures.deleteMany({price: 0})