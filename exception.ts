// @ts-nocheck

class HttpException extends Error {
    // message为异常信息，errorCode为错误码(开发人员内部约定)，code为HTTP状态码
    constructor(message = '服务器异常', errorCode = 10000, code = 400) {
      super()
      this.errorCode = errorCode || 10000
      this.code = code || 400
      this.message = message || '服务器异常'
    }
  }
  
  class ParameterException extends HttpException {
    constructor(message, errorCode) {
      super()
      this.errorCode = errorCode || 10000
      this.code = 400
      this.message = message || '参数错误'
    }
  }
  
  class NotFound extends HttpException {
    constructor(message, errorCode) {
      super()
      this.errorCode = errorCode || 10001
      this.code = 404
      this.message = message || '资源未找到'
    }
  }
  
  class AuthFailed extends HttpException {
    constructor(message, errorCode) {
      super()
      this.errorCode = errorCode || 10002
      this.message = message || '授权失败'
      this.code = 401
    }
  }
  
  class Forbidden extends HttpException {
    constructor(message, errorCode) {
      super()
      this.errorCode = errorCode || 10003
      this.message = message || '禁止访问'
      this.code = 403
    }
  }
  
  export default {
    HttpException,
    ParameterException,
    NotFound,
    AuthFailed,
    Forbidden,
  }