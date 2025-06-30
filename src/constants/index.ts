import type { ExperienceCardType, TechCardType } from '../types';

const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

const animatedWords = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Satisfied Clients' },
  { value: 50, suffix: '+', label: 'Completed Projects' },
  { value: 90, suffix: '%', label: 'Client Retention Rate' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
];

const techStackIcons: TechCardType[] = [
  {
    name: 'React',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'TypeScript',
    modelPath: '/models/typeScript.glb',
    scale: 25,
    rotation: [0, 0, 0],
  },
  {
    name: 'SASS',
    modelPath: '/models/sass.glb',
    scale: 25,
    rotation: [0, 0, 0],
  },
  {
    name: 'Three.js',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Git',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards: ExperienceCardType[] = [
  {
    review:
      'Dmytro brought exceptional creativity and technical expertise to our team, optimizing our React/Next.js applications and building a custom Contentful extension that cut our billing costs by threefold. His work on event tracking integrations and custom Shopify UI plugins significantly improved our e-commerce performance and analytics capabilities.',
    imgPath: '/images/exp1.svg',
    logoPath: '/images/logo1.svg',
    title: 'Frontend Developer',
    date: 'January 2024 - Present',
    responsibilities: [
      'Developing and optimizing web applications using React.js, Next.js, TypeScript, and JavaScript.',
      'Implementing responsive and accessible UI.',
      'Writing and maintaining unit and integration tests with Jest, Cypress, and React Testing Library.',
      'Working with Shopify to integrate e-commerce functionality.',
      'Developing custom Shopify UI plugins to extend e-commerce functionality.',
      'Integrating Contentful CMS for dynamic content management.',
      'Developed a custom Contentful extension that reduced billing costs by 3x.',
      'Implement event tracking system, implement integrations with 3rd-party analytics tools.',
      'Building custom discount logic using Shopify Storefront API to enable flexible pricing rules.',
    ],
  },
  {
    review:
      'Working with Dmytro was a game-changer for the Abu Dhabi Festival website: he spearheaded performance optimizations that boosted Core Web Vitals and load speeds by 20%, and delivered pixel-perfect, fully responsive UIs across 30+ page layouts, resulting in a 30% lift in mobile retention. His collaborative approach and strict adherence to brand and accessibility standards ensured timely delivery of a high-quality product.',
    imgPath: '/images/exp2.png',
    logoPath: '/images/logo2.png',
    title: 'Frontend Developer',
    date: 'November 2024 - March 2025',
    responsibilities: [
      'Collaborated closely with designers and stakeholders to align on project goals, ensuring timely delivery and quality outcomes.',
      'Spearheaded performance optimization of the website, improving load speed and Core Web Vitals, which resulted in a 20% increase in overall site performance',
      'Built a fully responsive, pixel-perfect UI across 30+ unique page layouts, strictly adhering to brand guidelines and accessibility standards, contributing to a 30% increase in mobile retention time',
    ],
  },
  {
    review:
      'Dmytro consistently demonstrated ownership and technical insight across multiple web projects-from proof-of-concept to production-proactively identifying bottlenecks and ensuring smoother handoffs and stable releases. His clear communication with clients and stakeholders, combined with his problem-solving skills, made him a reliable partner in aligning technical solutions with business goals.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'Frontend Developer',
    date: 'November 2022 - October 2023',
    responsibilities: [
      'Contributed to multiple web projects across all phases of the development lifecycle — from proof-of-concept to production-ready applications.',
      'Actively engaged with clients and stakeholders to gather requirements, provide technical insight, and ensure successful project alignment with business goals.',
      'Demonstrated ownership by identifying and solving project bottlenecks, resulting in smoother handoffs and more stable releases.',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    url: 'https://www.instagram.com/',
    imgPath: '/images/insta.png',
  },
  {
    name: 'fb',
    url: 'https://www.facebook.com/',
    imgPath: '/images/fb.png',
  },
  {
    name: 'x',
    url: 'https://www.x.com/',
    imgPath: '/images/x.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/',
    imgPath: '/images/linkedin.png',
  },
];

export {
  animatedWords,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
