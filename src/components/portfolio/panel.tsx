import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as Slider from 'react-slick';

interface IPanelProps {
  title: string;
  github: string;
  link: string;
  description: string;
  images: string[];
  tech: JSX.Element[];
  textLeft?: boolean;
}

interface IPanelState {
  imgIndex: number;
}

const githubIcon = 'https://res.cloudinary.com/dvr87tqip/image/upload/v1490075088/GitHub-Mark-64px_y3e5ic.png';

class Panel extends React.Component<IPanelProps, IPanelState> {

  constructor(props: IPanelProps) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
  }

  public render(): JSX.Element {
    const { title, github, link, description, tech, images, textLeft } = this.props;
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
            <div className="portfolio__panel-slider">
              <img src={images[this.state.imgIndex]} alt="panel image" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private componentDidMount(): void {
    const node = findDOMNode(this);
    const container = node.querySelector('.portfolio__panel-img');
    const width = container.clientWidth;

    const { images } = this.props;
    const maxLength = images.length - 1;
    setInterval(() => {
      const { imgIndex } = this.state;
      if (maxLength === 0) {
        return;
      } else if (imgIndex === maxLength) {
        this.setState({ imgIndex: 0 });
        // container.scrollLeft = imgIndex * width;
      } else {
        this.setState({ imgIndex: imgIndex + 1 });
        // container.scrollLeft = imgIndex * width;
      }
    }, 6000);
  }

};

export default Panel;
