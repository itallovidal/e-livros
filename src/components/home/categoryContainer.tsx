import { CategoryContainer } from '../../styles/home/homeStyle.ts'
import { Link } from 'react-router-dom'

export const categories = [
  'Architecture',
  'Art History',
  'Graphic Design',
  'Fantasy',
  'Magic',
  'Computer Science',
  'Brazil',
  'Finance',
  'Horror',
  'Humor',
  'Exercise',
  'Cooking',
] as const

export type ICategories = typeof categories

export function Categories() {
  return (
    <CategoryContainer>
      <h1>Categories</h1>
      {categories.map((category) => (
        <Link key={category} to={`/${category.toLowerCase()}?offset=1`}>{category}</Link>
      ))}
    </CategoryContainer>
  )
}
