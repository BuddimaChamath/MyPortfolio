import React from 'react';
import { GraduationCap, Award, Code, Target, Lightbulb, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-600 dark:text-blue-400">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Software Engineer</h3>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              I am a passionate Software Engineer with <strong>First Class Honours</strong> in Computer Science (Software Engineering) 
              from Kingston University, London. Recently graduated in July 2025, I bring a strong foundation in software development 
              principles, design patterns, and modern programming practices to create efficient, user-friendly applications that solve 
              real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              My academic journey has equipped me with both theoretical knowledge and extensive practical experience through various 
              projects, from desktop applications to mobile apps and web solutions. I'm committed to writing clean, maintainable code 
              and following industry best practices.
            </p>
          </div>

          {/* Academic Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Academic Excellence</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Degree Achievement</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>First Class Honours</strong> - BSc Computer Science (Software Engineering)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Kingston University, London (2024-2025)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Graduated: June 2025</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Module Results</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>A+</strong> - Mobile Application Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>A-</strong> - Programming III (Patterns & Algorithms)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>A-</strong> - Individual Project</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Goals & Interests */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Career Goals</h3>
              </div>
              
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Apply academic knowledge in professional software development environments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Contribute to innovative teams and high-quality software solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Grow as a versatile and reliable software engineer</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Make a positive impact through meaningful projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Continuous Learning</h3>
              </div>
              
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Exploring emerging technologies and frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Contributing to open-source projects</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Solving coding challenges and algorithm problems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Staying current with industry trends and best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};