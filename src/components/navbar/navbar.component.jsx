import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import loginImage from '../../assets/loginImage.png'



import {
  NavigationContainer,
  NavLinks,
  NavLink,
  
} from './navbar.styles';

const NavBar = () => {
  
  return (
    <Fragment>
      <NavigationContainer>
        <NavLinks>
          <NavLink to='/myworkout'>My Workout</NavLink>
		  <NavLink to='/Login'>
			<img src={loginImage} width={40} height={40} alt="login"/> 
		  </NavLink>
		  <NavLink to='/workoutplanner'>Workouts</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;


