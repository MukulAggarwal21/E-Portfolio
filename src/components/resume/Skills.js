import React from 'react';
import { useState } from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiDjango,
  SiTypescript,
  SiGo,
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiLinux,
  SiGit,
  SiHeroku,
  SiDocker,
  SiGithub,
  SiNotion,
  SiNetlify,
} from "react-icons/si";

export default function ProfessionalSkillset() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);
  
  const skills = [
    { id: 'cpp', name: 'C++', icon: CgCPlusPlus },
    { id: 'js', name: 'JavaScript', icon: DiJavascript1 },
    { id: 'ts', name: 'TypeScript', icon: SiTypescript },
    { id: 'node', name: 'Node.js', icon: DiNodejs },
    { id: 'react', name: 'React', icon: DiReact },
    { id: 'next', name: 'Next.js', icon: SiNextdotjs },
    { id: 'django', name: 'Django', icon: SiDjango },
    { id: 'git', name: 'Git', icon: DiGit },
    { id: 'mongo', name: 'MongoDB', icon: DiMongodb },
    { id: 'postgres', name: 'PostgreSQL', icon: SiPostgresql },
    { id: 'mysql', name: 'MySQL', icon: DiMysql },
    { id: 'redis', name: 'Redis', icon: SiRedis },
    { id: 'python', name: 'Python', icon: DiPython },
    { id: 'java', name: 'Java', icon: DiJava },
    { id: 'go', name: 'Go', icon: SiGo },
  ];
  
  const tools = [
    { id: 'linux', name: 'Linux', icon: SiLinux },
    { id: 'vscode', name: 'VS Code', icon: SiVisualstudiocode },
    { id: 'postman', name: 'Postman', icon: SiPostman },
    { id: 'slack', name: 'Slack', icon: SiSlack },
    { id: 'vercel', name: 'Vercel', icon: SiVercel },
    { id: 'netlify', name: 'Netlify', icon: SiNetlify },
    { id: 'heroku', name: 'Heroku', icon: SiHeroku },
    { id: 'docker', name: 'Docker', icon: SiDocker },
    { id: 'github', name: 'GitHub', icon: SiGithub },
    { id: 'notion', name: 'Notion', icon: SiNotion },
  ];

  const renderSkillIcon = (skill) => {
    return React.createElement(skill.icon, { 
      className: "text-5xl md:text-6xl text-white" 
    });
  };

  const renderToolIcon = (tool) => {
    return React.createElement(tool.icon, { 
      className: "text-5xl md:text-6xl text-white" 
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-opacity-95 text-white p-4">
      {/* Stars background effect */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl space-y-16">
        {/* Professional Skillset Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Professional <span className="text-purple-400">Skillset</span>
          </h1>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="aspect-square flex items-center justify-center border border-purple-500 rounded-lg transition-all duration-300 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer bg-black bg-opacity-75 p-2"
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex flex-col items-center justify-center h-full w-full relative">
                  {renderSkillIcon(skill)}
                  {hoveredSkill === skill.id && (
                    <span className="text-lg md:text-xl text-purple-300 font-medium mt-2 transition-all duration-300">
                      {skill.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-purple-400">Tools</span> I Use
          </h1>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="aspect-square flex items-center justify-center border border-purple-500 rounded-lg transition-all duration-300 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer bg-black bg-opacity-75 p-2"
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div className="flex flex-col items-center justify-center h-full w-full relative">
                  {renderToolIcon(tool)}
                  {hoveredTool === tool.id && (
                    <span className="text-lg md:text-xl text-purple-300 font-medium mt-2 transition-all duration-300">
                      {tool.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}