import React, { Fragment } from 'react';

import styles from './About.module.scss';
import vectorImg from '../../images/about/mellons.png';

function About() {
  return (
    <Fragment>
      <section className={styles['About']}>
        <div className={styles['About__content']}>
          <h1 className={styles['About__heading']}>
            About Us
          </h1>
          <h2 className={styles['About__subheading']}>
            We've got our Eye into AI
          </h2>
          <p className={styles['About__details']}>
            We are a research group at Carnegie Mellon University
            who want to help people learn about Explainable AI.
            Our team is part of the Data Interaction Group in the
            Human-Computer Interaction Institute,
            led by&nbsp;
            <a className={styles['About__link']} href="http://perer.org/" target="_blank" rel="noopener noreferrer">
              <b>Dr. Adam Perer</b>
            </a>.
          </p>
          <a className={styles['About__btn']} href="https://dig.cmu.edu/" target="_blank" rel="noopener noreferrer">
            Visit the Data Interaction Group
          </a>
        </div>
        <img className={styles['About__img']} src={vectorImg} alt="About Illustration" />
      </section>
      <section className={styles['About__bg']}>
      <p className={styles['About__details']}>
            This project was inspired by when <a className={styles['About__link']} href="https://distill.pub/2017/feature-visualization/" target="_blank" rel="noopener noreferrer">
              feature visualizations
            </a> were proposed as a technique to make neural networks interpretable to humans.  
            These techniques often yield intuitive and occasionally beautiful visual representations that provide clues how the neural network may be behaving.  But we wanted to know how useful these clues are, so we started designing a game to help us collect data about how people interpret these visualizations.  <i>Eye Into AI</i> uses the <a className={styles['About__link']} href="https://github.com/tensorflow/lucid" target="_blank" rel="noopener noreferrer">
              Lucid library
            </a> to generate the feature visualizations from the  <a className={styles['About__link']} href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43022.pdf" target="_blank" rel="noopener noreferrer">
            GoogLeNet (InceptionV1) </a> deep neural network.  You can browse some layers of GoogLeNet in this <a className={styles['About__link']} href="https://distill.pub/2017/feature-visualization/appendix/" target="_blank" rel="noopener noreferrer">
            appendix </a>. 
            <p></p>
            Our first game prototype was designed by Ja Young Lee and Qian Wang, MHCI students at CMU, working on an independent study with Dr. Adam Perer.  Dr. Jessica Hammer, an award-winning game designer and professor in the OH! Lab helped us iterate on a variety of game designs.  Shivang Gupta also provided his machine learning expertise.
            After Young, Qian, and Shiv graduated, Laura Beth Fulton helped lead the team as a product manager as well as an HCI expert.  Zhendong (Mike) Yuan implemented the backend to scale beyond a prototype, while Kazi Jawad re-wrote the frontend and added many important game enhancements unearthed from playtesting.  Jiachen (Lilian) Gong is leading data analysis of the game logs.  Justine Cho helped us expand the game with more categories and explanations.
            Special thanks to Niki Kittur and Zack Lipton for some initial conversations about experiments with feature visualizations.
            
      </p>
      </section>
      <section className={styles['About__bg']}>
        <h1 className={styles['About__heading']}>
          Our Team
        </h1>
        <p className={styles['About__caption']}>
          Meet Current Contributors:
        </p>
        <section className={styles['About__team']}>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C5603AQEYAWmbvNRNvw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=YhONd7iOgTSudP2sPMZSK6i8ETJ5F9EKbppYKtjuKiQ"
              alt="Kazi Jawad"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Kazi Jawad</p>
            <p className={styles['About__extra']}>
              Front-End Development
              <br />
              B.S. Statistics and Machine Learning
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/kazijawad/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="mailto:kazijawad@cmu.edu">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://github.com/kazijawad" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHIZ3IFjush4A/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=NUB6h2K5OQKKZOL6hs5AQrBSm5zkerH_rrIIiUTtfiQ"
              alt="Laura Beth Fulton"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Laura Beth Fulton</p>
            <p className={styles['About__extra']}>
              PM + UX Research
              <br />
              M.S. Human-Computer Interaction
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/laurabethfulton/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="mailto:lfulton@andrew.cmu.edu">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://github.com/laurafulton" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQH3IzwNpmIKQw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=KSOhjVheBNRij8xNugmaDLmiX9LDLyrDwRwCVPudd7k"
              alt="Jiachen (Lilian) Gong"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Jiachen (Lilian) Gong</p>
            <p className={styles['About__extra']}>
              Data Analyst
              <br />
              M.S. Educational Technology (METALS)
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/jiachengong/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="mailto:jgong3@andrew.cmu.edu">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C5603AQFyAl138zTQ-g/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=_48vGSvVJ7p3ecbgPWUF34nR8XlgEk3o8fsFRucmbxM"
              alt="Justine Cho"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Justine Cho</p>
            <p className={styles['About__extra']}>
              Machine Learning
              <br />
              B.S. Computer Science with HCI Focus
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/justine-cho-1698a694/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="mailto:justinec@andrew.cmu.edu">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://github.com/jcho17" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <p className={styles['About__caption']}>
          Meet Faculty:
        </p>
        <section className={styles['About__team']}>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C5603AQHD5tgwVDhURw/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=1VC1CzbOyOtF1Ar1ycJLw8RDnCsCrfjJylmpIY9zPjY"
              alt="Adam Perer"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Adam Perer</p>
            <p className={styles['About__extra']}>
              Assistant Research Professor
              <br />
              Human-Computer Interaction Institute
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="http://www.perer.org" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="home"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEVprb2XZZCIA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=EDjoPESXcp9S6mNjAx80BKsHFvs85TXw-Is5bpqznlM"
              alt="Jessica Hammer"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Jessica Hammer</p>
            <p className={styles['About__extra']}>
              Assistant Professor
              <br />
              Human-Computer Interaction Institute and Entertainment Technology Center
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="http://replayable.net" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="home"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <p className={styles['About__caption']}>
          Meet Past Contributors:
        </p>
        <section className={styles['About__team']}>
        <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHEPE2DnmRtCw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=0CQjmybr09V1skvQ5UALtT_et41UAJt_D-hF_Lk5RIY"
              alt="Ja Young Lee"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Ja Young Lee</p>
            <p className={styles['About__extra']}>
              UX Design, Game Design and Front-End Development
              <br />
              M.S. Human-Computer Interaction
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/jyounglee/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://github.com/jayolee" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHUTGYACE93_A/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=nouThx5_V6N7if6YFBizlzNavZaoLG4qBhvBNfEwG5Y"
              alt="Qian Wang"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Qian Wang</p>
            <p className={styles['About__extra']}>
              UX Design and Game Design
              <br />
              M.S. Human-Computer Interaction
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/qian-wang-11513314a/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://github.com/WangQianEve" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFHfk9hepwyIg/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=fmywUv3jNihqNIiuQgHrcW9RV7EL3rb-5RWv9O36lJA"
              alt="Zhendong (Mike) Yuan"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Zhendong (Mike) Yuan</p>
            <p className={styles['About__extra']}>
              Full-Stack Engineering
              <br />
              B.S. Computer Science
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/zhendong-yuan/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="mailto:zhendony@andrew.cmu.edu">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://github.com/yzd1998111" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['About__card']}>
            <img
              className={styles['About__icon']}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEnxoKDJdpeMg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=o_TOZ2ZxOJ072ckJjZRdfYpuO7JBqVvuQL4t7PHXI5o"
              alt="Shivang Gupta"
              height="100"
              width="100"
            />
            <p className={styles['About__name']}>Shivang Gupta</p>
            <p className={styles['About__extra']}>
              AI Developer
              <br />
              M.S. Educational Technology (METALS)
            </p>
            <ul className={styles['About__list']}>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://www.linkedin.com/in/shivanggupta7/" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li className={styles['About__item']}>
                <a className={styles['About__social']} href="https://github.com/shivanggupta" target="_blank" rel="noopener noreferrer">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles['About__bg']}>
      <p className={styles['About__details']}>
        Our landing page uses some modified emojis originally designed by <a href="https://openmoji.org"> OpenMoji </a> – the open-source emoji and icon project. License: CC BY-SA 4.0
      </p>
      </section>
        <footer className={styles['About__footer']}>
          Designed and developed at Carnegie Mellon University, © 2020
        </footer>
      </section>
    </Fragment>
  );
}

export default About;
