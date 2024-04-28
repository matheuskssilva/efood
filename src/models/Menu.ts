class Menu {
    emphasis?: string
    category: string
    description: string
    image: string
    rating: string
    starImage: string
    title: string
    id: number
  
    constructor(
      emphasis: string,
      category: string,
      description: string,
      image: string,
      rating: string,
      starImage: string,
      title: string,
      id: number
    ) {
      this.emphasis = emphasis
      this.category = category
      this.description = description
      this.image = image
      this.rating = rating
      this.starImage = starImage
      this.title = title
      this.id = id
    }
  }
  
  export default Menu
  