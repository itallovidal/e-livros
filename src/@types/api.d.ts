export interface IFieldError {
  code: string
  expected: string
  received: string
  path: string[]
  message: string
}

export interface IApiError {
  message: string
  error: IFieldError[]
}

export interface ILoginError {
  message: string
  field: string
  status: number
  error: string
}

export interface IUser {
  accessToken: string
  name: string
}
