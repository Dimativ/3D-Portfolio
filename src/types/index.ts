export type ExperienceCardType = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

export type Testimonial = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
};

export type TechCardType = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
  position?: number[];
};
