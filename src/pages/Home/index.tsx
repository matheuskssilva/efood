
import { useParams } from "react-router-dom";
import { Hero } from "../../components/Hero";
import { MenuList } from "./menu";
 
 const Home = () => {

  return (
    <div className="container">
        <Hero />
        <MenuList />
    </div>
  )
}

export default Home;
