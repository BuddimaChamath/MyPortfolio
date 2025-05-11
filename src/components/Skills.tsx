import React from 'react';
import { 
  Code, Database, Server, Globe, GitBranch, Layout, 
  Terminal, Users, Monitor, Coffee, FileCode, Calendar,
  MessageSquare, Brain, Clock, Cpu, Zap, 
  PanelLeft, Shield, Cloud
} from 'lucide-react';

export const Skills = () => {
  const technicalSkills = [
    { name: 'Web Dev', icon: <Globe size={16} /> },
    { name: 'Software Dev', icon: <Code size={16} /> },
    { name: 'Database', icon: <Database size={16} /> },
    { name: 'OOP', icon: <Terminal size={16} /> },
    { name: 'API Design', icon: <Server size={16} /> },
    { name: 'UI/UX', icon: <Monitor size={16} /> },
    { name: 'Design Patterns', icon: <GitBranch size={16} /> },
    { name: 'Microservices', icon: <Cpu size={16} /> }
  ];

  const programmingSkills = [
    { name: 'Dart', level: 'Intermediate', icon: <FileCode size={16} /> },
    { name: 'Java', level: 'Intermediate', icon: <Coffee size={16} /> },
    { name: 'C#', level: 'Intermediate', icon: <FileCode size={16} /> },
    { name: 'Firebase', level: 'Intermediate', icon: <Cloud size={16} /> },
    { name: 'PHP', level: 'Intermediate', icon: <FileCode size={16} /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <Code size={16} /> },
    { name: 'React', level: 'Intermediate', icon: <PanelLeft size={16} /> },
    { name: 'HTML/CSS', level: 'Advanced', icon: <FileCode size={16} /> },
    { name: 'Bootstrap', level: 'Advanced', icon: <Layout size={16} /> },
    { name: 'MS SQL', level: 'Intermediate', icon: <Database size={16} /> },
    { name: 'Git', level: 'Intermediate', icon: <GitBranch size={16} /> },
    { name: 'Flutter', level: 'Intermediate', icon: <Code size={16} /> },
    { name: 'Docker', level: 'Beginner', icon: <Cpu size={16} /> },
    { name: 'Security', level: 'Beginner', icon: <Shield size={16} /> }
  ];

  const softSkills = [
    { name: 'Adaptability', icon: <Layout size={16} /> },
    { name: 'Time Management', icon: <Clock size={16} /> },
    { name: 'Communication', icon: <MessageSquare size={16} /> },
    { name: 'Critical Thinking', icon: <Brain size={16} /> },
    { name: 'Problem Solving', icon: <Zap size={16} /> },
    { name: 'Teamwork', icon: <Users size={16} /> }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-blue-600 dark:bg-blue-500';
      case 'Intermediate': return 'bg-blue-500 dark:bg-blue-400';
      case 'Beginner': return 'bg-blue-400 dark:bg-blue-300';
      default: return 'bg-blue-500 dark:bg-blue-400';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Advanced': return 'w-full';
      case 'Intermediate': return 'w-2/3';
      case 'Beginner': return 'w-1/3';
      default: return 'w-1/2';
    }
  };

  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-600 dark:text-blue-400">My Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            An overview of my technical abilities and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md transform hover:scale-105 transition duration-300 border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-5 flex items-center text-blue-600 dark:text-blue-400">
              <Monitor size={20} className="mr-2" /> Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center text-sm bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                  <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full mr-2 text-blue-600 dark:text-blue-300">
                    {skill.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Programming Skills */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md transform hover:scale-105 transition duration-300 border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-5 flex items-center text-blue-600 dark:text-blue-400">
              <Code size={20} className="mr-2" /> Programming & Tools
            </h3>
            <div className="space-y-3">
              {programmingSkills.slice(0, 8).map((skill, index) => (
                <div key={index} className="flex items-center text-sm justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full mr-2 text-blue-600 dark:text-blue-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                      <div className={`${getLevelColor(skill.level)} ${getLevelWidth(skill.level)} h-1.5 rounded-full`}></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 w-6">{skill.level.charAt(0)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Skills */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md transform hover:scale-105 transition duration-300 border-t-4 border-blue-500">
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <Cpu size={20} className="mr-2" /> More Tools
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {programmingSkills.slice(8).map((skill, index) => (
                  <div key={index} className="flex items-center text-sm bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                    <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full mr-2 text-blue-600 dark:text-blue-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600 dark:text-blue-400">
                <Users size={20} className="mr-2" /> Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center text-sm bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
                    <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full mr-2 text-blue-600 dark:text-blue-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}