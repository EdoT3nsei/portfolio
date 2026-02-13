import { Project } from '../types/project';
//covers
import cover1 from '../assets/images/map_1.jpg';
import cover2 from '../assets/images/badge_kolding_24.png';
import cover3 from '../assets/images/terravaud_1.png';
import cover4 from '../assets/images/empire_cover.png';
import cover5 from '../assets/images/baleinev_2.png';
import cover6 from '../assets/images/beer_cover.png';
import cover7 from '../assets/images/firewatch.jpg';
import cover8 from '../assets/images/sed_cover.png';
import cover9 from '../assets/images/coachlab_cover.jpg';

import thumbnail1 from '../assets/images/map_1-thumb.webp';
import thumbnail2 from '../assets/images/badge_kolding_24-thumb.webp';
import thumbnail3 from '../assets/images/terravaud_1-thumb.webp';
import thumbnail4 from '../assets/images/empire_cover-thumb.webp';
import thumbnail5 from '../assets/images/baleinev_2-thumb.webp';
import thumbnail6 from '../assets/images/beer_cover-thumb.webp';

//1
import photoTerravaud1 from '../assets/images/terravaud_2.png';
import videoTerravaud from '../assets/videos/video_terravaud.mp4';

//2
import photoMap2 from '../assets/images/map_2.jpg';
import photoMap3 from '../assets/images/map_3.jpg'; 

//4
import photoEmpire1 from '../assets/images/empire_home.jpg';
import photoEmpire2 from '../assets/images/empire_ship.jpg';

//5 
import videoBaleinev from '../assets/videos/video_baleinev.mp4';
import photoBaleinev1 from '../assets/images/baleinev_1.png';
import photoBaleinev3 from '../assets/images/baleinev_3.png';
import photoBaleinev4 from '../assets/images/baleinev_4.png';

//6
import photoBeer1 from '../assets/images/beer_bottles.png';

//7
import videoFirewatch from '../assets/videos/Intro_edo.mp4';
import behindthesceneFirewatch from '../assets/videos/plans_after_effects.mp4';

//8
import sed1 from '../assets/images/sed_1.png';
import sed2 from '../assets/images/sed_2.png';
import sed3 from '../assets/images/sed_3.png';
import sed4 from '../assets/images/sed_4.png';
import sed5 from '../assets/images/sed_5.png';

//9
import coachlab1 from '../assets/images/coachlab_1.jpeg';
import coachlab2 from '../assets/images/coachlab_2.jpeg';
import coachlab3 from '../assets/images/coachlab_3.png';
import coachlab4 from '../assets/images/coachlab_4.jpeg';

