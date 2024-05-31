import FormHeader from '../components/formHeader.tsx'
import { FormInput } from '../components/Input.tsx'
import { Lock, User } from 'phosphor-react'
import { Form } from '../styles/formStyles.ts'
import { Button } from '../components/Button.tsx'
import FormFooter from '../components/formFooter.tsx'

function Login() {
  return (
    <main>
      <FormHeader title={'Login'} subtitle={'Boook, favorite, discover!'} />

      <Form>
        <FormInput placeholder={'name'} icon={<User size={24} />} />
        <FormInput placeholder={'password'} icon={<Lock size={24} />} />

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