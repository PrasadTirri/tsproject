import * as React from 'react';
import Navba from '../../components/navbar/Navbar';

interface IAppProps {
}

const About: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
    <Navba />
    About
    </>
  ) ;
};

export default About;
