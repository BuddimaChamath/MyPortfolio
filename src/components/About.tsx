import React from 'react';
export const About = () => {
  return <section id="about" className="py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I am a passionate software engineering student with a strong desire
            to create efficient, user-friendly applications that solve
            real-world problems. My academic journey at Kingston University via
            ESOFT Metro Campus has equipped me with both theoretical knowledge
            and practical skills in various programming languages and
            technologies.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            I'm particularly interested in mobile development, web applications,
            and database design. I'm always eager to learn new technologies and
            methodologies to expand my skill set and stay current with industry
            trends. I believe in writing clean, maintainable code and following
            best practices in software development.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and continuously improving my
            problem-solving skills through coding challenges.
          </p>
        </div>
      </div>
    </section>;
};