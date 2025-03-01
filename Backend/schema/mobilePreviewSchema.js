const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  pic: { 
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  }
});

const buttonsSchema = new Schema({
  option: {
    type: String,
    enum: ['Fill', 'Outline'],
    default: 'Fill'
  },
  color: {
    type: String,
    default: '#888888'
  },
  fontColor: {
    type: String,
    default: '#888888'
  },
  index: {
    type: Number,
    default: 2
  },
  type: {
    type: String,
    default: 'Teritary'
  }
});

const fontsSchema = new Schema({
  fontType: {
    type: String,
    enum: ['Sans-serif', 'Serif', 'Monospace'],
    default: 'Sans-serif'
  },
  color: {
    type: String,
    default: '#FFFFFF'
  }
});

const themeSchema = new Schema({
  name: {
    type: String,
    default: 'Air_Snow'
  },
  background: {
    type: String,
    default: 'white'
  }
});

const MobilePreview = new Schema({
  profile: profileSchema,
  links: [Schema.Types.Mixed],
  shops: [Schema.Types.Mixed],
  bannerBgClr: {
    type: String,
    default: '#342b26'
  },
  layout: {
    type: String,
    enum: ['Stack', 'Grid', 'Carousel'],
    default: 'Stack'
  },
  buttons: buttonsSchema,
  fonts: fontsSchema,
  theme: themeSchema
}, {
  timestamps: true
});

module.exports = mongoose.model('MobilePreview', userDataSchema);