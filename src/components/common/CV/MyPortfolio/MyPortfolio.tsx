import React from 'react';
import { projects } from '../../../../i18n/index';
import { SectionHeader } from '../../SectionHeader/SectionHeader';
import styles from './MyPortfolio.module.scss';

const MyPortfolio = () => {
  return (
    <section className={styles.recruiterSection}>
      <SectionHeader
        text='Here are some of my projects that showcase my skills and experience. Feel free to explore the live versions and the code repositories. If you have any questions or would like to get in touch, feel free to send me an email <a href="mailto:alex.dev.wilk@gmail.com" > here.
      </a>
      '
      />

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.projectLink}
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.projectLink}
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { MyPortfolio };
