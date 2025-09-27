import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Benefits from './components/Benifits';
import Instructors from './components/Instructor';
import FAQ from './components/Faq';
import Gallery from './components/Gallery';
function App() {
  return (
    <div div  className="bg-gray-900 text-white font-body">
      <Navbar />
      <Hero />
      <About />
       <Benefits /> 
      {/* <Courses /> */}
      <Instructors />
      <Gallery />
      {/* <FAQ /> */}

      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
