import { Typography } from "@material-tailwind/react";
import skillsGraphics from '../../assets/skills-graphics.png'


export default function Skills() {
  return (
    <section id='projects' className="h-[calc(120vh)] z-30 absolute bg-brown-900 w-[calc(120vw)] px-52 py-48">
      <img src={skillsGraphics} className="absolute h-[calc(100vh)] top-11" />
      <div className="absolute top-20 right-60 flex-col max-w-[calc(30vw)]">
        <Typography placeholder={undefined} className="text-pinkish text-right text-5xl font-bold">Skills</Typography>

        <Typography placeholder={undefined} className="text-tertiary text-right mt-10 text-2xl  font-bold">Languages</Typography>
        <Typography placeholder={undefined} className="text-brown-50 text-right text-xl mt-1 font-bold">C++, Typescript, Python, Dart, Java</Typography>

        <Typography placeholder={undefined} className="text-tertiary text-right mt-10 text-2xl font-bold ">Devops and DBMS</Typography>
        <Typography placeholder={undefined} className="text-brown-50 text-right text-xl mt-1 font-bold">Linux System Administration, JIRA, Docker, MongoDB, MySQL, PostgreSQL,</Typography>

        <Typography placeholder={undefined} className="text-tertiary text-right mt-10 text-2xl font-bold ">Frameworks</Typography>
        <Typography placeholder={undefined} className="text-brown-50 text-right text-xl font-bold">React, React Native, Flutter, ExpressJS, Flask, Websockets, REST APIs, UI/UX, Django</Typography>

        <Typography placeholder={undefined} className="text-tertiary text-right mt-10 text-2xl font-bold ">Tools</Typography>
        <Typography placeholder={undefined} className="text-brown-50 text-right text-xl mt-1 font-bold">Figma, Git, Github, Gitlab</Typography>

      </div>
    </section>
  )
}
