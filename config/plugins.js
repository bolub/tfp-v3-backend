module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    },
    actionOptions: {
      upload: {
        folder: "TFP",
      },
      delete: {},
    },
  },
  // ...
});

module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: process.env.SENDGRID_API_KEY,
    },
    settings: {
      defaultFrom: "Tolumitfpuk@gmail.com",
      defaultReplyTo: "Tolumitfpuk@gmail.com",
    },
  },
  // ...
});
