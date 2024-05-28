import FormHeader from '../components/formHeader.tsx'
import { FormInput } from '../components/Input.tsx'
import { Lock, User } from 'phosphor-react'
import { Form } from '../styles/formStyles.ts'
import { Button } from '../components/Button.tsx'
import FormFooter from '../components/formFooter.tsx'

function Login() {
  return (
    <main>
      <FormHeader
        title={'Login'}
        subtitle={'Reserve, favorite, conheça, descubra!'}
      />

      <Form>
        <FormInput placeholder={'nome'} icon={<User size={24} />} />
        <FormInput placeholder={'senha'} icon={<Lock size={24} />} />

        <Button css={{ maxWidth: '18rem', width: '100%' }} variant={'blue'}>
          Entrar
        </Button>
      </Form>

      <div className={'divider'}></div>

      <FormFooter
        title={'Já possui cadastro?'}
        buttonText={'cadastrar'}
        goTo={'/signup'}
      />
    </main>
  )
}

export default Login
