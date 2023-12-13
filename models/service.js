import { Schema, model, models } from "mongoose";

// Defining the Service schema
const ServiceSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
    },
    duration: { 
        type: Number, 
    }, // Duration in minutes
    price: { 
        type: Number, 
        required: true 
    }
});

const Service = models.Service || model('Service', ServiceSchema);

export default Service;

  // Price in the salon's currency
//   category: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceCategory', required: true },