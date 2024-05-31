export async function fetchBooks(
  category: string,
  offset: number,
  limit?: number,
) {
  if (category.includes('%20')) {
    category = category.replace('%20', '_')
  }

  if (category.includes(' ')) {
    category = category.replace(' ', '_')
  }
  const URL = `https://openlibrary.org/subjects/${category}.json?offset=${offset}&limit=${limit || 12}`
  console.log(URL)

  const dados = await fetch(URL, {
    method: 'GET',
  })
  return await dados.json()
}
