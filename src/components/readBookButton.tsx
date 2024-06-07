import { Check } from 'phosphor-react'
import { Button } from './button.tsx'
import { readBook } from '../utils/eLivrosAPI/readBook.ts'
import { unreadBook } from '../utils/eLivrosAPI/unreadBook.ts'
import { useContext, useState } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'

export function ReadBookButton({
  id,
  isAlreadyRead,
}: {
  id: string
  isAlreadyRead: boolean
}) {
  const [isRead, setIsRead] = useState(isAlreadyRead)
  const { user } = useContext(AppContext)
  const [isLoading, setLoading] = useState(false)

  console.log(isRead)

  async function handleRead(
    userToken: string,
    bookID: string,
    operation: boolean,
  ) {
    setLoading(true)
    if (operation) {
      await readBook(userToken, bookID)
      setIsRead(true)
      setLoading(false)

      return
    }

    await unreadBook(userToken, bookID)
    setIsRead(false)
    setLoading(false)
  }

  return (
    <Button
      onClick={() => handleRead(user!.accessToken, id, !isRead)}
      disabled={!user?.accessToken || isLoading}
      variant={isRead ? 'blue' : 'white'}
    >
      Lido
      <Check size={32} />
    </Button>
  )
}
