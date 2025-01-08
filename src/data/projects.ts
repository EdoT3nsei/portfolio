import { Project } from '../types/project';
//covers
import cover1 from '../assets/images/map_1.jpg';
import cover2 from '../assets/images/badge_kolding_24.png';
import cover3 from '../assets/images/terravaud_1.png';
import cover4 from '../assets/images/empire_cover.png';
import cover5 from '../assets/images/baleinev_2.png';
import cover6 from '../assets/images/beer_cover.png';

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

export const projects: Project[] = [
  {
    id: 1,
    title: "TerraVaud",
    category: "Web Application",
    image: cover3,
    description: "User interface design for a lifestyle mobile application.",
    fullDescription: "A modern mobile app UI design for a lifestyle and wellness platform. The project focused on creating an intuitive user experience with clean interfaces and engaging micro-interactions.",
    client: "School Project - HEIG-VD",
    date: "2024",
    tools: ["Figma", "Adobe Premiere Pro", "Adobe Illustrator", "Adobe InDesign", "VueJS", "Laravel"],
    gallery: [
      videoTerravaud,
      photoTerravaud1,
      cover3
    ],
    collaborators: [
      { name: "Maxime Peretti", website: "https://bento.me/maxime-peretti" },
      { name: "Léo Winterhalter", website: "https://www.linkedin.com/in/leo-winterhalter/" },
      { name: "Nicolas Aerny", website: "https://www.linkedin.com/in/nicolasaerny/" },
      { name: "Clément Künzi", website: "https://clement-kunzi.ch/" }
    ]    
        
  },
  {
    id: 5,
    title: "Baleinev Festival Communication",
    category: "Graphic Design and Motion Design",
    image: cover5,
    description: "Work carried out as part of the competition launched by the Baleinev festival for their digital communication.",
    fullDescription: "With Nicolas and Leo, we created a website for the Empire in the Star Wars universe. The website is a fun way to present the Empire's annual report with data visualizations and animations.",
    client: "Baleinev Festival",
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
    description: "Fun website based on the Star Wars universe.",
    fullDescription: "With Nicolas and Leo, we created a website for the Empire in the Star Wars universe. The website is a fun way to present the Empire's annual report with data visualizations and animations.",
    client: "School Project - HEIG-VD",
    date: "2024",
    tools: ["Figma", "JavaScript", "D3Js"],
    gallery: [
      photoEmpire1,
      photoEmpire2,
      cover4
    ],
    collaborators: [
      { name: "Nicolas Aerny", website: "https://www.linkedin.com/in/nicolasaerny/" },
      { name: "Leo Emeri", website: "https://www.linkedin.com/in/leo-emeri/" }
    ] 
  },
  {
    id: 2,
    title: "Map illustrations",
    category: "Illustration",
    image: cover1,
    description: "Maps that I've created for various personal projects.",
    fullDescription: "I'v always been fascinated by maps and the stories they tell. Here are a few examples of maps that I've created for personal projects.",
    client: "Private project",
    date: "2019-2022",
    tools: ["Traditional drawing material", "Adobe Photoshop"],
    gallery: [
      cover1,
      photoMap2,
      photoMap3
    ]
  },
  {
    id: 3,
    title: "Kolding 2024 scouting Badge",
    category: "Graphic Design",
    image: cover2,
    description: "A badge designed for a scout camp in Kolding, Denmark.",
    fullDescription: "A complete website redesign focusing on user experience and modern design principles. The project involved creating a responsive layout, implementing smooth animations, and ensuring optimal performance across all devices.",
    client: "Groupe Scout les Troubadours",
    date: "2024",
    tools: ["Traditional drawing material", "Adobe Illustrator"],
    gallery: [
      cover2
    ]
  },
  {
    id: 6,
    title: "Agence Brassicole",
    category: "Graphic Design",
    image: cover6,
    description: "A fake brassery graphic identity that I'v created for my CFC final project.",
    fullDescription: "As part of my CFC final project, I created a graphic identity for a fake brassery. The project included creating a logo and beer labels based on geological typology.",
    client: "School Project - CPNE",
    date: "2021",
    tools: ["Traditional drawing material", "Adobe Illustrator", "Adobe Photoshop"],
    gallery: [
      cover6,
      photoBeer1
    ]
  },
  
];