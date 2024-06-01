export async function searchBooks(title: string) {
  const searchBooks = `/search.json?title=${title}`
  const URL = 'https://openlibrary.org' + searchBooks

  const response = await fetch(URL, {
    method: 'GET',
  })

  const data = await response.json()
  const books = []

  for (let i = 0; i < 13; i++) {
    if (data.docs[i].cover_i) {
      books.push({ ...data!.docs[i], cover_id: data.docs[i].cover_i })
    }
  }

  return books
}
