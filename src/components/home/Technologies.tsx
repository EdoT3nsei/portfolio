import React from 'react';
import { 
    SiAdobeillustrator,
    SiAdobeaftereffects,
    SiAdobeindesign,
    SiAdobelightroom,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiGithub,
    SiJavascript,
    SiTypescript,
    SiWordpress,
    SiNodedotjs,
    SiNpm,
    SiFigma,
    SiLaravel,
    SiVuedotjs,
    SiReact,
    SiTailwindcss,
    SiD3Dotjs,
    SiMailchimp,
    SiNetlify,
    SiPhp,
    SiMysql,
    SiPostman,
    SiMamp,
    SiHugo,
    SiCss3,
    SiHtml5,
    SiSlack,
    SiMiro,
    SiTrello,
    SiTableau,
    SiMeta,


} from "react-icons/si";
// Add more icons as needed

const technologies = [
    { logo: <SiAdobeillustrator className="h-12 w-12 text-red-700" />, name: "Adobe Illustrator" },
    { logo: <SiAdobeaftereffects className="h-12 w-12 text-red-700" />, name: "Adobe After Effects" },
    { logo: <SiAdobeindesign className="h-12 w-12 text-red-700" />, name: "Adobe InDesign" },
    { logo: <SiAdobelightroom className="h-12 w-12 text-red-700" />, name: "Adobe Lightroom" },
    { logo: <SiAdobephotoshop className="h-12 w-12 text-red-700" />, name: "Adobe Photoshop" },
    { logo: <SiAdobepremierepro className="h-12 w-12 text-red-700" />, name: "Adobe Premiere Pro" },
    { logo: <SiGithub className="h-12 w-12 text-red-700" />, name: "GitHub" },
    { logo: <SiJavascript className="h-12 w-12 text-red-700" />, name: "JavaScript" },
    { logo: <SiTypescript className="h-12 w-12 text-red-700" />, name: "TypeScript" },
    { logo: <SiHtml5 className="h-12 w-12 text-red-700" />, name: "HTML5" },
    { logo: <SiCss3 className="h-12 w-12 text-red-700" />, name: "CSS3" },
    { logo: <SiWordpress className="h-12 w-12 text-red-700" />, name: "WordPress" },
    { logo: <SiNodedotjs className="h-12 w-12 text-red-700" />, name: "Node.js" },
    { logo: <SiNpm className="h-12 w-12 text-red-700" />, name: "npm" },
    { logo: <SiFigma className="h-12 w-12 text-red-700" />, name: "Figma" },
    { logo: <SiLaravel className="h-12 w-12 text-red-700" />, name: "Laravel" },
    { logo: <SiVuedotjs className="h-12 w-12 text-red-700" />, name: "Vue.js" },
    { logo: <SiReact className="h-12 w-12 text-red-700" />, name: "React" },
    { logo: <SiTailwindcss className="h-12 w-12 text-red-700" />, name: "Tailwind CSS" },
    { logo: <SiD3Dotjs className="h-12 w-12 text-red-700" />, name: "D3.js" },
    { logo: <SiMailchimp className="h-12 w-12 text-red-700" />, name: "Mailchimp" },
    { logo: <SiNetlify className="h-12 w-12 text-red-700" />, name: "Netlify" },
    { logo: <SiPhp className="h-12 w-12 text-red-700" />, name: "PHP" },
    { logo: <SiMysql className="h-12 w-12 text-red-700" />, name: "MySQL" },
    { logo: <SiPostman className="h-12 w-12 text-red-700" />, name: "Postman" },
    { logo: <SiMamp className="h-12 w-12 text-red-700" />, name: "MAMP" },
    { logo: <SiHugo className="h-12 w-12 text-red-700" />, name: "Hugo" },
    { logo: <SiSlack className="h-12 w-12 text-red-700" />, name: "Slack" },
    { logo: <SiMiro className="h-12 w-12 text-red-700" />, name: "Miro" },
    { logo: <SiTrello className="h-12 w-12 text-red-700" />, name: "Trello" },
    { logo: <SiTableau className="h-12 w-12 text-red-700" />, name: "Tableau" },
    { logo: <SiMeta className="h-12 w-12 text-red-700" />, name: "Meta Business Suite" },

];

const Technologies: React.FC = () => {
    return (
    <div className="mt-12 bg-gray-50 pt-20 px-4 sm:px-6 lg:px-60">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Technologies</h2>
          <p className="mt-4 text-xl text-gray-600">Tools and technologies I use</p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech, index) => (
            <div key={index} className="relative group bg-gray-50 p-8 rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              {tech.logo}
              <span className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-800">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Technologies;