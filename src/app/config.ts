function getEnvConfigOrThrow(
  variable: string | undefined,
  name: string
): string {
  if (!variable) {
    throw new Error(`Brak wymaganej zmiennej środowiskowej: ${name}`);
  }
  return variable;
}

type Env = 'development' | 'production';

interface Config {
  emailUser: string;
  emailPass: string;
  jwtSecret: string;
  refreshSecret: string;
  dataBase: string;
}

const getConfig: Record<Env, Config> = {
  development: {
    dataBase: getEnvConfigOrThrow(process.env.DATABASE_URL, 'DATABASE_URL'),
    emailUser: getEnvConfigOrThrow(process.env.EMAIL_USER, 'EMAIL_USER'),
    emailPass: getEnvConfigOrThrow(process.env.EMAIL_PASS, 'EMAIL_PASS'),
    jwtSecret: getEnvConfigOrThrow(process.env.JWT_SECRET, 'JWT_SECRET'),
    refreshSecret: getEnvConfigOrThrow(
      process.env.REFRESH_SECRET,
      'REFRESH_SECRET'
    ),
  },
  production: {
    dataBase: getEnvConfigOrThrow(process.env.DATABASE_URL, 'DATABASE_URL'),
    emailUser: getEnvConfigOrThrow(process.env.EMAIL_USER, 'EMAIL_USER'),
    emailPass: getEnvConfigOrThrow(process.env.EMAIL_PASS, 'EMAIL_PASS'),
    jwtSecret: getEnvConfigOrThrow(process.env.JWT_SECRET, 'JWT_SECRET'),
    refreshSecret: getEnvConfigOrThrow(
      process.env.REFRESH_SECRET,
      'REFRESH_SECRET'
    ),
  },
};

const env: Env = (process.env.NODE_ENV as Env) || 'development';

const config: Config = getConfig[env];

export { config };
