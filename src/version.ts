// Injected at build time by tsup from package.json
declare const process: {
  env: {
    PACKAGE_VERSION?: string;
  };
};

export const APPLICATION_VERSION = process.env.PACKAGE_VERSION || '1.0.6';
