import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = ({ categories }) => {

  return (
    <div>
        <Outlet/>
        <Directory categories={categories}/>
    </div>
  );
}

export default Home;
