const timestamps = schema => {
  schema.add({
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date
  });

  schema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
  });
};

module.exports = timestamps;
