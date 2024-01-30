import React, { useState } from 'react';
import mountains from '../../assets/mountains.png';
import backTrees from '../../assets/back-tree.png';
import midTrees from '../../assets/mid-tree.png';
import frontTrees from '../../assets/tree-front.png';
import profile from '../../assets/profile.png';
import leftLeaves from '../../assets/right-leaves.png'; // You might want to rename this variable if it's actually right leaves.
import rightLeaves from '../../assets/left-leaves.png';
import './home.css';
import About from '../about/About';
import 'atropos/css';
import { Atropos } from 'atropos/react';

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event: any) => {
    const { scrollTop } = event.currentTarget;
    setScrollTop(scrollTop);

    const mountains = document.getElementById('mountains');
    const backTrees = document.getElementById('backTrees');
    const midTrees = document.getElementById('midTrees');
    const profile = document.getElementById('profile');
    const frontTrees = document.getElementById('frontTrees');
    const leftLeaves = document.getElementById('leftLeaves');
    const rightLeaves = document.getElementById('rightLeaves');

    if (mountains && backTrees && midTrees && profile && frontTrees && leftLeaves && rightLeaves) {
      mountains.style.top = `${scrollTop * 0.5}px`;
      backTrees.style.top = `${scrollTop * 0.3}px`;
      midTrees.style.top = `${scrollTop * 0.2}px`;
      profile.style.top = `${scrollTop * 0.1}px`;
      // profile.style.left = `${scrollTop * -2}px`
      // profile.style.width = `${scrollTop * 1.0}px`;
      frontTrees.style.top = `${scrollTop * 0.1}px`;
      leftLeaves.style.top = `${scrollTop * -0.5}px`;
      leftLeaves.style.left = `${scrollTop * -0.5}px`;
      rightLeaves.style.top = `${scrollTop * -0.5}px`;
      rightLeaves.style.left = `${scrollTop * 0.5}px`;
    }
  };



  return (
    <div className='body1 content-center items-center justify-center' onScroll={handleScroll}>
      <div className='imageContainer content-center items-center justify-center'>
        <Atropos className="my-atropos content-center items-center justify-center"
          activeOffset={20}
          shadowScale={0}
          onEnter={() => console.log('Enter')}
          onLeave={() => console.log('Leave')}
          onRotate={(x, y) => console.log('Rotate', x, y)}
        >

          <img className='img1' data-atropos-offset="-2" id='mountains' src={mountains} alt="" />
          <img className='img1' data-atropos-offset="-1.5" id='backTrees' src={backTrees} alt="" />
          <img className='img1' data-atropos-offset="-1" id='midTrees' src={midTrees} alt="" />
          {/* <div className='img1' data-atropos-offset="-5" id='profileBack'></div> */}
          <img className='img1' data-atropos-offset="-0.5" id='profile' src={profile} alt="" />
          <img className='img1' data-atropos-offset="1" id='frontTrees' src={frontTrees} alt="" />
          <img className='img1' data-atropos-offset="1.5" id='leftLeaves' src={leftLeaves} alt="" />
          <img className='img1' data-atropos-offset="2" id='rightLeaves' src={rightLeaves} alt="" />
        </Atropos>

      </div>
      <About />
    </div>
  );
}
