/**
 * @example
 * const config = {
 *     isProd: true
 * }
 */
import { DefinePlugin } from 'webpack'
import { isDev, isDevServer, isProd, mode } from '../utils/env'
require('dotenv').config()

const W_APP = /^(MARKETPLACE_|KOVAN_|RINKEBY_|REACT_)/i

const filteredKeys = Object.keys(process.env)
  .filter(key => W_APP.test(key))
  .reduce(
    (env, key) => {
      env[key] = JSON.stringify(process.env[key])
      return env
    }, {})

const config = {
  'process.env': {
    NODE_ENV: JSON.stringify(mode),
    ...filteredKeys
  },
  IS_PROD: isProd,
  IS_DEV: isDev,
  IS_DEV_SERVER: isDevServer
}

export const definePlugin = new DefinePlugin(config)
