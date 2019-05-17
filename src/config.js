const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ycuiefqprxux"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://i7waetocu7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0VSnR2OzS",
    APP_CLIENT_ID: "39kkm2jv275go4jlser4fi7h64",
    IDENTITY_POOL_ID: "us-east-1:bcdc6f26-aa16-4a1c-a620-da447517f165"
  },
  STRIPE_KEY: "pk_test_qiPLxh3iWQuwy8W2xvbclgg000wC02OEhB"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-14trnxbkzfrcc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://s2pyxviud5.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_I68OEfHAq",
    APP_CLIENT_ID: "1tka2e503cvvg6jmifc8n0nmli",
    IDENTITY_POOL_ID: "us-east-1:cbeef9ef-91bc-4500-aa63-b2db540c7f76"
  },
  STRIPE_KEY: "pk_test_qiPLxh3iWQuwy8W2xvbclgg000wC02OEhB"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
