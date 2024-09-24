import React from 'react';
import { projects } from '../../../../i18n/index';
import styles from './MyPortfolio.module.scss';

const MyPortfolio = () => {
  return (
    <section className={styles.recruiterSection}>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <a
              href={project.liveLink ? project.liveLink : project.repoLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </a>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
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
