export async function about(userToken: string, bookID: string) {
  const response = await fetch(`http://localhost:3000/books/about/${bookID}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
