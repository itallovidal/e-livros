import { ISignupSchema } from './schemas.ts'
import { IApiError } from '../@types/api'

function isApiError(response: any): response is IApiError {
  if (!response === null) return false

  if (!(response instanceof Object)) return false

  return Array.isArray(response.error)
}

export async function signup(data: ISignupSchema): Promise<{
  message: string
  status: number
}> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordConfirmation, ...user } = data

  console.log(user)

  const response = await fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const convertedResponse = await response.json()

  console.log(convertedResponse)

  if (response.status !== 201 && isApiError(convertedResponse)) {
    return {
      message: convertedResponse.message,
      status: response.status,
    }
  }

  return {
    message: convertedResponse.message,
    status: response.status,
  }
}
