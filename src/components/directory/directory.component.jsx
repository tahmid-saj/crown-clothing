import CategoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

import { DirectoryContainer } from './directory.styles.scss';

const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets"
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers"
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE=",
      route: "shop/womens"
    
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=612x612&w=0&k=20&c=RR19yJjRuR-CBWj9u1sQkFgtdYJ07KEkM678R0mtuZY=",
      route: "shop/mens"
    }
  ];

const Directory = ( ) => {
    

    return (
        <div className='directory-container'>
        {categories.map((category) => {
            return (
            <CategoryItem key={category.id} category={category}/>
            );
        })}
        </div>
    );
}

export default Directory;