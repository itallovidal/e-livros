export async function getUserBooksFromOpenAPI(
  bookList: {
    id: string
    user_id: string
    book_id: string
    created_at: Date
  }[],
) {
  const books = []

  for (const book of bookList) {
    const searchBooks = `/works/${book.book_id}.json`
    const URL = 'https://openlibrary.org' + searchBooks

    const response = await fetch(URL, {
      method: 'GET',
    })

    const data = await response.json()

    books.push({ ...data, cover_id: data.covers[0] })
  }

  return books
}
