import './config'
import logger from 'pushover-logger'
logger.setTitle(require(`../package.json`).name)
// logger.enableDebug()

async function start() {
  try {
    console.log(`start`)
  } catch (error) {
    logger.log(error.stack)
  }
}

start()
