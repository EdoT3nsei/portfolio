import React, { useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
    { logo: <SiAdobeillustrator className="h-12 w-12 text-[#687451]" />, name: "Adobe Illustrator" },
    { logo: <SiAdobeaftereffects className="h-12 w-12 text-[#687451]" />, name: "Adobe After Effects" },
    { logo: <SiAdobeindesign className="h-12 w-12 text-[#687451]" />, name: "Adobe InDesign" },
    { logo: <SiAdobelightroom className="h-12 w-12 text-[#687451]" />, name: "Adobe Lightroom" },
    { logo: <SiAdobephotoshop className="h-12 w-12 text-[#687451]" />, name: "Adobe Photoshop" },
    { logo: <SiAdobepremierepro className="h-12 w-12 text-[#687451]" />, name: "Adobe Premiere Pro" },
    { logo: <SiGithub className="h-12 w-12 text-[#687451]" />, name: "GitHub" },
    { logo: <SiJavascript className="h-12 w-12 text-[#687451]" />, name: "JavaScript" },
    { logo: <SiTypescript className="h-12 w-12 text-[#687451]" />, name: "TypeScript" },
    { logo: <SiHtml5 className="h-12 w-12 text-[#687451]" />, name: "HTML5" },
    { logo: <SiCss3 className="h-12 w-12 text-[#687451]" />, name: "CSS3" },
    { logo: <SiWordpress className="h-12 w-12 text-[#687451]" />, name: "WordPress" },
    // { logo: <SiNodedotjs className="h-12 w-12 text-[#687451]" />, name: "Node.js" },
    // { logo: <SiNpm className="h-12 w-12 text-[#687451]" />, name: "npm" },
    { logo: <SiFigma className="h-12 w-12 text-[#687451]" />, name: "Figma" },
    // { logo: <SiLaravel className="h-12 w-12 text-[#687451]" />, name: "Laravel" },
    { logo: <SiVuedotjs className="h-12 w-12 text-[#687451]" />, name: "Vue.js" },
    // { logo: <SiReact className="h-12 w-12 text-[#687451]" />, name: "React" },
    { logo: <SiTailwindcss className="h-12 w-12 text-[#687451]" />, name: "Tailwind CSS" },
    // { logo: <SiD3Dotjs className="h-12 w-12 text-[#687451]" />, name: "D3.js" },
    // { logo: <SiMailchimp className="h-12 w-12 text-[#687451]" />, name: "Mailchimp" },
    // { logo: <SiNetlify className="h-12 w-12 text-[#687451]" />, name: "Netlify" },
    // { logo: <SiPhp className="h-12 w-12 text-[#687451]" />, name: "PHP" },
    // { logo: <SiMysql className="h-12 w-12 text-[#687451]" />, name: "MySQL" },
    // { logo: <SiPostman className="h-12 w-12 text-[#687451]" />, name: "Postman" },
    // { logo: <SiMamp className="h-12 w-12 text-[#687451]" />, name: "MAMP" },
    { logo: <SiHugo className="h-12 w-12 text-[#687451]" />, name: "Hugo" },
    { logo: <SiSlack className="h-12 w-12 text-[#687451]" />, name: "Slack" },
    { logo: <SiMiro className="h-12 w-12 text-[#687451]" />, name: "Miro" },
    // { logo: <SiTrello className="h-12 w-12 text-[#687451]" />, name: "Trello" },
    { logo: <SiTableau className="h-12 w-12 text-[#687451]" />, name: "Tableau" },
    { logo: <SiMeta className="h-12 w-12 text-[#687451]" />, name: "Meta Business Suite" },

];

const Technologies: React.FC = () => {
    const itemsPerPage = 5;
    const pages = useMemo(() => {
      const result: typeof technologies[] = [];
      for (let i = 0; i < technologies.length; i += itemsPerPage) {
        result.push(technologies.slice(i, i + itemsPerPage));
      }
      return result;
    }, []);

    const totalPages = pages.length;
    const hasLoop = totalPages > 1;
    const [pageIndex, setPageIndex] = useState(hasLoop ? 1 : 0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const extendedPages = useMemo(() => {
      if (!hasLoop) return pages;
      return [pages[totalPages - 1], ...pages, pages[0]];
    }, [hasLoop, pages, totalPages]);

    const handlePrev = () => {
      if (!hasLoop) {
        setPageIndex((current) => Math.max(0, current - 1));
        return;
      }
      setIsTransitioning(true);
      setPageIndex((current) => current - 1);
    };

    const handleNext = () => {
      if (!hasLoop) {
        setPageIndex((current) => Math.min(totalPages - 1, current + 1));
        return;
      }
      setIsTransitioning(true);
      setPageIndex((current) => current + 1);
    };

    const handleTransitionEnd = () => {
      if (!hasLoop) return;
      if (pageIndex === 0) {
        setIsTransitioning(false);
        setPageIndex(totalPages);
        return;
      }
      if (pageIndex === totalPages + 1) {
        setIsTransitioning(false);
        setPageIndex(1);
        return;
      }
      setIsTransitioning(false);
    };

    return (
    <div className="mt-12 bg-gray-50 pt-20 px-4 sm:px-6 lg:px-60">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Technologies</h2>
        </div>
        <div className="mt-12 relative">
          <button
            type="button"
            onClick={handlePrev}
            className={`hidden md:flex items-center justify-center absolute left-0 top-1/3 -translate-y-1/2 -translate-x-6 h-10 w-10 rounded-full text-[#55603b] ${totalPages > 1 ? '' : 'opacity-0 pointer-events-none'}`}
            aria-label="Previous technologies"
          >
            <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning || !hasLoop ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${pageIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPages.map((page, pageOffset) => (
                <div
                  key={pageOffset}
                  className="min-w-full px-1"
                >
                  <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {page.map((tech, index) => (
                      <div
                        key={`${pageOffset}-${index}`}
                        className="relative group p-8 rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
                      >
                        {tech.logo}
                        <span className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#55603b]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={handleNext}
            className={`hidden md:flex items-center justify-center absolute right-0 top-1/3 -translate-y-1/2 translate-x-6 h-10 w-10 rounded-full text-[#55603b]  ${totalPages > 1 ? '' : 'opacity-0 pointer-events-none'}`}
            aria-label="Next technologies"
          >
            <FiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  };

export default Technologies;