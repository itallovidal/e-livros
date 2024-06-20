import FormHeader from '../components/footer/formHeader.tsx'
import { FormInput } from '../components/input.tsx'
import { Envelope, Lock } from 'phosphor-react'
import { Form } from '../styles/formStyles.ts'
import { Button } from '../components/button.tsx'
import FormFooter from '../components/footer/formFooter.tsx'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ILoginSchema, loginSchema } from '../utils/schemas.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { login } from '../utils/eLivrosAPI/login.ts'
import { useContext } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'

function Login() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
  })
  const { loginUser } = useContext(AppContext)

  async function handleLogin(data: ILoginSchema) {
    const response = await login(data)
    console.log(response)

    if (response.status === 200 && response.user) {
      loginUser(response.user)
      localStorage.setItem('user', JSON.stringify(response.user))
      navigate('/architecture?offset=1')
      return
    }

    setError('password', {
      message: response.message,
    })
  }

  return (
    <main>
      <FormHeader title={'Login'} subtitle={'Welcome back!'} />

      <Form onSubmit={handleSubmit(handleLogin)}>
        <FormInput<ILoginSchema>
          errorMessage={errors.email}
          fieldName={'email'}
          register={register}
          placeholder={'email'}
          icon={<Envelope size={24} />}
        />
        <FormInput<ILoginSchema>
          errorMessage={errors.password}
          fieldName={'password'}
          register={register}
          placeholder={'password'}
          icon={<Lock size={24} />}
        />

        <Button css={{ maxWidth: '18rem', width: '100%' }} variant={'blue'}>
          login
        </Button>
      </Form>

      <div className={'divider'}></div>

      <FormFooter
        title={'Does not have an account?'}
        buttonText={'signIn'}
        goTo={'/signup'}
      />
    </main>
  )
}

export default Login
