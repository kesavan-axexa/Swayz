import React from 'react';
import BusinessProfile from '../../components/home/BusinessProfile';
import CleaningHomePage from '../../components/home/CleaningHomePage';
import LeanoHomePage from '../../components/home/LeanoHomePage';
import Main2 from '../../components/home/Main2';
import Main1 from '../../components/home/Main1';
import Accordion from '../../components/home/Accordian';
import ScrollSections from '../../components/home/HorizontalScroll';
// import StickySections from '../../components/home/StickySections';
import LeanoHomePage2 from '../../components/home/LeanoHomePage2';
import Construction from '../../components/home/Construction';
import NotFoundPage from '../../components/home/BusinessProfile';
// import CardOverlap from '../../components/home/CardOverlap';

const Home = () => {
  return (
    <div > {/* Adds padding around the entire section */}
      <section style={{ marginBottom: '50px' }}> {/* Section with spacing */}
        <Main2/>
      </section>    

      <section style={{ marginBottom: '50px' }}>
        <CleaningHomePage/>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <ScrollSections/>
      </section>

      {/* <section style={{ marginBottom: '50px' }}>
        <Accordion/>
      </section> */}

      <section style={{ marginBottom: '50px' }}>
        <Main1/>
      </section>

      {/* <section style={{ marginBottom: '50px' }}>
        <CardOverlap/>
      </section> */}

      {/* <section style={{ marginBottom: '50px' }}>
        <Construction/>
      </section> */}

      <section style={{ marginBottom: '50px' }}>
        <LeanoHomePage/>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <LeanoHomePage2/>
      </section>

      {/* Add more spacing here if necessary */}
      <section style={{ marginBottom: '50px' }}>
        <NotFoundPage/>
      </section>

      {/* If you want to re-enable StickySections, add a section wrapper */}
      {/* <section style={{ marginBottom: '50px' }}>
        <StickySections/>
      </section> */}
    </div>
  );
}

export default Home;
