import React from 'react'
import { PresentationContainer, Category, Dish } from './styles'

export const Presentation = () => {
  return (
    <PresentationContainer>
        <div className="container">
            <Category>Italiana</Category>
            <Dish>La Dolce Vita Trattoria</Dish>
        </div>
    </PresentationContainer>
  )
}
