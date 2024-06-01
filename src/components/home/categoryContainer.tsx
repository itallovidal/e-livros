import { CategoryContainer } from '../../styles/home/homeStyle.ts'
import { Link } from 'react-router-dom'
import { categories } from '../../interfaces.ts'

export function Categories() {
  return (
    <CategoryContainer>
      <h1>Categories</h1>
      {categories.map((category) => (
        <Link key={category} to={`/${category.toLowerCase()}?offset=1`}>
          {category}
        </Link>
      ))}
    </CategoryContainer>
  )
}
