import Menu from "../../models/Menu";
import { Cards } from "../Cards";
import { CardContainer, Container } from "./styles";

type Props = {
  menuRestaurant: Menu[]
};

const CardsList = ({ menuRestaurant }: Props) => (
    <Container>
  <CardContainer className="container">
    {menuRestaurant.map((menu) => (
        <Cards
        key={menu.id}
        image={menu.image}
        emphasis={menu.emphasis}
        category={menu.category}
        description={menu.description}
        rating={menu.rating}
        starImage={menu.starImage}
        title={menu.title}
      />
    ))}
  </CardContainer>
    </Container>
);

export default CardsList;
