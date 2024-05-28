import FormHeader from '../components/formHeader.tsx'
import { FormInput } from '../components/Input.tsx'
import { Lock, User } from 'phosphor-react'
import { Form } from '../styles/formStyles.ts'
import { Button } from '../components/Button.tsx'
import FormFooter from '../components/formFooter.tsx'

export function Signup() {
  return (
    <main>
      <FormHeader
        title={'SignUp'}
        subtitle={'In a few steps you are in the club!'}
      />

      <Form>
        <FormInput placeholder={'name'} icon={<User size={24} />} />
        <FormInput placeholder={'email'} icon={<Lock size={24} />} />
        <FormInput placeholder={'password'} icon={<Lock size={24} />} />
        <FormInput
          placeholder={'password confirmation'}
          icon={<Lock size={24} />}
        />

        <Button css={{ maxWidth: '18rem', width: '100%' }} variant={'blue'}>
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
