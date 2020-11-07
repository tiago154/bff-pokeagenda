const logging = {
  requestDidStart: (requestContext) => {
    console.log('Request started! Query')
    console.log('Variables:', requestContext.request.variables)
    console.log('Query:', requestContext.request.query)
  }
}

module.exports = logging
