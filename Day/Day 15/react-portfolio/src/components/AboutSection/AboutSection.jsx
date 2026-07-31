import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='Lhouvizotuo'/>
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Lhouvizotuo, a computer science student passionate about building web applications.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
