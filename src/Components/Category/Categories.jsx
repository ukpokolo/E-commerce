import React from 'react'
import { categories } from '../../data'
import { Container } from './CategoriesElements'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Container>
        {categories.map(item =>
            <CategoryItem key={item.id} item={item}/> 
            )}
    </Container>
  )
}

export default Categories