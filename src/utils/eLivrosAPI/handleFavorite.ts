import { favoriteBook } from './favoriteBook.ts'
import { unfavoriteBook } from './unfavoriteBook.ts'

export async function handleFavorite(
  userToken: string,
  bookID: string,
  operation: boolean,
) {
  if (operation) {
    await favoriteBook(userToken, bookID)
    return
  }

  await unfavoriteBook(userToken, bookID)
}
