export async function fetchBooks(
  category: string,
  offset: number,
  limit?: number,
) {
  const baseURL = 'https://openlibrary.org'
  let URL = baseURL

  const fetchBooksURL = `/subjects/${category}.json`
  const params = `?offset=${offset}&limit=${limit || 12}`

  URL += fetchBooksURL + params

  const data = await fetch(URL, {
    method: 'GET',
  })

  return await data.json()
}
