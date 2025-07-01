import { socialImgs } from '../constants';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <p className="cursor-default">Lytvynenko</p>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" key={img.name} href={img.url}>
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center cursor-default md:text-end">
            © {new Date().getFullYear()} Lytvynenko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
