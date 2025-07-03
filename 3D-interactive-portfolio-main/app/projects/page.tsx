// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// // @ts-ignore
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css";

// const PROJECTS = [
//   {
//     id: 1,
//     name: "AI Dockerfile optimizer",
//     description: `AI-Docker-file-optimizer helps optimize Dockerfiles for smaller, more efficient images. 
//       Simply paste your Dockerfile, and the app analyzes it for best practices and size 
//       optimization tips. It then provides a refactored, optimized version of the Dockerfile.`,
//     link: "https://ai-docker-file-optimizer.netlify.app/",
//     images: [
//       "/assets/projects-screenshots/aidockerfileoptimizer/1.png",
//       "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
//       "/assets/projects-screenshots/aidockerfileoptimizer/3.png",
//     ],
//   },
//   {
//     id: 2,
//     name: "FinanceMe",
//     description: `DevOps pipeline for a global banking provider. Transitioned from monolith to microservices. Automated CI/CD, monitoring with AWS services.`,
//     link: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
//     images: [
//       "/assets/projects-screenshots/financeme/1.png",
//       "/assets/projects-screenshots/financeme/2.png",
//       "/assets/projects-screenshots/financeme/3.png",
//     ],
//   },
//   {
//     id: 3,
//     name: "Portfolio",
//     description: `My digital playground — crafted with code and creativity.`,
//     link: "https://www.abhijitzende.com/",
//     images: [
//       "/assets/projects-screenshots/myportfolio/landing.png",
//       "/assets/projects-screenshots/myportfolio/navbar.png",
//     ],
//   },
//   {
//     id: 4,
//     name: "Smart Parking Assistant",
//     description: `IoT system with Arduino + IR sensors to detect and recommend parking spots. Real-time updates and GUI with Python.`,
//     link: "https://github.com/Abhiz2411/smart-parking-assistant",
//     images: [
//       "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
//       "/assets/projects-screenshots/smartparkingassitant/03.jpeg",
//     ],
//   },
//   {
//     id: 5,
//     name: "Smart Parking Assistant",
//     description: `IoT system with Arduino + IR sensors to detect and recommend parking spots. Real-time updates and GUI with Python.`,
//     link: "https://github.com/Abhiz2411/smart-parking-assistant",
//     images: [
//       "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
//       "/assets/projects-screenshots/smartparkingassitant/03.jpeg",
//     ],
//   },
// ];

// function Page() {
//   return (
//     <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
//       <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
//       <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
//         {PROJECTS.map((project) => (
//           <li
//             key={project.id}
//             className="w-[300px] h-[440px] border-[.5px] rounded-md border-zinc-600 hover:border-blue-500 transition-all"
//             style={{ backdropFilter: "blur(2px)" }}
//           >
//             <Link
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="h-[200px]">
//                 <Splide
//                   options={{
//                     type: "loop",
//                     interval: 3000,
//                     autoplay: true,
//                     speed: 2000,
//                     perMove: 1,
//                     rewind: true,
//                     easing: "cubic-bezier(0.25, 1, 0.5, 1)",
//                     arrows: false,
//                   }}
//                   aria-label={`Screenshots of ${project.name}`}
//                 >
//                   {project.images.map((image) => (
//                     <SplideSlide key={image}>
//                       <Image
//                         src={image}
//                         alt={`Screenshot of ${project.name}`}
//                         className="w-[300px] h-[200px] rounded-md bg-zinc-900 object-cover"
//                         width={300}
//                         height={200}
//                       />
//                     </SplideSlide>
//                   ))}
//                 </Splide>
//               </div>
//               <div className="p-4 text-zinc-300">
//                 <h2 className="text-xl font-semibold">{project.name}</h2>
//                 <p className="mt-2 text-xs text-zinc-400 line-clamp-4">
//                   {project.description}
//                 </p>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Page;
