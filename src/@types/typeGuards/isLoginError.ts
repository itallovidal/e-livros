import { ILoginError } from '../api'

export function isApiLoginError(response: any): response is ILoginError {
  if (!response === null) return false

  if (!(response instanceof Object)) return false

  return Array.isArray(response.error)
}
