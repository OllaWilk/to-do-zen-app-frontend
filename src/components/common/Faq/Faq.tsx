import React from 'react';
import style from './Faq.module.scss';

const Faq = () => {
  return (
    <div className={style.faqComponent}>
      <section className={style.section}>
        <h2>About the Application</h2>
        <h3>Space Steps</h3>
        <p>
          Space Steps is a tool for managing events and habits that helps users
          better organize their time and goals.
        </p>
        <h3>Frontend</h3>
        <p>
          The frontend application is built using React and Redux, providing
          dynamic and responsive user interfaces. Styling is done with CSS3 and
          libraries like Styled Components.
        </p>
        <h3>Backend</h3>
        <p>
          The backend of the application is created with Node.js using Express
          to build the API. Data is stored in a MongoDB database, enabling
          scalability and fast data operations.
        </p>
        <h3>Czy możesz opisać projekt Space Steps i jego cel?</h3>
        <p>
          Space Steps to aplikacja do zarządzania wydarzeniami i nawykami, która
          pomaga użytkownikom lepiej organizować swój czas i cele. Aplikacja
          umożliwia dodawanie wydarzeń, śledzenie nawyków, wizualizację
          lokalizacji wydarzeń na interaktywnej mapie oraz zarządzanie listami
          to-do.
        </p>
        <h3>
          Jakie technologie i narzędzia zostały użyte do stworzenia Space Steps?
        </h3>
        <p>
          Do stworzenia Space Steps użyłem Node.js i Express na backendzie oraz
          React i Redux na frontendzie. Dane są przechowywane w bazie danych
          MongoDB. Stylowanie zostało wykonane za pomocą CSS3 i Styled
          Components.
        </p>
        <h3>Jakie funkcje oferuje aplikacja Space Steps?</h3>
        <h3>Jakie są Twoje doświadczenia z pracą w zespołach?</h3>
        <h3>Czy masz doświadczenie z tworzeniem API?</h3>
        <h3>Jakie narzędzia do kontroli wersji używasz?</h3>
        <h3>Czy możesz opisać swoje podejście do rozwiązywania problemów?</h3>
        <h3>Jakie są Twoje cele zawodowe na najbliższe lata?</h3>
      </section>
    </div>
  );
};

export { Faq };
