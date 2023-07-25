import mongoose, { Schema} from "mongoose";

interface IGrocery {
  name: string;
  user_id: number;
}

const grocerySchema = new Schema<IGrocery>({
  name: {
    type: String,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
});

const GroceryModel = mongoose.model<IGrocery>("grocery", grocerySchema);

export default GroceryModel;
