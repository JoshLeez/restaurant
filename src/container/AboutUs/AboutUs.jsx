import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className='app__aboutus-overlay flex__center '>
      <img src={images.G} alt="big G"/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img'/>
        <p className="p__opensans">A knife (plural knives; from Old Norse knifr 'knife, dirk') is a tool or weapon with a cutting edge or blade, usually attached to a handle or hilt. One of the earliest tools used by humanity, knives appeared at least 2.5 million years ago, as evidenced by the Oldowan tools.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="About knife"/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our Histroy</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img'/>
        <p className="p__opensans">A knife (plural knives; from Old Norse knifr 'knife, dirk') is a tool or weapon with a cutting edge or blade, usually attached to a handle or hilt. One of the earliest tools used by humanity, knives appeared at least 2.5 million years ago, as evidenced by the Oldowan tools.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
      
    </div>
  </div>
);

export default AboutUs;
