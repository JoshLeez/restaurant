import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants/';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper  section__padding' id="home">
    <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavor"/>
    <h1 className="app__header-h1">The key to Fine Dining</h1>
    <p className='p__opensans'>Silt tellus laboons seid seneteijeaf, foreusk doruieek  josh toeorl fores xowee. Full of dog thingy i think.</p>
    <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome"/>
    </div>
  </div>
);

export default Header;
