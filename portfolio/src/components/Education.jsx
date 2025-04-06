// "use client";
// import Image from "next/image";
// import alxLogo from "../../public/images/institution/ALX-Global.svg";
// import andelaLogo from "../../public/images/institution/andela.svg";
// import mksuLogo from "../../public/images/institution/MKSU.webp";
// import clsx from "clsx";
// import React, { useState } from "react";
// import { ChevronDown, ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";

// const EDUCATION_DATA = [
//   {
//     logo: alxLogo,
//     logoAlt: "ALX Logo",
//     program: "Data Science",
//     period: "Jan 2025 - Present",
//     institution: "ALX",
//     description:
//       "Currently pursuing a Data Science program where I am learning advanced data analysis, machine learning techniques, and data visualization using Python, R, and various statistical tools.",
//     achievements: [
//       "Developed a machine learning model that predicts housing prices with 85% accuracy.",
//       "Completed a data visualization project showcasing trends in global temperature changes over the last century.",
//       "Participated in Kaggle competitions, ranking in the top 20% in predictive modeling challenges.",
//     ],
//   },
//   {
//     logo: andelaLogo,
//     logoAlt: "Andela Logo",
//     program: "Andela React Program (Front-end Dev)",
//     period: "July 2023 - Oct 2023",
//     institution: "Andela",
//     description:
//       "Completed a 6-month intensive program focused on front-end web development using React. Gained hands-on experience building dynamic web applications, improving user experiences, and using modern web technologies.",
//     achievements: [
//       "Developed a fully functional e-commerce site as a capstone project, which included features like user authentication and payment integration.",
//       "Improved application performance by optimizing React components and reducing load times by 40%.",
//       "Collaborated with a team of developers to deliver a fully responsive application within a tight deadline.",
//     ],
//   },
//   {
//     logo: alxLogo,

//     logoAlt: "ALX Logo",
//     program: "Software Engineering (Back-end Dev)",
//     period: "Aug 2022 - Oct 2023",
//     institution: "ALX SE",
//     description:
//       "Completed a full-stack software engineering program with a focus on backend development, APIs, and database management. Gained proficiency in Python, Django, and RESTful API development.",
//     achievements: [
//       "Built a RESTful API to manage user data for a web application, supporting over 10,000 active users.",
//       "Optimized database queries in PostgreSQL, reducing response time by 50%.",
//       "Collaborated in a team of engineers to implement a scalable backend for a real-time messaging system.",
//     ],
//   },
//   {
//     logo: mksuLogo,
//     logoAlt: "MKSU Logo",
//     program: "Bachelor of Commerce (Finance Major)",
//     period: "2014 - 2018",
//     institution: "Machakos University",
//     description:
//       "Earned a Bachelor's degree in Commerce with a focus on Finance. Studied financial analysis, accounting, investment strategies, and business economics.",
//     achievements: [
//       "Graduated with honors, achieving a GPA of 3.7/4.0.",
//       "Led a team project that developed a financial analysis tool, which was later adopted by the university's finance department.",
//       "Interned with a local bank, gaining hands-on experience in financial modeling and data analysis.",
//     ],
//   },
// ];

// const EducationCard = ({
//   logo,
//   logoAlt,
//   program,
//   period,
//   institution,
//   description,
//   achievements,
//   url,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => setIsExpanded((prev) => !prev);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="relative border border-border/40 rounded-lg p-6 md:p-8 w-full hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm"
//     >
//       <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
//         <div
//           className="w-16 h-16 relative flex-shrink-0 rounded-lg overflow-hidden"
//           aria-hidden="true"
//         >
//           {logo ? (
//             <Image
//               src={logo}
//               alt=""
//               fill
//               className="object-contain"
//               sizes="(max-width: 768px) 48px, 64px"
//               loading="lazy"
//             />
//           ) : (
//             <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
//               <span className="text-gray-400 text-sm text-center">
//                 {institution.charAt(0)}
//               </span>
//             </div>
//           )}
//         </div>

