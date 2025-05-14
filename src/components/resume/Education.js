
import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-6 lg:gap-20"
    >
      {/* part one */}
      <div className="flex-2">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-2 lg:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[2px] md:tracking-[4px]">2019 - Present</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-auto lg:h-[1000px] border-l-[3px] lg:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 lg:gap-10">
          <ResumeCard
            title="B-Tech in Computer Science"
            subTitle="Kiet Group Of Institutions (2022 - Present)"
            result="8.1/10"
          />
          <ResumeCard
            title="CBSE (XII)"
            subTitle="TRM PUBLIC SCHOOL (2021-2022)"
            result="89.8%"
          />
          <ResumeCard
            title="CBSE (X)"
            subTitle="TRM PUBLIC SCHOOL (2019 - 2020)"
            result="87.6%"
          />
        </div>
      </div>
      {/* part Two */}
      <div className="flex-1 mt-6 lg:mt-0">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-2 lg:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[2px] md:tracking-[4px]">2022 - Present</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-auto lg:h-[1000px] border-l-[3px] lg:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 lg:gap-10">
          <ResumeCard
            title="AWS Academy Graduate - AWS Academy Cloud Foundations"
            subTitle="Issued December 01, 2024"
            result="Skills : AWS Architechture, Aws Cloud and AWS Services"
            des="Completed foundational training on AWS Cloud concepts, including core AWS services, cloud architecture, security, pricing, and support. Gained hands-on experience with AWS global infrastructure and best practices for deploying scalable, reliable cloud solutions."
          />
          <ResumeCard
            title="Microsoft Azure Certifications"
            subTitle="Issued December 26, 2024"
            result="Skills Gained : Azure Core Structure"
            des="Successfully completed training on the core architectural components of Microsoft Azure, including key concepts of regions, availability zones, resource groups, subscriptions, and Azure Resource Manager. Developed foundational knowledge in deploying, managing, and scaling Azure cloud solutions securely and efficiently."
          />
          <ResumeCard
            title="Git Essential Training "
            subTitle="Issued October 28, 2023"
            result="Skills Gained : Git, GitHub, Version Control"
            des="Completed comprehensive training covering core Git concepts including version control, branching, merging, and collaboration workflows. Gained hands-on experience in managing repositories and contributing to projects using Git efficiently."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education