const { createConnection, getConnectionOptions } = require('typeorm')

module.exports = async () => {
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, {
      database: defaultOptions.database
    })
  )
}