//         <div className="flex-1 w-full">
//           <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
//             <h3 className="text-xl font-semibold group flex items-center">
//               {institution}
//               {url && (
//                 <a
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex ml-2 text-primary/70 hover:text-primary transition-colors"
//                   aria-label={`Visit ${institution} website`}
//                 >
//                   <ExternalLink size={16} />
//                 </a>
//               )}
//             </h3>

//             <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium">
//               {period}
//             </span>
//           </div>

//           <p className="text-lg font-medium text-gray-700">{program}</p>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <p className="text-gray-600">{description}</p>

//         <button
//           onClick={toggleExpand}
//           className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
//           aria-expanded={isExpanded}
//           aria-controls={`achievements-${institution
//             .replace(/\s+/g, "-")
//             .toLowerCase()}`}
//         >
//           {isExpanded ? "Hide" : "Show"} achievements
//           <ChevronDown
//             size={16}
//             className={clsx("transition-transform", {
//               "rotate-180": isExpanded,
//             })}
//           />
//         </button>

//         <div
//           id={`achievements-${institution.replace(/\s+/g, "-").toLowerCase()}`}
//           className={clsx(
//             "overflow-hidden transition-all duration-300",
//             isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           )}
//         >
//           <ul className="space-y-3 list-none pl-0 pt-2 text-gray-700">
//             {achievements.map((achievement, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <svg
//                   className="flex-shrink-0 h-2 w-2 mt-2 text-primary"
//                   fill="currentColor"
//                   viewBox="0 0 8 8"
//                 >
//                   <circle cx="4" cy="4" r="4" />
//                 </svg>
//                 <span>{achievement}</span>
//               </li>
//             ))}
//           </ul>
//           {/* <ul className="space-y-3 list-none pl-0 pt-2 text-gray-700">
//             {achievements.map((achievement, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <div className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-primary/20 text-primary text-xs">
//                   {index + 1}
//                 </div>
//                 <span>{achievement}</span>
//               </li>
//             ))}
//           </ul> */}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24"
//     >
//       <div className="text-center mb-12 md:mb-16">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           Education & Training
//         </h2>
//         <p className="max-w-2xl mx-auto text-gray-600 text-lg">
//           My educational journey, where I developed a strong foundation in
//           software development and data science, along with expertise in
//           back-end and front-end technologies.
//         </p>
//       </div>

//       <div className="flex flex-col items-center gap-6 md:gap-8 relative before:absolute before:w-0.5 before:bg-primary/10 before:h-full before:left-8 before:-z-10 sm:before:left-1/2 before:top-0 before:transform before:-translate-x-1/2">
//         {EDUCATION_DATA.map((edu, index) => (
//           <div
//             key={index}
//             // className={clsx(
//             //   "w-full sm:w-[95%] sm:even:ml-auto sm:odd:mr-auto",
//             //   "before:content-[''] before:absolute before:w-4 before:h-4 before:bg-primary before:rounded-full before:left-8 sm:before:left-1/2 before:transform before:-translate-x-1/2 relative"
//             // )}
//             className="w-full max-w-3xl mx-auto relative"
//             style={{
//               zIndex: EDUCATION_DATA.length - index,
//             }}
//           >
//             <EducationCard {...edu} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;

