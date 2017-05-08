import * as React from 'react';

interface IPanelProps {
  title: string;
  github: string;
  link: string;
  description: string;
  images: string[];
  tech: JSX.Element[];
  textLeft?: boolean;
}

const githubIcon = 'https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/GitHub-Mark-64px_y3e5ic.png';

const Panel = ({ title, github, link, description, tech, images, textLeft }: IPanelProps) => {
  return (
    <div className="portfolio__panel" >
      <div className="portfolio__title">
        <div><h2>{title}</h2></div>
        <a href={github} >
          <img height="30px" src={githubIcon} alt="github" />
        </a>
      </div>
      <div
        className="portfolio__content"
        style={{ flexDirection: textLeft ? 'row' : 'row-reverse' }}
      >
        <div className="portfolio__panel-text">
          <div className="portfolio__description">
            {description}
          </div>
          <div >
            <h5>Technologies Used:</h5>
            <div className="portfolio__technologies">
            {tech.map((t, i) => <div key={i} className="portfolio__tech">{t}</div>)}
            </div>
          </div>
        </div>
        <div className="portfolio__panel-img">
          {images.length > 0 ? <img src={images[0]} /> : undefined}
        </div>
      </div>
    </div>
  );
};

export default Panel;