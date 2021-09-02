import 'react-sticky-header/styles.css';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import StickyHeader from 'react-sticky-header';

const HeroStyles = styled.div`
  .hero__social__text {
    margin-top: 20rem;
    ul {
      li {
        a {
          display: inline-block;
          font-size: 1.6rem;
        }
      }
    }
  }
  
  @media only screen and (max-width: 768px) {
    .hero {
      display: none;
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 20px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          list-style-type:none
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

function Socialb() {
  return (
      <StickyHeader
        header={
          <HeroStyles>
              <div className="hero">
              
                  <div className="hero__social__text">
                    <ul >
                      <li >
                        <SocialIcon
                          url="https://www.linkedin.com/in/shanmukhchowdary147/"
                          bgColor="#01152b"
                          fgColor="aquamarine"
                          target="_blank"
                          style={{ height: 50, width: 50 }}
                        />
                      </li>
                      <li>
                        <SocialIcon
                          url="https://github.com/shanmukhchowdary147"
                          bgColor="#01152b"
                          fgColor="aquamarine"
                          target="_blank"
                          style={{ height: 50, width: 50 }}
                        />
                      </li>
                      <li>
                        <SocialIcon
                          url="mailto:shanmukhchowdary147@gmail.com"
                          bgColor="#01152b"
                          fgColor="aquamarine"
                          target="_blank"
                          style={{ height: 50, width: 50 }}
                        />
                      </li>
                      <li>
                        <SocialIcon
                          url="https://www.instagram.com/___shannu.___/"
                          bgColor="#01152b"
                          fgColor="aquamarine"
                          target="_blank"
                          style={{ height: 50, width: 50 }}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              
          </HeroStyles>
        }
      /> 
      
  );
}

export default Socialb;
