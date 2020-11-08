const logging = {
  requestDidStart: (requestContext) => {
    if (requestContext.request.operationName !== 'IntrospectionQuery') {
      console.log('Request started! Query')
      console.log('Variables:', requestContext.request.variables)
      console.log('Query:', requestContext.request.query)
    }
  }
}

module.exports = logging
