export async function fetchBookCover(coverID: number | string) {
  const response = await fetch(
    `https://covers.openlibrary.org/b/id/${coverID}-L.jpg`,
    {
      method: 'GET',
    },
  )
  const img = await response.blob()
  return URL.createObjectURL(img)
}
