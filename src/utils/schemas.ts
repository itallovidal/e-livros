// importando o objeto z da biblioteca do zod
import { z } from 'zod'

// criando um objeto de validação
export const signupSchema = z
  .object({
    email: z.string().email({
      message: 'Invalid Email.',
    }),
    password: z.string().min(6, {
      message: 'Password must contain at least 6 characters.',
    }),
    passwordConfirmation: z.string().min(6, {
      message: 'Password Confirmation must contain at least 6 characters.',
    }),
    name: z.string().min(3, {
      message: 'Name must contain at least 3 characters.',
    }),
  })
  .refine((form) => form.password === form.passwordConfirmation, {
    message: 'The passwords must be equal.',
    path: ['passwordConfirmation'],
  })

export interface ISignupSchema extends z.infer<typeof signupSchema> {}

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Invalid Email.',
  }),
  password: z.string().min(6, {
    message: 'Password must contain at least 6 characters.',
  }),
})

export interface ILoginSchema extends z.infer<typeof loginSchema> {}

export const categories = [
  'architecture',
  'art_history',
  'graphic_design',
  'fantasy',
  'magic',
  'computer_science',
  'brazil',
  'finance',
  'horror',
  'humor',
  'exercise',
  'cooking',
]
