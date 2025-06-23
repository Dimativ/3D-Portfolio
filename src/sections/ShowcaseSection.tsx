import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((project, i) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (i + 1),
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100',
          },
        },
      );
    });
  }, []);

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Laviecal" className="object-cover" />
            </div>
            <div className="text-content">
              <h2>D2C Platform for German Healthcare Company</h2>
              <p className="text-white-50 md:text-xl">
                The client, a major player in the pharmaceutical industry, launched a new business
                division focused on Direct-to-Consumer (D2C) channels.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="And us" className="object-contain" />
              </div>
              <h2>Custom website for the leading creative agency</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Truffle" className="object-contain" />
              </div>
              <h2>Website for Film Production House</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
