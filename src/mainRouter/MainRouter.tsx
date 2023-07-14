import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../store/store';
import Nav from '../components/navbar/Navbar';
// import Navbarr from '../components/Navbar'


interface IAppProps {
}

const MainRouter: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Provider store={store} >
    
    {/* <Navbar /> */}
    <header>
    <Nav />
    </header>
    
    <main>
        <Outlet />
    </main>
     </Provider>
     
  );
};

export default MainRouter;
