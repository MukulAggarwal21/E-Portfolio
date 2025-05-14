import React from 'react';
import { nscc, leitner, news, major, textcraft, cloud } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="LEITNER SYSTEM | A FLASHCARD LEARNING SYSTEM"
          des="Developed a flashcard learning system with spaced repetition using React.js and Node.js, featuring adaptive review logic for efficient, personalized learning."
          src={leitner}
          git=""
          live="http://leitner-system.onrender.com"
        />
        <ProjectsCard
          title="CurrentCove || Real Time News Platform."
          des="Developed CurrentCove, a dynamic React web app that aggregates real-time news from 20+ sources, with sorting features and article summarization, reducing reading time by 50%."
          src={news}
          git="https://github.com/MukulAggarwal21/CurrentCove"
          live=""
        />
        <ProjectsCard
          title="Mini Cloud | A Pocket Cloud Storage"
          des="Built a Cloud management web app with features like file upload, folder creation, search, and storage tracking, supporting multiple file types for easy organization and access."
          src={cloud}
          git="https://github.com/MukulAggarwal21/mini_cloud"
          live="https://mini-cloud-project.vercel.app/"
        />
       
        <ProjectsCard
          title="TextCraftHub ||  A React Application"
          des="TextCraftHub is a compact text editor that transforms your content with simple formatting tools. It offers case conversion, space removal, and provides instant word count statistics.RetryClaude can make mistakes. Please double-check responses."
          src={textcraft}
          git="https://github.com/MukulAggarwal21/TextCraftHub"
          live="https://mukulaggarwal21.github.io/TextCraftHub/"
        />
         <ProjectsCard
          title="NSCC WEBSITE || Club Website"
          des=" Built and deployed NSCC’s website using Next.js and Node.js, featuring club activities and resources, and integrated a system to manage 50+ educational lectures via REST API."
          src={nscc}
          git="https://github.com/MukulAggarwal21/nsccwebsite"
          live="https://nscckiet.vercel.app/"
        />
        <ProjectsCard
          title="Gemnest || Jewellery Web Application | My Fist Project" 
          des="Developed a jewelry website that displays products by category, enabling easy browsing of necklaces, earrings, bracelets, and rings through a clean, user-friendly interface."
          src={major}
          git="https://github.com/MukulAggarwal21/Gemnest"
          live="https://gemnest.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects