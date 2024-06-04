import FormHeader from '../components/formHeader.tsx'
import { FormInput } from '../components/Input.tsx'
import { Lock, User } from 'phosphor-react'
import { Form } from '../styles/formStyles.ts'
import { Button } from '../components/Button.tsx'
import FormFooter from '../components/formFooter.tsx'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ILoginSchema, loginSchema } from '../utils/schemas.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { login } from '../utils/login.ts'

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

  async function handleLogin(data: ILoginSchema) {
    const response = await login(data)

    if (response.status === 200) {
      navigate('/architecture?offset=1')
      return
    }

    setError('password', {
      message: response.message,
    })
  }

  return (
    <main>
      <FormHeader title={'Login'} subtitle={'Boook, favorite, discover!'} />

      <Form onSubmit={handleSubmit(handleLogin)}>
        <FormInput<ILoginSchema>
          errorMessage={errors.email}
          fieldName={'email'}
          register={register}
          placeholder={'name'}
          icon={<User size={24} />}
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
