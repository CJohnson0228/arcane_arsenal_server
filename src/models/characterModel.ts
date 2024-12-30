import mongoose from 'mongoose'

const Schema = mongoose.Schema

const characterSchema = new Schema(
  {
    playerID: { type: String, required: true },
    characterName: { type: String, required: true },
    avatarurl: { type: String, required: false },
    advancementType: { type: String, required: true },
    hitpointAdvance: { type: String, required: true },
    encumbranceRule: { type: String, required: true },
    encumbranceIgnoreCoins: { type: Boolean, required: true },
    abilityScoreDisplay: { type: String, required: true },
    background: { type: String, required: true },
    gender: { type: String, required: false },
    mainClass: { type: String, required: true },
    subClass: { type: String, required: false },
    species: { type: String, required: true },
    subSpecies: { type: String, required: false },
    appearance: { type: String, required: true },
    backstory: { type: String, required: true },
    personality: { type: String, required: true },
    alignment: { type: String, required: true },
    level: { type: Number, required: true },
    experience: { type: Number, required: false },
    armorClass: { type: Number, required: true },
    shield: { type: Boolean, required: true },
    hitpoints: {
      current: { type: Number, required: true },
      temp: { type: Number, required: true },
      max: { type: Number, required: true },
      hitDice: {
        spent: { type: Number, required: true },
        max: { type: Number, required: true },
        sides: { type: Number, required: true },
      },
      deathSaves: {
        successes: { type: Number, required: true },
        failures: { type: Number, required: true },
      },
    },
    languages: [{ type: String, required: false }],
    equipment: [{ type: String, required: true }],
    coin: {
      copper: { type: Number, required: true },
      silver: { type: Number, required: true },
      electrum: { type: Number, required: true },
      gold: { type: Number, required: true },
      platinum: { type: Number, required: true },
    },
    proficiencyBonus: { type: Number, required: true },
    heroicInspiration: { type: Number, required: true },
    initiative: { type: Number, required: true },
    speed: { type: Number, required: true },
    size: { type: String, required: true },
    passivePerception: { type: Number, required: true },
    attributes: {
      strength: {
        modifier: { type: Number, required: true },
        score: { type: Number, required: true },
        savingThrow: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        athletics: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
      },
      dexterity: {
        modifier: { type: Number, required: true },
        score: { type: Number, required: true },
        savingThrow: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        acrobatics: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        sleightOfHand: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        stealth: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
      },
      constitution: {
        modifier: { type: Number, required: true },
        score: { type: Number, required: true },
        savingThrow: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
      },
      intelligence: {
        modifier: { type: Number, required: true },
        score: { type: Number, required: true },
        savingThrow: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        arcane: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        history: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        investigation: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        nature: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        religion: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
      },
      wisdom: {
        modifier: { type: Number, required: true },
        score: { type: Number, required: true },
        savingThrow: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        animalHandling: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        insight: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        medicine: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        perception: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        survival: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
      },
      charisma: {
        modifier: { type: Number, required: true },
        score: { type: Number, required: true },
        savingThrow: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        deception: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        intimidation: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        performance: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
        persuasion: {
          proficient: { type: Boolean, required: true },
          value: { type: Number, required: false },
        },
      },
    },
    weaponsAndCantrips: [
      {
        name: { type: String, required: false },
        attackBonus: { type: Number, required: false },
        difficultyClass: { type: Number, required: false },
        damage: {
          diceNumber: { type: Number, required: false },
          diceSides: { type: Number, required: false },
          type: { type: String, required: false },
        },
      },
    ],
    classFeatures: [{ type: String, required: false }],
    specialTraits: [{ type: String, required: false }],
    feats: [{ type: String, required: false }],
    spellcasting: {
      ability: { type: String, required: true },
      modifier: { type: Number, required: true },
      spellsaveDc: { type: Number, required: true },
      attackBonus: { type: Number, required: true },
    },
    spellSlots: {
      levelOne: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelTwo: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelThree: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelFour: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelFive: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelSix: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelSeven: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelEight: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
      levelNine: {
        total: { type: Number, required: true },
        expended: { type: Number, required: true },
      },
    },
    preparedSpells: [
      {
        level: { type: Number, required: false },
        name: { type: String, required: true },
        castingTime: { type: Number, required: false },
        range: { type: Number, required: false },
        concentration: { type: Boolean, required: true },
        ritual: { type: Boolean, required: true },
        requireMaterial: { type: Boolean, required: true },
        notes: [{ type: String, required: false }],
      },
    ],
  },
  { timestamps: true }
)

const Character = mongoose.model('Character', characterSchema)
export default Character
