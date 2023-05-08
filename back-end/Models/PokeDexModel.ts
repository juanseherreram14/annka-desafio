import { Document, Schema, model } from 'mongoose';

interface PokeDex extends Document {
  name: string;
  url: string;
  valor: number;
  fechaInventario: Date;
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
    valor: {
      type: Number,
      required: true,
    },
    fechaInventario: {
      type: Date,
      required: true,
      default: Date.now,
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