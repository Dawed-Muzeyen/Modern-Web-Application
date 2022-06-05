const mongoose = require('mongoose');

const moveSchema = mongoose.Schema({
  name: String,
  keys: String,
});

const characterSchema = mongoose.Schema({
  name: { type: String, unique: true },
  // Array of subdocuments
  specials: [moveSchema],
  // Single subdocument
  ultimate: moveSchema,
});

const ryu = {
  name: 'Ryu',
  specials: [
    {
      name: 'Hadoken',
      keys: '↓ ↘ → P',
    },
    {
      name: 'Shoryuken',
      keys: '→ ↓ ↘ → P',
    },
    {
      name: 'Tatsumaki Senpukyaku',
      keys: '↓ ↙ ← K',
    },
  ],
  ultimate: {
    name: 'Shinku Hadoken',
    keys: '↓ ↘ → ↓ ↘ → P',
  },
};
const Character = mongoose.model('Character', characterSchema, 'characters');
createListing(ryu);

async function createListing(ryu1) {
  const char = new Character(ryu1);
  const doc = await char.save();
  console.log(doc);
}
