import { Outlet } from 'react-router-dom';
import homepic from '../../assets/workout-apps-for-men_hero.png'



const Home = () => {
  return (
    <div className='homepage'>
       <img src={homepic}  alt="home pic"/>
        <Outlet />
    </div>
  );
};

export default Home;
