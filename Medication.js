const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    dosage: String,
    time: String
});

module.exports = mongoose.model("Medication", MedicationSchema);

