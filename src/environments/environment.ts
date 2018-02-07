// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  
  userPoolId: 'us-west-2_MQvfPxcbI',
  clientId: '5ph489577cp4bntqns5lahghp5',

  cognito_idp_endpoint: '',
  cognito_identity_endpoint: '',
  sts_endpoint: '',
  dynamodb_endpoint: '',
  s3_endpoint: ''
};
