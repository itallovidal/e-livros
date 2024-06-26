import FormHeader from '../components/footer/formHeader.tsx'
import { FormInput } from '../components/input.tsx'
import { Envelope, Lock, User } from 'phosphor-react'
import { Form } from '../styles/formStyles.ts'
import { Button } from '../components/button.tsx'
import FormFooter from '../components/footer/formFooter.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ISignupSchema, signupSchema } from '../utils/schemas.ts'
import { signup } from '../utils/eLivrosAPI/signup.ts'
import { useNavigate } from 'react-router-dom'

export function Signup() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<ISignupSchema>({
    resolver: zodResolver(signupSchema),
  })

  async function handleSignup(data: ISignupSchema) {
    const response = await signup(data)

    if (response.status === 201) {
      navigate('/login')
      return
    }

    setError('passwordConfirmation', {
      message: response.message,
    })
  }

  return (
    <main>
      <FormHeader
        title={'SignUp'}
        subtitle={'In a few steps you are in the club!'}
      />

      <Form onSubmit={handleSubmit(handleSignup)}>
        <FormInput<ISignupSchema>
          errorMessage={errors.name}
          fieldName={'name'}
          register={register}
          placeholder={'name'}
          icon={<User size={24} />}
        />
        <FormInput<ISignupSchema>
          errorMessage={errors.email}
          fieldName={'email'}
          register={register}
          placeholder={'email'}
          icon={<Envelope size={24} />}
        />
        <FormInput<ISignupSchema>
          errorMessage={errors.password}
          fieldName={'password'}
          register={register}
          placeholder={'password'}
          icon={<Lock size={24} />}
        />
        <FormInput<ISignupSchema>
          errorMessage={errors.passwordConfirmation}
          fieldName={'passwordConfirmation'}
          register={register}
          placeholder={'password confirmation'}
          icon={<Lock size={24} />}
        />

        <Button
          type={'submit'}
          css={{ maxWidth: '18rem', width: '100%' }}
          variant={'blue'}
        >
          sign up
        </Button>
      </Form>

      <div className={'divider'}></div>

      <FormFooter
        title={'Already signed in?'}
        buttonText={'login'}
        goTo={'/login'}
      />
    </main>
  )
}
