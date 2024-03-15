import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProjectCard from './ProjectCard';

import curricatorImage from '../../assets/curricator.png';
import hukamnamaImage from '../../assets/hukamnama.png';
import trainingTrackerImage from '../../assets/training-tracker.png'
import discordBotImage from '../../assets/discord-bot.jpeg';
import atomicTaskerImage from '../../assets/atomic-tasker.jpeg';
import upipImage from '../../assets/upip.png';
import { Typography } from '@material-tailwind/react';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, scale: '150%', display: "block", background: "#43211F", borderRadius: 10, width: 19.2, height: 19.2 }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow component
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, scale: '150%', display: "block", background: "#43211F", borderRadius: 10, width: 19.2, height: 19.2 }}
      onClick={onClick}
    />
  );
}

const projectData = [
  {
    name: 'Training and Placement data tracker',
    description: 'GNDEC\'s official web app for managing college student\'s training details and placement details',
    url: 'https://training-tracker-gndec.vercel.app/',
    github: 'https://github.com/whogurdevil/training-tracker-gndec',
    bgimage: trainingTrackerImage,
  },
  {
    name: 'curricator',
    description: 'A curriculum development tool for AICTE approved institutions',
    url: 'https://github.com/whogurdevil/curricula',
    github: 'https://github.com/whogurdevil/curricula',
    bgimage: curricatorImage,
  },
  {
    name: 'UPIP',
    description: 'A unified API for getting information from various providers of Europe developed during Siemens Tech For Sustainability 2024',
    url: 'https://github.com/whogurdevil/UPIP',
    github: 'https://github.com/whogurdevil/UPIP',
    bgimage: upipImage,
  },
  {
    name: 'Hactoberfest',
    description: 'Designing an development of User Interface for Android application built using react native',
    url: 'https://github.com/whogurdevil/Atomic_Tasker',
    github: 'https://github.com/whogurdevil/Atomic_Tasker',
    bgimage: atomicTaskerImage,
  },
  {
    name: 'Hukamanama to PDF Windows app',
    description: 'Electron app to export Hukamnama(daily hymn from the Guru Granth Sahib) to a png or jpeg format to display in Gurdwaras',
    url: 'https://github.com/whogurdevil/HukamNama',
    github: 'https://github.com/whogurdevil/HukamNama',
    bgimage: hukamnamaImage,
  },
  {
    name: 'Database for college Discord-Bot',
    description: 'Designing and development of database for official college discord bot using sqlite to manage student data',
    url: 'https://github.com/whogurdevil/auth-discord-bot',
    github: 'https://github.com/whogurdevil/auth-discord-bot',
    bgimage: discordBotImage,
  },
];

const Carousel = () => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "center",
    // centerMode: true,
    // infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 600,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id='projects' className="relative bg-brown-50 w-[calc(120vw)] px-[calc(15vw)] py-6">
      <div className='pt-8'>
        <Typography placeholder={''} className='text-5xl font-bold text-primary ml-12'>Projects</Typography>
        <Slider {...settings}>
          {projectData.map((project) => (
            <div key={project.name} className="px-12 py-10">
              <ProjectCard data={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Carousel;
