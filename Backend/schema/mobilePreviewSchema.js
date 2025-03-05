const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  pic: {
    type: String,
    // required: true
  },
  title: {
    type: String,
    // required: true
  },
  bio: {
    type: String,
    // required: true
  }
});

const buttonsSchema = new Schema({
  option: {
    type: String,
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
    default: 'teritary'
  }
});

const fontsSchema = new Schema({
  fontType: {
    type: String,
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

const mobilePreviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  profile: profileSchema,
  links: [{
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    data: {
      count: {
        type: Number
      },
      icon: {
        type: String
      },
      title: {
        type: String
      },
      type: {
        type: String
      },
      unqId: {
        type: String
      },
      url: {
        type: String
      }
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
  shops: [{
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    data: {
      count: {
        type: Number
      },
      icon: {
        type: String
      },
      title: {
        type: String
      },
      type: {
        type: String
      },
      unqId: {
        type: String
      },
      url: {
        type: String
      }
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
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

module.exports = mongoose.model('MobilePreview', mobilePreviewSchema);