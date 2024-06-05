export async function readBook(userToken: string, bookID: string) {
  const response = await fetch(`http://localhost:3000/books/read`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bookID,
    }),
  })

  if (response.status !== 201) {
    throw new Error('a')
  }

  return true
}
