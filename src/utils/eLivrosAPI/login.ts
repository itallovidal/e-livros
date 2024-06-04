import { ILoginSchema } from '../schemas.ts'
import { isApiLoginError } from '../../@types/typeGuards/isLoginError.ts'
import { IUser } from '../../@types/api'

interface ILoginResponse {
  message: string
  status: number
  user?: IUser
}

export async function login(data: ILoginSchema): Promise<ILoginResponse> {
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

  console.log(convertedResponse)

  return {
    user: {
      accessToken: convertedResponse.accessToken,
      name: convertedResponse.name,
    },
    message: convertedResponse.message,
    status: response.status,
  }
}
