export interface ErrorStatus extends Error {
    status?: string;
    statusCode?: number;
  }
  
  export default class AppError extends Error implements ErrorStatus {
    status: string;
    isOperational: boolean;
  
    constructor(public message: string, public statusCode: number = 500) {
      super(message);
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  