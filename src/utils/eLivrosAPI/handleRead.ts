import { readBook } from './readBook.ts'
import { unreadBook } from './unreadBook.ts'

export async function handleRead(
  userToken: string,
  bookID: string,
  operation: boolean,
) {
  if (operation) {
    await readBook(userToken, bookID)
    return
  }

  await unreadBook(userToken, bookID)
}
