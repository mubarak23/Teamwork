const env = process.env.NODE_ENV || 'development';

const baseConfig = {
    env,
    isDev : env === 'development',
    isTest: env === 'testing',

}