import { ILoginSchema } from './schemas.ts'
import { ILoginError } from '../@types/api'

function isApiLoginError(response: any): response is ILoginError {
  if (!response === null) return false

  if (!(response instanceof Object)) return false

  return Array.isArray(response.error)
}

export async function login(data: ILoginSchema) {
  const response = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const convertedResponse = await response.json()

  if (response.status !== 200 && isApiLoginError(convertedResponse)) {
    return {
      message: convertedResponse.message,
      status: response.status,
    }
  }

  return {
    user: {
      accessToken: convertedResponse.accessToken,
      name: convertedResponse.name,
    },
    message: convertedResponse.message,
    status: response.status,
  }
}
