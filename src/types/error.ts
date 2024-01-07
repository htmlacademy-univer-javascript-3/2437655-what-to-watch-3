export type ErrorType = {
  errorType: string;
  message: string;
  details: ErrorDetails[];
};

type ErrorDetails = {
  property: string;
  value: string;
  messages: string[];
}

export enum Errors {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  COMMON_ERROR = 'COMMON_ERROR',
}
