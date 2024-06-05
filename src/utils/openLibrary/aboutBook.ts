export async function aboutBook(id: string) {
  const URL = `https://openlibrary.org/works/${id}.json`

  const dados = await fetch(URL)

  const dadosConvertidos = await dados.json()

  if (!dadosConvertidos.description) {
    return {
      ...dadosConvertidos,
      description: 'No Description Available.',
    }
  }

  if (dadosConvertidos.description.value) {
    return {
      ...dadosConvertidos,
      description: dadosConvertidos.description.value,
    }
  }

  return dadosConvertidos
}