"use client";
import Image from "next/image";
import alxLogo from "../../public/images/institution/ALX-Global.svg";
import andelaLogo from "../../public/images/institution/andela.svg";
import mksuLogo from "../../public/images/institution/MKSU.webp";
import clsx from "clsx";
import React, { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const EDUCATION_DATA = [
  {
    logo: alxLogo,
    logoAlt: "ALX Logo",
    program: "Data Science",
    period: "Jan 2025 - Present",
    institution: "ALX",
    description:
      "Currently pursuing a Data Science program where I am learning advanced data analysis, machine learning techniques, and data visualization using Python, R, and various statistical tools.",
    achievements: [
      "Developed a machine learning model that predicts housing prices with 85% accuracy.",
      "Completed a data visualization project showcasing trends in global temperature changes over the last century.",
      "Participated in Kaggle competitions, ranking in the top 20% in predictive modeling challenges.",
    ],
  },
  {
    logo: andelaLogo,
    logoAlt: "Andela Logo",
    program: "Andela React Program (Front-end Dev)",
    period: "July 2023 - Oct 2023",
    institution: "Andela",
    description:
      "Completed a 6-month intensive program focused on front-end web development using React. Gained hands-on experience building dynamic web applications, improving user experiences, and using modern web technologies.",
    achievements: [
      "Developed a fully functional e-commerce site as a capstone project, which included features like user authentication and payment integration.",
      "Improved application performance by optimizing React components and reducing load times by 40%.",
      "Collaborated with a team of developers to deliver a fully responsive application within a tight deadline.",
    ],
  },
  {
    logo: alxLogo,
    logoAlt: "ALX Logo",
    program: "Software Engineering (Back-end Dev)",
    period: "Aug 2022 - Oct 2023",
    institution: "ALX SE",
    description:
      "Completed a full-stack software engineering program with a focus on backend development, APIs, and database management. Gained proficiency in Python, Django, and RESTful API development.",
    achievements: [
      "Built a RESTful API to manage user data for a web application, supporting over 10,000 active users.",
      "Optimized database queries in PostgreSQL, reducing response time by 50%.",
      "Collaborated in a team of engineers to implement a scalable backend for a real-time messaging system.",
    ],
  },
  {
    logo: mksuLogo,
    logoAlt: "MKSU Logo",
    program: "Bachelor of Commerce (Finance Major)",
    period: "2014 - 2018",
    institution: "Machakos University",
    description:
      "Earned a Bachelor's degree in Commerce with a focus on Finance. Studied financial analysis, accounting, investment strategies, and business economics.",
    achievements: [
      "Graduated with honors, achieving a GPA of 3.7/4.0.",
      "Led a team project that developed a financial analysis tool, which was later adopted by the university's finance department.",
      "Interned with a local bank, gaining hands-on experience in financial modeling and data analysis.",
    ],
  },
];

const EducationCard = ({
  logo,
  logoAlt,
  program,
  period,
  institution,
  description,
  achievements,
  url,
  isLast,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex items-start gap-4 relative z-10">
      {/* Logo Section */}
      <div className="flex-none relative">
        {/* Logo Circle */}
        <div className="rounded-full border-4 border-white bg-white shadow-md">
          {logo ? (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
              <Image
                src={logo}
                alt={logoAlt}
                width={64}
                height={64}
                className="object-contain w-full h-full p-1"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">
                {institution.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex-1 border border-border/40 rounded-lg p-6 md:p-8 w-full hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
      >
        {/* Rest of your card content remains unchanged */}
        <div className="flex flex-col gap-4 pb-4">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h3 className="text-xl font-semibold group flex items-center">
                {institution}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex ml-2 text-primary/70 hover:text-primary transition-colors"
                    aria-label={`Visit ${institution} website`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </h3>
              <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium">
                {period}
              </span>
            </div>
            <p className="text-lg font-medium text-gray-700">{program}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">{description}</p>
          <button
            onClick={toggleExpand}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
            aria-expanded={isExpanded}
            aria-controls={`achievements-${institution
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            {isExpanded ? "Hide" : "Show"} achievements
            <ChevronDown
              size={16}
              className={clsx("transition-transform", {
                "rotate-180": isExpanded,
              })}
            />
          </button>
          <div
            id={`achievements-${institution
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            className={clsx(
              "overflow-hidden transition-all duration-300",
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <ul className="space-y-3 list-none pl-0 pt-2 text-gray-700">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="flex-shrink-0 h-2 w-2 mt-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Education & Training
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          My educational journey, where I developed a strong foundation in
          software development and data science, along with expertise in
          back-end and front-end technologies.
        </p>
      </div>

      {/* Container with a single continuous line */}
      <div className="relative flex flex-col gap-8 md:gap-8">
        {/* Continuous Vertical Line */}
        {/* <div className="absolute left-[52px] md:left-[calc(50%-8px)] w-0.5 bg-black h-full top-0 z-0" /> */}

        {EDUCATION_DATA.map((edu, index) => (
          <EducationCard
            key={index}
            {...edu}
            isLast={index === EDUCATION_DATA.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
