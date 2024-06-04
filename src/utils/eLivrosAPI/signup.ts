import { ISignupSchema } from '../schemas.ts'
import { isApiSignupError } from '../../@types/typeGuards/isSignupError.ts'

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

  if (response.status !== 201 && isApiSignupError(convertedResponse)) {
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
