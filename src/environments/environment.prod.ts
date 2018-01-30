// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  apiUrl: 'https://rima.dev/api',
  initUrl: 'https://rima.dev/',
  localStorageParams: {
    spHostUrl: 'SPHostUrl',
    spLanguage: 'SPLanguage',
    spClientTag: 'SPClientTag',
    spProductNumber: 'SPProductNumber',
    appRedirectUrl: 'AppRedirectUrl',
    spAppToken: 'SPAppToken',
    spCacheKey: 'SPCacheKey',
    selectedCountry: 'selectedCountry',
  },
};
