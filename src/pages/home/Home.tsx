//TODO: make  leabes also go away with the scroll thing

import { useEffect, useRef } from 'react';
import mountains from '../../assets/mountains.png';
import backTrees from '../../assets/back-tree.png';
import midTrees from '../../assets/mid-tree.png';
import frontTrees from '../../assets/tree-front.png';
import profile from '../../assets/profile.png';
import leftLeaves from '../../assets/right-leaves.png';
import scrolLeaf from '../../assets/scroll-leaf.png'
import rightLeaves from '../../assets/left-leaves.png';
import './home.css';
import About from '../about/About';
import { Atropos } from 'atropos/react';
import { Typography } from '@material-tailwind/react';
import Skills from '../../components/skills/Skills';
import Projects from '../projects/Projects';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const viewportWidth = window.innerWidth;
      const leftPosition = (viewportWidth * 0.1); // 10vw equivalent

      containerRef.current.scrollTo({
        top: 0,
        left: leftPosition
      });
    }
  }, []);


  const handleScroll = (event: any) => {
    const { scrollTop } = event.currentTarget;

    const mountains = document.getElementById('mountains');
    const backTrees = document.getElementById('backTrees');
    const midTrees = document.getElementById('midTrees');
    const profile = document.getElementById('profile');
    const frontTrees = document.getElementById('frontTrees');
    // const leftLeaves = document.getElementById('leftLeaves');
    // const rightLeaves = document.getElementById('rightLeaves');


    mountains!.style.top = `${scrollTop * 0.5}px`;
    backTrees!.style.top = `${scrollTop * 0.3}px`;
    midTrees!.style.top = `${scrollTop * 0.2}px`;
    profile!.style.top = `${scrollTop * 0.1}px`;
    frontTrees!.style.top = `${scrollTop * 0.1}px`;

  };


  return (
    <div
      id='main'
      ref={containerRef}
      className='body1 content-center items-center justify-center'
      onScroll={handleScroll}
    >
      <div className='imageContainer content-center items-center justify-center' id='inner'>
        <Atropos className="my-atropos content-center items-center justify-center"
          activeOffset={10}
          shadowScale={0}
          onEnter={() => console.log('Enter')}
          onLeave={() => console.log('Leave')}
          onRotate={(x, y) => console.log('Rotate', x, y)}
        >
          <img className='img1' data-atropos-offset="-3" id='mountains' src={mountains} alt="" />
          <img className='img1' data-atropos-offset="-2" id='backTrees' src={backTrees} alt="" />
          <img className='img1' data-atropos-offset="-1.5" id='midTrees' src={midTrees} alt="" />
          <img className='img1' data-atropos-offset="-1" id='profile' src={profile} alt="" />
          <img className='img1' data-atropos-offset="1.5" id='frontTrees' src={frontTrees} alt="" />
          <img className='img1' data-atropos-offset="2" id='leftLeaves' src={leftLeaves} alt="" />
          <img className='img1' data-atropos-offset="3" id='rightLeaves' src={rightLeaves} alt="" />
        </Atropos>
        {/* <Typography placeholder={undefined} className='intro-text'variant='h2'>
        "Hey there! I'm Gurdev Singh, a passionate software developer based in Ludhiana. I thrive on crafting elegant solutions and turning intricate code into innovative experiences that resonate in the digital realm."
        </Typography> */}
        <Typography placeholder={undefined} className='intro-text text-5xl font-bold' style={{ color: '#4E342E' }}>
          Welcome to <br /><span className='text-span'>Gurdev Singh</span>'s Portfolio
        </Typography>

        <img id='scroll-leaf' src={scrolLeaf} />
        {/* 
        <Typography id='scroll-leaf-text' variant='h3' placeholder={''} style={{ color: '#4E342E'}}>

          Scroll down<br /> to discover<br /> more
        </Typography> */}

      </div>
      <About /> 
      <Skills/>
      <Projects />
    </div>
  );
}
