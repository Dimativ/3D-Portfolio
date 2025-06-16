import type { ClassAttributes, FC } from 'react';

interface ButtonProps extends ClassAttributes<HTMLButtonElement> {
  className?: string;
  text?: string | null;
  id?: string | null;
}

export const Button: FC<ButtonProps> = ({ className, text, id, ...props }) => {
  return (
    <a
      className={`${className ?? ''} cta-wrapper`}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter');

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: 'smooth' });
        }
      }}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow-down"></img>
        </div>
      </div>
    </a>
  );
};