export const projects: Project[] = [
    {
    id: 8,
    title: "Redesign of the SED's educational quizzes ",
    category: "UX/UI design",
    image: cover8,
    thumbnail: cover8,
    description: "Redesign of the SED's educational quizzes for a teenage audience as part of by Bachelor Thesis.",
    fullDescription: "I had the opportunity to work with the Swiss Seismological Service (SED) as part of my Bachelor Thesis. The goal of the project was to rethink the actual quizzes present on the SED's website to make them more engaging for a teenage audience. I conducted user research, created wireframes and prototypes, and tested the new design with users to ensure it met their needs and expectations.",
    client: "Swiss Seismological Service",
    clientUrl: "https://www.seismo.ethz.ch/",
    date: "2025",
    tools: ["Figma", "Adobe Illustrator"],
    gallery: [
      sed2, sed3, sed4, sed5
    ]    
  },
    {
    id: 9,
    title: "CoachLab",
    category: "Communication campaign",
    image: cover9,
    thumbnail: cover9,
    description: "Communication campaign for the UEFA Women's Euro 2025.",
    fullDescription: "As part of a school project, we where mandated by Amzaon and the UEFA to create something to promote female coaches in football. We created a communication campaign called CoachLab, which notably included a companion webapp.",
    client: "School Project - HEIG-VD / Amazon / UEFA Women's Euro 2025",
    clientUrl: "https://pi25.heig-vd.ch/en",
    date: "2025",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "VueJS", "TailwindCSS"],
    gallery: [
      coachlab1, coachlab2, coachlab3, coachlab4
    ],
    collaborators: [
      { name: "Maxime Peretti", website: "https://www.linkedin.com/in/maxime-peretti/" },
      { name: "Léo Winterhalter", website: "https://www.linkedin.com/in/leo-winterhalter/" },
      { name: "Nicolas Aerny", website: "https://nicolasaerny.ch/" },
      { name: "Clément Künzi", website: "https://clement-kunzi.ch/" },
      { name: "Leo Emeri", website: "https://www.linkedin.com/in/leo-emeri/" },
      { name: "Loïc Monnerat", website: "https://www.linkedin.com/in/loic-monnerat/" },
      { name: "Tristan Montanari", website: "https://www.linkedin.com/in/tristan-montanari/" }
    ]       
  },
  {
    id: 1,
    title: "TerraVaud",
    category: "Web Application",
    image: cover3,
    thumbnail: thumbnail3,
    description: "User interface design for a lifestyle mobile application.",
    fullDescription: "A modern mobile app UI design for a lifestyle and wellness platform. The project focused on creating an intuitive user experience with clean interfaces and engaging micro-interactions.",
    client: "School Project - HEIG-VD",
    clientUrl: "https://heig-vd.ch/",
    date: "2024",
    tools: ["Figma", "Adobe Premiere Pro", "Adobe Illustrator", "Adobe InDesign", "VueJS", "Laravel"],
    gallery: [
      videoTerravaud, photoTerravaud1, cover3
    ],
    collaborators: [
      { name: "Maxime Peretti", website: "https://www.linkedin.com/in/maxime-peretti/" },
      { name: "Léo Winterhalter", website: "https://www.linkedin.com/in/leo-winterhalter/" },
      { name: "Nicolas Aerny", website: "https://nicolasaerny.ch/" },
      { name: "Clément Künzi", website: "https://clement-kunzi.ch/" }
    ]    
        
  },
  {
    id: 5,
    title: "Baleinev Festival Communication",
    category: "Graphic Design and Motion Design",
    image: cover5,
    thumbnail: thumbnail5,
    description: "Work carried out as part of the competition launched by the Baleinev festival for their digital communication.",
    fullDescription: "Work carried out as part of the competition launched by the Baleinev festival for their digital communication.",
    client: "Baleinev Festival",
    clientUrl: "https://baleinev.ch/",
    date: "2024",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects"],
    gallery: [
      videoBaleinev,
      photoBaleinev1,
      cover5,
      photoBaleinev3,
      photoBaleinev4,
    ],
    collaborators: [
      { name: "Léa Macaluso", website: "https://www.linkedin.com/in/lea-macaluso/" },
      { name: "Morgane Devals", website: "https://www.linkedin.com/in/morgane-devals-5730ba26a/" },
      { name: "Alexandre Hungerbühler", website: "https://www.linkedin.com/in/alexandre-hungerb%C3%BChler-56642915b/" },
      { name: "Zoé Maître", website: "https://www.linkedin.com/in/zoe-maitre/" }
    ] 
  },  
  {
    id: 4,
    title: "Imperial Annual Report",
    category: "Web site",
    image: cover4,
    thumbnail: thumbnail4,
    description: "Fun website based on the Star Wars universe.",
    fullDescription: "With Nicolas and Leo, we created a website for the Empire in the Star Wars universe. The website is a fun way to present the Empire's annual report with data visualizations and animations.",
    client: "School Project - HEIG-VD",
    clientUrl: "https://heig-vd.ch/",
    date: "2024",
    tools: ["Figma", "JavaScript", "D3Js"],
    gallery: [
      photoEmpire1,
      photoEmpire2,
      cover4
    ],
    collaborators: [
      { name: "Nicolas Aerny", website: "https://nicolasaerny.ch/" },
      { name: "Leo Emeri", website: "https://www.linkedin.com/in/leo-emeri/" }
    ] 
  },
  {
    id: 2,
    title: "Map illustrations",
    category: "Illustration",
    image: cover1,
    thumbnail: thumbnail1,
    description: "Maps that I've created for various personal projects.",
    fullDescription: "I'v always been fascinated by maps and the stories they tell. Here are a few examples of maps that I've created for personal projects.",
    client: "Private project",
    date: "From 2019",
    tools: ["Traditional drawing material", "Adobe Photoshop"],
    gallery: [
      cover1,
      photoMap2,
      photoMap3
    ]
  },
  {
    id: 7,
    title: "Intro Animation",
    category: "Motion Design",
    image: cover7,
    thumbnail: cover7,
    description: "Motion design for a video intro.",
    fullDescription: "Motion design based on the video game Firewatch for a video intro. I used the parallax effect to create a sense of depth and movement in the animation.",
    client: "Private project",
    date: "2021",
    tools: ["Adobe Photoshop", "Adobe After Effects", "Adobe Premiere Pro"],
    gallery: [
      videoFirewatch,
      behindthesceneFirewatch,
    ]    
  },

  // {
  //   id: 3,
  //   title: "Kolding 2024 scouting Badge",
  //   category: "Graphic Design",
  //   image: cover2,
  //   thumbnail: thumbnail2,
  //   description: "A badge designed for a scout camp in Kolding, Denmark.",
  //   fullDescription: "A complete website redesign focusing on user experience and modern design principles. The project involved creating a responsive layout, implementing smooth animations, and ensuring optimal performance across all devices.",
  //   client: "Groupe Scout les Troubadours",
  //   date: "2024",
  //   tools: ["Traditional drawing material", "Adobe Illustrator"],
  //   gallery: [
  //     cover2
  //   ]
  // },
  {
    id: 6,
    title: "Agence Brassicole",
    category: "Graphic Design",
    image: cover6,
    thumbnail: thumbnail6,
    description: "A fake brassery graphic identity that I'v created for my CFC final project.",
    fullDescription: "As part of my CFC final project, I created a graphic identity for a fake brassery. The project included creating a logo and beer labels based on geological typology.",
    client: "School Project - CPNE",
    clientUrl: "https://www.cpne.ch/",
    date: "2021",
    tools: ["Traditional drawing material", "Adobe Illustrator", "Adobe Photoshop"],
    gallery: [
      cover6,
      photoBeer1
    ]
  },
  
];