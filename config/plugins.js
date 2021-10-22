module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: "bolub",
      api_key: "577668341148255",
      api_secret: "k_9-jrfO0JiM4pdwc-FBdcI74nw",
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
      defaultFrom: "courses@tolumitfp.fashion",
      defaultReplyTo: "courses@tolumitfp.fashion",
    },
  },
  // ...
});
