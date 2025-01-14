import { Document, Schema, model } from 'mongoose';

interface PokeDex extends Document {
  name: string;
  url: string;
}

const PokeDexSchema = new Schema<PokeDex>(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const PokeDexModel = model<PokeDex>('PokeDex', PokeDexSchema);

export default PokeDexModel;