import { CategoryContainer } from '../../styles/home/homeStyle.ts'
import { Link } from 'react-router-dom'
import { categories } from '../../utils/schemas.ts'

export function Categories() {
  return (
    <CategoryContainer>
      <h1>Categories</h1>
      {categories.map((category) => {
        if (category.includes('_')) {
          category = category.replace('_', ' ')
        }

        return (
          <Link key={category} to={`/${category}?offset=1`}>
            {category}
          </Link>
        )
      })}
    </CategoryContainer>
  )
}
