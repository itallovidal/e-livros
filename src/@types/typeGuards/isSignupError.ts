import { IApiError } from '../api'

export function isApiSignupError(response: any): response is IApiError {
  if (!response === null) return false

  if (!(response instanceof Object)) return false

  return Array.isArray(response.error)
}
