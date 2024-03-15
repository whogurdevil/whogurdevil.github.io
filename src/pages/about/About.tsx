import { Typography } from '@material-tailwind/react';
import TypewriterComponent from 'typewriter-effect';
import './about.css'
import aboutGraphic from '../../assets/about-graphic.png'
import bunny from '../../assets/bunny.gif'
import downArrow from '../../assets/down-arrow.png'
import mushroom from '../../assets/mushroom.png'

export default function About() {
  return (
    <section id='about' className='relative py-44 w-[calc(120vw)] bg-brown-50 pt-12 m-auto px-[calc(20vw)]'>
      <Typography placeholder={undefined} variant='h2' style={{color:'#43211F'}} className='max-w-[calc(40vw)]'>
        I am a passionate
        <Typography placeholder={undefined} style={{color:'#CD7F32', }} variant='h2'>
        <TypewriterComponent
          options={{
            strings: ['Frontend Developer', 'Backend Developer', 'Android App Developer'],
            autoStart: true,
            loop: true,
          }}
        />
        </Typography>
        and Computer Science student pursuing Bachelors at GNDEC Ludhiana.<br/> I thrive on crafting elegant solutions and turning intricate code into innovative experiences that resonate in the digital realm 
      </Typography>
      <img src={aboutGraphic} className='absolute top-28 h-[calc(70vh)] right-64'/>
      <img src={bunny} id='bunny'/>
      <img src={mushroom} id='mushroom'/>
      <img src={downArrow} id='down-arrow'/>
    </section>
  );
}
