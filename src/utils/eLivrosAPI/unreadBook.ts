export async function unreadBook(userToken: string, bookID: string) {
  const response = await fetch(`http://localhost:3000/books/read`, {
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
