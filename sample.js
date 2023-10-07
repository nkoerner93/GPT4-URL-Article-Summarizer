const YourModel = require("./models/yourModel"); // Replace with the correct path to your model file

// Assuming you want to check if an entry with a specific field value exists
const fieldValueToCheck = "someValue"; // Replace with the value you want to check

// Define the query
const query = { yourField: fieldValueToCheck }; // Replace 'yourField' with the actual field name

// Use the findOne method to check if the entry exists
YourModel.findOne(query, (error, result) => {
  if (error) {
    console.error(error);
    return;
  }

  if (result) {
    console.log("Entry exists:", result);
  } else {
    console.log("Entry does not exist");
  }
});
