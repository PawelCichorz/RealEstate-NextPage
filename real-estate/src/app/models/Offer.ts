import mongoose, { Document, Schema } from 'mongoose';

interface IOffer extends Document {
  rodzaj: 'sprzedaż' | 'wynajem';
  kategoria: 'dom' | 'działka' | 'mieszkanie';
  gmina: 'Skawina' | 'Brzeźnica' | 'Kraków';
  miejscowość:
    | 'Skawina'
    | 'Radziszów'
    | 'Borek Szlachecki'
    | 'Brzeźnica'
    | 'Sosnowice'
    | 'Kraków'
    | 'Rzozów'
    | 'Borek Szlachecki'
    | 'Radziszów';
  powierzchnia: number;
  cena: number;
  woda: 'tak' | 'nie';
  gaz: 'tak' | 'nie';
  prąd: 'tak' | 'nie';
  opis: string;
  promote: boolean;
  date: Date;
  imageUrls: string[]; // Zmieniono na tablicę stringów
}

const offerSchema: Schema = new Schema({
  rodzaj: { type: String, enum: ['sprzedaż', 'wynajem'], required: true },
  kategoria: {
    type: String,
    enum: ['dom', 'działka', 'mieszkanie'],
    required: true,
  },
  gmina: {
    type: String,
    enum: ['Skawina', 'Brzeźnica', 'Kraków'],
    required: true,
  },
  miejscowość: {
    type: String,
    enum: [
      'Skawina',
      'Radziszów',
      'Borek Szlachecki',
      'Brzeźnica',
      'Sosnowice',
      'Kraków',
      'Rzozów',
      'Borek Szlachecki',
      'Radziszów',
    ],
    required: true,
  },
  powierzchnia: { type: Number, required: true },
  cena: { type: Number, required: true },
  woda: { type: String, enum: ['tak', 'nie'], required: true },
  gaz: { type: String, enum: ['tak', 'nie'], required: true },
  prąd: { type: String, enum: ['tak', 'nie'], required: true },
  opis: { type: String, required: true },
  promote: { type: Boolean, default: false }, // Nie jest wymagane
  date: { type: Date, default: Date.now }, // Nie jest wymagane
  imageUrls: { type: [String], default: [] }, // Zmieniono na tablicę stringów
});

const Offer =
  mongoose.models.Offer || mongoose.model<IOffer>('Offer', offerSchema);

export default Offer;
