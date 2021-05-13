const path = require('path')
const glob = require('glob-promise')

const handler = async function (ctx) {
  try {
    this.logger.info(ctx.action.name, ctx.params)
    const { source = '../../../assets/data' } = ctx.params
    const sourcePath = path.resolve(__dirname, source)
    const files = glob.sync(`${sourcePath}/archives/**/*.cbr`)
    if (files.length === 0) {
      return { success: true }
    }
    do {
      const archive = files.shift()
      await ctx.broker.$rabbitmq.publishExchange('amq.topic', 'moleculer.archives-domain-convert-book.key', { archive })
    } while (files.length > 0)
    return { success: true }
  } catch (e) {
    /* istanbul ignore next */
    this.logger.error(ctx.action.name, e.message)
    /* istanbul ignore next */
    return { success: false, error: e.message }
  }
}

module.exports = {
  handler
}