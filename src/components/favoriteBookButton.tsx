import { Button } from './button.tsx'
import { Heart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { AppContext } from '../contexts/globalContext.tsx'
import { favoriteBook } from '../utils/eLivrosAPI/favoriteBook.ts'
import { unfavoriteBook } from '../utils/eLivrosAPI/unfavoriteBook.ts'

export function FavoriteBookButton({
  id,
  isAlreadyFavorite,
}: {
  id: string
  isAlreadyFavorite: boolean
}) {
  const [isFavorite, setIsFavorite] = useState(isAlreadyFavorite)
  const { user } = useContext(AppContext)
  const [isLoading, setLoading] = useState(false)

  async function handleFavorite(
    userToken: string,
    bookID: string,
    operation: boolean,
  ) {
    setLoading(true)
    if (operation) {
      await favoriteBook(userToken, bookID)
      setIsFavorite(true)
      setLoading(false)
      return
    }

    await unfavoriteBook(userToken, bookID)
    setIsFavorite(false)
    setLoading(false)
  }

  return (
    <Button
      onClick={() => handleFavorite(user!.accessToken, id, !isFavorite)}
      disabled={!user?.accessToken || isLoading}
      variant={isFavorite ? 'blue' : 'white'}
    >
      <Heart size={32} />
    </Button>
  )
}
