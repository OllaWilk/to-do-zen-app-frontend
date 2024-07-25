import React from 'react';
import {
  SiJavascript,
  SiExpress,
  SiMysql,
  SiRedux,
  SiTypescript,
  SiSass,
  SiHandlebarsdotjs,
  SiMongodb,
  SiJest,
  SiBlender,
  SiAdobephotoshop,
} from 'react-icons/si';
import { FaHtml5, FaNodeJs, FaGithub, FaReact } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { educationData, workExpData } from '../../../data/index';
import { aleksandraWilk } from '../../../images/index';
import { CvList } from '../../layout/index';
import {
  Contact,
  Faq,
  Paragraph,
  SectionHeader,
  Technologies,
  SectionCart,
} from '../../common';
import styles from './About.module.scss';

const About = () => {
  const skills = {
    proficient: [
      { icon: <SiJavascript />, name: 'JavaScript (ES6+)' },
      { icon: <SiTypescript />, name: 'Typescript' },
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <SiSass />, name: 'CSS3, Scss' },
    ],
    frontend: [
      { icon: <FaReact />, name: 'React.js' },
      { icon: <SiRedux />, name: 'Redux' },
    ],
    backend: [
      { icon: <FaNodeJs />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express.js' },
      { icon: <SiHandlebarsdotjs />, name: 'Handlebars' },
    ],
    databases: [
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <SiMongodb />, name: 'MongoDB' },
    ],
    'Skilled in': [
      { icon: <FaGithub />, name: 'git' },
      { icon: <SiJest />, name: 'unit testing principles with Jest' },
      { icon: <GoDotFill />, name: 'RESTful APIs' },
    ],
    'Familiar with': [
      { icon: <SiAdobephotoshop />, name: 'Photoshop' },
      { icon: <SiBlender />, name: 'Blender' },
    ],
  };

  return (
    <>
      <div className={styles.cv}>
        <div className={styles.header}>
          <img src={aleksandraWilk} alt='Alex Wilk' />
          <div className={styles.name}>
            <SectionHeader text='Aleksandra Wilk' />
            <p>fullstack Javascript Developer</p>
          </div>
        </div>
        <article className={styles.info}>
          <div className={styles.leftSide}>
            {/* Loop through each skill category and display it */}
            {Object.entries(skills).map(([key, value]) => (
              <div key={key + value} className={styles.skilWrap}>
                <p className={styles.text}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </p>
                <Technologies technologies={value} />
              </div>
            ))}
            <div className={styles.language}>
              <p className={styles.text}>Languages:</p>
              <p>Polish - Native</p>
              <p>English - B2</p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <Contact />
            <Paragraph
              text={
                'I am a landscape architect and an artist by education, with a growing passion for programming. Over the past two years, I have immersed myself in JavaScript, completing both a web developer course at Kodilla and a backend developer course at MegaK. I have also gained hands-on experience as a freelancer, designing and implementing websites, which enhances my practical skills. Regular participation in meet.js meetings allows me to exchange knowledge and insights with fellow programmers, fostering a vibrant learning environment.'
              }
            />
            <Paragraph
              text={
                'In my free time, I am learning NEXT.js, aiming to specialize further in this area. Besides programming, I am completing the Crown of Polish Mountains challenge and hiking in the mountains.'
              }
            />
            <div>
              <h3>Education</h3>
              <CvList entries={educationData} />
            </div>
            <div>
              <h3>Work Experience</h3>
              <CvList entries={workExpData} />
            </div>
            <p className={styles.rodo}>
              Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w
              mojej aplikacji dla potrzeb niezbędnych do realizacji procesu
              rekrutacji (zgodnie z Rozporządzeniem Parlamentu Europejskiego i
              Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
              osób fizycznych w związku z przetwarzaniem danych osobowych i w
              sprawie swobodnego przepływu takich danych oraz uchylenia
              dyrektywy 95/46/WE (RODO)).
            </p>
          </div>
        </article>
      </div>

      <SectionCart>
        <Faq />
      </SectionCart>
    </>
  );
};

export { About };
