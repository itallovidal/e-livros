export async function unfavoriteBook(userToken: string, bookID: string) {
  const response = await fetch(`http://localhost:3000/books/favorite`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bookID,
    }),
  })

  return true
}
