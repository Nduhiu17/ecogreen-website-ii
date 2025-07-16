import React, { useState, useEffect, useRef } from 'react';
// import all images from images/heroes folder
import hero1 from './images/heroes/heroes1.jpg';
import hero2 from './images/heroes/heroes2.jpg';
import hero3 from './images/heroes/heroes3.jpg';
import hero4 from './images/heroes/heroes4.jpg';
import hero5 from './images/heroes/heroes5.jpg';
import hero6 from './images/heroes/heroes6.jpg';
import hero7 from './images/heroes/heroes7.jpg';
import hero8 from './images/heroes/heroes8.jpg';
import hero9 from './images/heroes/heroes9.jpg';

// import all about images from images/about folder
import about1 from './images/about/about1.jpg';
import about2 from './images/about/about2.jpg';
import about3 from './images/about/about3.jpg';
import about4 from './images/about/about4.jpg';
import about5 from './images/about/about5.jpg';

// import all images from portfolio/landscape folder
import landc1 from './images/portfolio/landscape/landc1.jpg';
import landc2 from './images/portfolio/landscape/landc2.jpg';
import landc3 from './images/portfolio/landscape/landc3.jpg';

// import all images from portfolio/garden-maintainance folder
import garden1 from './images/portfolio/garden-maintainance/garden1.jpg';
import garden2 from './images/portfolio/garden-maintainance/garden2.jpg';
import garden3 from './images/portfolio/garden-maintainance/garden3.jpg';

// import all images from portfolio/tree-care folder
import tree1 from './images/portfolio/tree-care/tree-care.jpg';
import tree2 from './images/portfolio/tree-care/tree-care2.jpg';
import tree3 from './images/portfolio/tree-care/tree-care3.jpg';

// import all images from portfolio/walk-way folder
import walkway1 from './images/portfolio/walk-way/pathway1.jpg';
import walkway2 from './images/portfolio/walk-way/pathway2.jpg';
import walkway3 from './images/portfolio/walk-way/pathway3.jpg';

// import all images from portfolio/cabro-laying folder
import cabro1 from './images/portfolio/cabro-laying/cabro1.jpg';
import cabro2 from './images/portfolio/cabro-laying/cabro2.jpg';
import cabro3 from './images/portfolio/cabro-laying/cabro3.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import all images from portfolio/artificial-waterfall folder
import artificialWaterfall1 from './images/portfolio/artificial-waterfall/artificial-water-fall1.jpg';
import artificialWaterfall2 from './images/portfolio/artificial-waterfall/artificial-waterfall2.jpg';
import swimmingPoolConstruction from './images/portfolio/artificial-waterfall/swimming-pool-construction.jpg';

// Privacy Policy Page Component
const PrivacyPolicyPage = () => {
  const [html, setHtml] = useState("");
  useEffect(() => {
    fetch("/privacy-policy.html")
      .then((res) => res.text())
      .then((text) => setHtml(text));
  }, []);
  return (
    <div className="min-h-screen bg-white py-8 px-2 flex justify-center items-center">
      <div style={{width: '100%', maxWidth: 800}}>
        {/* Render the HTML content safely */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};


// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/" element={
          <>
            <div className="font-sans antialiased text-gray-800 bg-white">
              {/* Navigation Bar */}
              <nav className="fixed top-0 left-0 right-0 z-50 bg-green-800 bg-opacity-90 shadow-lg py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                  <a href="#" className="text-2xl font-bold text-white tracking-wide">ECOGREEN</a>
                  <div className="hidden md:flex space-x-6">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">About Us</NavLink>
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#portfolio">Portfolio</NavLink>
                    <NavLink href="#references">References</NavLink>
                    <NavLink href="#blog">Blog</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                  </div>
                  <MobileMenu />
                </div>
              </nav>
              <main>
                <HeroSection />
                <AboutUs />
                <Services />
                <Portfolio />
                <References />
                <BlogSection />
                <ContactUs />
              </main>
              {/* Footer */}
              <footer className="bg-green-900 text-white py-8 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
                  <div className="col-span-1">
                    <p>&copy; {new Date().getFullYear()} Ecogreen Landscapers & Contractors.</p>
                    <p className="mt-1">All rights reserved.</p>
                    <p className="mt-1">Designed with passion for a greener world.</p>
                  </div>
                  <div className="col-span-1 flex justify-center md:justify-start">
                    <a href="https://facebook.com/EcogreenLandscapersAndContractors" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <div className="col-span-1 text-center md:text-right">
                    <h3 className="text-xl font-bold text-green-200 mb-2">Contact Us</h3>
                    <p className="mb-1 text-sm"><strong className="text-green-100">Head Office:</strong> Naivasha Road, P.O. Box 75113 – 00200, Nairobi, Kenya.</p>
                    <p className="mb-1 text-sm"><strong className="text-green-100">Main Contact:</strong> Emily Mwaura</p>
                    <p className="mb-1 text-sm"><strong className="text-green-100">Telephone:</strong> <a href="tel:+254727764987" className="text-green-300 hover:underline">+254 727 764987</a> / <a href="tel:+254721474392" className="text-green-300 hover:underline">+254 721 474392</a></p>
                    <p className="mb-1 text-sm"><strong className="text-green-100">Email:</strong> <a href="mailto:ecogreen.l.c@gmail.com" className="text-green-300 hover:underline">ecogreen.l.c@gmail.com</a></p>
                  </div>
                </div>
              </footer>
            </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
};

// Navigation Link Component
const NavLink = ({ href, children }) => (
  <a href={href} className="text-white hover:text-green-300 transition-colors duration-300 text-lg font-medium">
    {children}
  </a>
);

// Mobile Menu Component
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-green-800 bg-opacity-95 shadow-lg py-4 flex flex-col items-center space-y-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#references">References</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      )}
    </div>
  );
};

// Image Slider Component (Reusable)
const ImageSlider = ({ images, title, heightClass = 'h-screen' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden rounded-lg shadow-xl`} ref={sliderRef}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } bg-cover bg-center flex items-center justify-center`}
          style={{ backgroundImage: `url(${image.src})` }}
          aria-label={image.alt}
        >
          {image.caption && (
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white text-center max-w-md">
              <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{image.caption}</h2>
              <p className="text-lg drop-shadow-lg">{image.description}</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none z-10"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none z-10"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            } hover:bg-white transition-colors duration-300 focus:outline-none`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const heroImages = [
    { src: hero9, alt: 'Lush Green Landscape Design', caption: 'Transforming Outdoor Spaces', description: 'Expert landscaping services for residential and commercial properties, creating vibrant and inviting environments.' },
    { src: hero2, alt: 'Stunning Garden Designs Showcase', caption: 'Crafting Your Dream Garden', description: 'Innovative designs that blend natural beauty with practical functionality and aesthetic appeal.' },
    { src: hero3, alt: 'Sustainable Outdoor Solutions Example', caption: 'Eco-Friendly & Sustainable', description: 'Creating beautiful environments with a focus on ecological balance and long-term sustainability.' },
    { src: hero4, alt: 'Elegant Water Features Installation', caption: 'Water Features & Serenity', description: 'Adding the soothing touch of custom-designed water fountains and tranquil ponds.' },
    { src: hero1, alt: 'Durable Walkways and Paving', caption: 'Pathways to Perfection', description: 'Constructing robust and aesthetically pleasing walkways and roads for lasting appeal.' },
  ];

  return (
    <section id="home" className="relative h-screen pt-16">
      <ImageSlider images={heroImages} title="Ecogreen Landscapers Hero" />
    </section>
  );
};

// About Us Section
const AboutUs = () => {
  const aboutImages = [
    { src: about1, alt: 'Garden Steps and Rockery Project', caption: 'Our Expertise in Action', description: 'Showcasing our diverse landscaping projects from concept to completion.' },
    { src: about2, alt: 'Creative Playground Design Example', caption: 'Innovative Outdoor Solutions', description: 'From aesthetic dams to unique and safe play areas for all ages.' },
    { src: about3, alt: 'Lush Greenery Pathway Design', caption: 'Over 30 Years of Excellence', description: 'A legacy of transforming landscapes across Kenya with unparalleled dedication.' },
    { src: about4, alt: 'Residential Garden Transformation', caption: 'Your Vision, Our Expertise', description: 'Bringing residential garden dreams to vibrant reality with bespoke designs.' },
    { src: about5, alt: 'Commercial Property Landscaping', caption: 'Enhancing Business Appeal', description: 'Creating inviting and professional outdoor spaces for commercial establishments.' },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-12">About Ecogreen Landscapers & Contractors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <ImageSlider images={aboutImages} title="About Us Gallery" />
          </div>
          <div className="md:order-1 text-lg leading-relaxed text-gray-700">
            <h3 className="text-3xl font-bold text-green-700 mb-6">Your Trusted Partner in Landscape Transformation</h3>
            <p className="mb-4">
              With over <strong className="text-green-800">30 years of unparalleled experience</strong>, Ecogreen Landscapers & Contractors stands as a beacon of excellence in garden landscaping, intricate waterfall creation, robust walkway construction, and the development of stunning aesthetic dams and hills. We cater to both residential and commercial sectors, bringing visions to life with precision and passion. Our deep understanding of diverse ecosystems and client needs allows us to craft unique and sustainable outdoor environments.
            </p>
            <p className="mb-4">
              Our journey began in the early 1990s, focusing on crafting exquisite home gardens. Today, we have evolved into a comprehensive solution provider, adept at building estate roads, intricate walkways, and expansive landscapes. This extensive experience has equipped us with profound expertise to handle diverse terrains and deliver an unmatched array of services, ensuring every project is a masterpiece of natural design and engineering.
            </p>
            <p className="mb-4">
              We pride ourselves on offering a broad spectrum of services, providing a single point of contact for all your landscaping needs. Whether working directly with clients or collaborating with contractors and architects, our commitment remains unwavering: to deliver exceptional value, on time, and within budget. Our dedication to quality and competitive pricing, combined with a team of <strong className="text-green-800">14 highly skilled permanent workers</strong>, ensures lasting client satisfaction and long-term partnerships. We don't just build landscapes; we cultivate relationships.
            </p>
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-green-700 mb-4">Key Highlights:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-green-800">Business Experience:</strong> Over three decades of industry leadership and innovation.</li>
                <li><strong className="text-green-800">Dedicated Team:</strong> A skilled team of 14 permanent workers committed to excellence.</li>
                <li><strong className="text-green-800">Core Services:</strong> Specializing in garden landscaping, meticulous maintenance, creation of man-made waterfalls and rivulets, durable walkways, aesthetic dams & hills, and advanced plant & lawn disease control.</li>
                <li><strong className="text-green-800">Client-Centric Approach:</strong> Tailored solutions designed to meet unique client visions and environmental considerations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  return (
    <section id="services" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-12">Our Comprehensive Services Portfolio</h2>

        {/* Landscaping */}
        <ServiceBlock
          title="Expert Landscaping & Design"
          description="From initial concept to breathtaking completion, Ecogreen transforms your outdoor space into a personal paradise. Our services encompass comprehensive garden design, meticulous soft and hard landscaping, thoughtful plant selection, precise lawn and pathway laying, robust wall construction, and efficient irrigation system installation. We ensure a seamless process, delivering exceptional value and a garden that not only brings joy but also complements your home's architecture and enhances property value. Our designs are tailored to your lifestyle and the unique characteristics of your property, creating harmonious and sustainable environments."
          images={[
            { src: landc1, alt: 'Residential Landscaping Project', caption: 'Creating Serene Home Gardens', description: 'Tailored designs for every lifestyle, enhancing curb appeal and outdoor living.' },
            { src: landc2, alt: 'Commercial Landscape Design Example', caption: 'Enhancing Business Environments', description: 'Professional landscaping for corporate spaces, promoting a welcoming and productive atmosphere.' },
            { src: landc3, alt: 'Garden Design and Installation', caption: 'Bespoke Garden Creations', description: 'From concept to bloom, we design and install gardens that thrive.' },
          ]}
          reverse={false}
        />

        {/* Garden Maintenance */}
        <ServiceBlock
          title="Dedicated Garden Maintenance"
          description="A vibrant garden requires continuous care and attention. Ecogreen offers bespoke garden maintenance services to ensure your outdoor sanctuary remains pristine year-round. Whether we designed your garden or not, our team provides regular upkeep, including proactive disease control for plants and lawns, precise mowing and weeding, expert hedge trimming for perfect shaping, thorough cleaning, and efficient removal of all garden waste. We offer flexible contracts – weekly, monthly, or on a less regular basis – tailored to your garden's specific needs, ensuring its long-term health and beauty."
          images={[
            { src: garden1, alt: 'Lawn Mowing Services Example', caption: 'Keeping Your Lawn Immaculate', description: 'Regular mowing and weeding for a perfect, healthy lawn all season long.' },
            { src: garden2, alt: 'Hedge Trimming Experts at Work', caption: 'Shaping Hedges to Perfection', description: 'Skilled trimming for healthy and beautifully sculpted hedges and shrubs.' },
            { src: garden3, alt: 'Garden Waste Removal Service', caption: 'Clean & Tidy Gardens', description: 'Efficient removal of garden waste, leaving your space spotless and inviting.' },
          ]}
          reverse={true}
        />

        {/* Tree Cutting, Pruning and Maintenance */}
        <ServiceBlock
          title="Professional Tree Care & Maintenance"
          description="Ecogreen provides comprehensive tree maintenance services, including strategic trimming, overall health care, and preventative treatments against diseases and insects, ensuring the vitality and longevity of your landscape. We also offer safe and efficient tree cutting for old or dangerously overhanging trees that pose a risk to structures or surroundings, ensuring safety and preventing potential damage. Our expert pruning services meticulously remove defective, dead, rotten, flimsy, and non-productive tissue, promoting structural integrity, vigorous growth, and the aesthetic appeal of your trees. Our tasks include thorough tree inspection and diagnosis, scientific naming and tagging for inventory, responsible planting and cutting down trees, efficient digging out of offcuts, precise pruning, supporting trees and bushes for stability, targeted disease control, and complete removal of debris from your compounds."
          images={[
            { src: tree1, alt: 'Tree Pruning Service Demonstration', caption: 'Ensuring Tree Health & Safety', description: 'Expert pruning and maintenance for all tree types, promoting growth and preventing hazards.' },
            { src: tree2, alt: 'Safe Tree Removal Operation', caption: 'Specialized Tree Felling', description: 'Safe and efficient removal of hazardous or unwanted trees with minimal disruption.' },
            { src: tree3, alt: 'Tree Planting and Support', caption: 'Nurturing New Growth', description: 'Professional tree planting and ongoing support for healthy establishment.' },
          ]}
          reverse={false}
        />

        {/* Walkway and Road Constructions */}
        <ServiceBlock
          title="Durable Walkway & Road Construction"
          description="Ecogreen specializes in constructing robust and aesthetically pleasing walkways and roads that enhance both functionality and curb appeal. From simple garden mazera walkways that promote healthy grass growth and provide clean, non-slip paths, especially during rainy seasons, to the provision of external access roads and all-weather tarmac connecting roads, we deliver durable and long-lasting solutions. Our expertise ensures smooth, safe, and visually appealing surfaces for any property, significantly enhancing accessibility and overall landscape value."
          images={[
            { src: walkway1, alt: 'Mazera Walkways+Construction', caption: 'Elegant Garden Paths', description: 'Beautiful and functional mazera walkways for natural charm and durability.' },
            { src: walkway2, alt: 'All-Weather+Roads+Project', caption: 'Robust Road Infrastructure', description: 'Constructing durable roads for all conditions, ensuring smooth and safe access.' },
            { src: walkway3, alt: 'Paved+Driveway+Installation', caption: 'Stylish Driveway Solutions', description: 'Custom-designed paved driveways that combine aesthetics with resilience.' },
          ]}
          reverse={true}
        />

        {/* Excavation and Cabro Laying */}
        <ServiceBlock
          title="Precise Excavation & Cabro Laying"
          description="Cabro laying is a cornerstone of our services, demanding meticulous attention to detail from the initial ground preparation to the flawless final finish. We meticulously remove problematic soil types, such as black cotton soil, until a stable and firm ground is achieved. This is followed by precise backfilling with murram and thorough compaction using heavy-duty roller compactors. The final 300mm depth is filled with hand-packed hardcore, which is also expertly roller-compacted for maximum stability. Fine aggregate is then laid on top before the paving blocks are expertly arranged and securely held together on the edges by robust concrete kerbs. Our precise approach guarantees smooth, durable, and aesthetically pleasing cabro surfaces perfect for roads, car parks, and expansive outdoor areas, built to withstand heavy traffic and environmental elements."
          images={[
            { src: cabro3, alt: 'Cabro Road Construction Site', caption: 'Durable Cabro Roads', description: 'Expert cabro laying for long-lasting, high-traffic roads and pathways.' },
            { src: cabro1, alt: 'Cabro Car Park Installation Process', caption: 'Functional Car Parks', description: 'High-quality cabro solutions for robust and aesthetically pleasing car parks.' },
            { src: cabro2, alt: 'Ground Preparation for Paving', caption: 'Meticulous Groundwork', description: 'Thorough excavation and compaction for a solid foundation.' },
          ]}
          reverse={false}
        />

        {/* Water Fountains and Swimming Pools */}
        <ServiceBlock
          title="Stunning Water Features & Pools"
          description="Enhance the beauty and tranquility of your property with Ecogreen's expertise in designing and constructing captivating water fountains and luxurious swimming pools. We create bespoke water features that serve as dynamic focal points, adding elegance, a soothing ambiance, and a touch of natural artistry to any landscape. Our swimming pools are built to the highest standards of craftsmanship and safety, offering a perfect blend of relaxation, recreation, and aesthetic appeal, meticulously tailored to your specific vision and property layout. From serene koi ponds to elaborate multi-tiered fountains, we bring water to life in your garden."
          images={[
            { src: artificialWaterfall1, alt: 'Elegant Water Fountains Design', caption: 'Artistic Water Features', description: 'Bringing serenity and dynamic beauty to your garden space.' },
            { src: swimmingPoolConstruction, alt: 'Luxurious Swimming Pool Construction', caption: 'Custom Pool Construction', description: 'Creating your personal oasis with bespoke designs and premium finishes.' },
            { src: artificialWaterfall2, alt: 'Tranquil Pond and Waterfall', caption: 'Harmonious Water Gardens', description: 'Integrating natural ponds and waterfalls for a calming effect.' },
          ]}
          reverse={true}
        />
      </div>
    </section>
  );
};

// Service Block Component (for Services Section)
const ServiceBlock = ({ title, description, images, reverse }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'md:order-2' : 'md:order-1'} text-lg leading-relaxed text-gray-700`}>
        <h3 className="text-3xl font-bold text-green-700 mb-6">{title}</h3>
        <p>{description}</p>
      </div>
      <div className={`${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <ImageSlider images={images} title={title} />
      </div>
    </div>
  );
};

// Portfolio Section
const Portfolio = () => {
  const initialProjects = useRef([ // Use useRef to store initial projects to allow reset
    {
      name: "Coopers K Brand Headquarters",
      originalDescription: "For Coopers K Brand, we undertook a comprehensive landscaping project at their new Tatu City headquarters. This involved meticulous design, implementation, and ongoing maintenance of expansive grounds, including lush grassing, the creation of aesthetic hills, vibrant flower beds, intricate rock gardens, and perfectly sculpted hedges. Our work transformed their corporate environment into a welcoming and inspiring space, valued around KES 1,500,000 in 2019, reflecting our commitment to large-scale corporate beautification.",
      description: "For Coopers K Brand, we undertook a comprehensive landscaping project at their new Tatu City headquarters. This involved meticulous design, implementation, and ongoing maintenance of expansive grounds, including lush grassing, the creation of aesthetic hills, vibrant flower beds, intricate rock gardens, and perfectly sculpted hedges. Our work transformed their corporate environment into a welcoming and inspiring space, valued around KES 1,500,000 in 2019, reflecting our commitment to large-scale corporate beautification.",
      images: [
        { src: 'https://placehold.co/800x600/4CAF50/FFFFFF?text=Coopers+K+Brand+HQ+1', alt: 'Coopers K Brand Headquarters Landscape 1', caption: 'Main Entrance Landscaping', description: 'A welcoming and vibrant entrance designed for corporate appeal.' },
        { src: 'https://placehold.co/800x600/4CAF50/FFFFFF?text=Coopers+K+Brand+HQ+2', alt: 'Coopers K Brand Headquarters Landscape 2', caption: 'Green Spaces & Pathways', description: 'Expansive green lawns with accessible, well-defined pathways.' },
        { src: 'https://placehold.co/800x600/4CAF50/FFFFFF?text=Coopers+K+Brand+HQ+3', alt: 'Coopers K Brand Headquarters Landscape 3', caption: 'Aesthetic Hills & Rock Gardens', description: 'Unique natural features integrated into the corporate landscape.' },
      ],
    },
    {
      name: "Tatu City Development",
      originalDescription: "Our engagement at Tatu City involved extensive landscaping, strategic hedge and tree planting, and significant aesthetic enhancements, including the development of unique rock gardens. We provided continuous maintenance from 2018 to 2019, ensuring the sustained beauty and ecological balance of the urban development. This project, with a contract value around KES 1,000,000, showcased our ability to contribute to large-scale urban greening initiatives.",
      description: "Our engagement at Tatu City involved extensive landscaping, strategic hedge and tree planting, and significant aesthetic enhancements, including the development of unique rock gardens. We provided continuous maintenance from 2018 to 2019, ensuring the sustained beauty and ecological balance of the urban development. This project, with a contract value around KES 1,000,000, showcased our ability to contribute to large-scale urban greening initiatives.",
      images: [
        { src: 'https://placehold.co/800x600/8BC34A/FFFFFF?text=Tatu+City+Development+1', alt: 'Tatu City Development Landscape 1', caption: 'Urban Green Corridor', description: 'Creating green spaces within a bustling urban development.' },
        { src: 'https://placehold.co/800x600/8BC34A/FFFFFF?text=Tatu+City+Development+2', alt: 'Tatu City Development Landscape 2', caption: 'Hedge & Tree Planting', description: 'Strategic planting for privacy, shade, and aesthetic appeal.' },
        { src: 'https://placehold.co/800x600/8BC34A/FFFFFF?text=Tatu+City+Development+3', alt: 'Tatu City Development Landscape 3', caption: 'Rock Garden Features', description: 'Artistic rock formations enhancing the natural beauty of the area.' },
      ],
    },
    {
      name: "Canadian Embassy",
      originalDescription: "Ecogreen Landscapers & Contractors has proudly served the Canadian Embassy for over seven years, undertaking various landscaping works. A key project involved designing and landscaping the front entrance area within the chancery. This intricate work included precise leveling, vibrant flower installations, and the strategic placement of aesthetic rocks to create a grand and inviting entrance. We also had the honor of planting the memorial acacia tree, symbolizing lasting beauty and commitment.",
      description: "Ecogreen Landscapers & Contractors has proudly served the Canadian Embassy for over seven years, undertaking various landscaping works. A key project involved designing and landscaping the front entrance area within the chancery. This intricate work included precise leveling, vibrant flower installations, and the strategic placement of aesthetic rocks to create a grand and inviting entrance. We also had the honor of planting the memorial acacia tree, symbolizing lasting beauty and commitment.",
      images: [
        { src: 'https://placehold.co/800x600/689F38/FFFFFF?text=Canadian+Embassy+1', alt: 'Canadian Embassy Landscape 1', caption: 'Grand Entrance Design', description: 'Elegant landscaping at the embassy entrance for a distinguished look.' },
        { src: 'https://placehold.co/800x600/689F38/FFFFFF?text=Canadian+Embassy+2', alt: 'Canadian Embassy Landscape 2', caption: 'Vibrant Floral Displays', description: 'Colorful flowerbeds adding beauty and charm to the chancery.' },
        { src: 'https://placehold.co/800x600/689F38/FFFFFF?text=Canadian+Embassy+3', alt: 'Canadian Embassy Landscape 3', caption: 'Memorial Tree Planting', description: 'A significant acacia tree planted with care and precision.' },
      ],
    },
    {
      name: "British High Commission",
      originalDescription: "For the British High Commission, our work encompassed comprehensive landscaping, ongoing maintenance, and expert pruning of trees. A significant part of the project involved the rehabilitation of grounds that were previously heavily overgrown with dense bushes, transforming them into manicured, accessible, and aesthetically pleasing outdoor spaces that reflect the prestige of the diplomatic mission.",
      description: "For the British High Commission, our work encompassed comprehensive landscaping, ongoing maintenance, and expert pruning of trees. A significant part of the project involved the rehabilitation of grounds that were previously heavily overgrown with dense bushes, transforming them into manicured, accessible, and aesthetically pleasing outdoor spaces that reflect the prestige of the diplomatic mission.",
      images: [
        { src: 'https://placehold.co/800x600/7CFC00/FFFFFF?text=British+High+Commission+1', alt: 'British High Commission Grounds 1', caption: 'Grounds Rehabilitation', description: 'Transforming overgrown areas into pristine diplomatic landscapes.' },
        { src: 'https://placehold.co/800x600/7CFC00/FFFFFF?text=British+High+Commission+2', alt: 'British High Commission Grounds 2', caption: 'Expert Tree Pruning', description: 'Maintaining tree health and aesthetics for a refined appearance.' },
        { src: 'https://placehold.co/800x600/7CFC00/FFFFFF?text=British+High+Commission+3', alt: 'British High Commission Grounds 3', caption: 'Manicured Lawns', description: 'Immaculately maintained lawns reflecting the prestige of the site.' },
      ],
    },
    {
      name: "International Livestock Research Institute (ILRI)",
      originalDescription: "In 2009, Ecogreen undertook the extensive landscaping of two acres of ILRI property. This large-scale project, valued at Kshs 3,500,000, involved transforming vast open spaces into functional and beautiful landscapes, enhancing the research environment and providing serene outdoor areas for staff and visitors.",
      description: "In 2009, Ecogreen undertook the extensive landscaping of two acres of ILRI property. This large-scale project, valued at Kshs 3,500,000, involved transforming vast open spaces into functional and beautiful landscapes, enhancing the research environment and providing serene outdoor areas for staff and visitors.",
      images: [
        { src: 'https://placehold.co/800x600/ADFF2F/FFFFFF?text=ILRI+Campus+1', alt: 'ILRI Campus Landscaping 1', caption: 'Expansive Campus Greenery', description: 'Developing large green spaces for research and relaxation.' },
        { src: 'https://placehold.co/800x600/ADFF2F/FFFFFF?text=ILRI+Campus+2', alt: 'ILRI Campus Landscaping 2', caption: 'Functional Outdoor Zones', description: 'Creating practical and beautiful outdoor areas for various uses.' },
        { src: 'https://placehold.co/800x600/ADFF2F/FFFFFF?text=ILRI+Campus+3', alt: 'ILRI Campus Landscaping 3', caption: 'Serene Pathways', description: 'Well-designed pathways connecting different parts of the campus.' },
      ],
    },
    {
      name: "Golden Palm Hotel",
      originalDescription: "We were entrusted with the creation and ongoing maintenance of the International Golden Palm Hotel's sensitive and exceedingly demanding grounds. This project, requiring meticulous attention to detail and high standards of aesthetic appeal, showcased our vast experience in delivering exemplary services for high-profile hospitality environments, ensuring the hotel's outdoor spaces matched its luxurious interior.",
      description: "We were entrusted with the creation and ongoing maintenance of the International Golden Palm Hotel's sensitive and exceedingly demanding grounds. This project, requiring meticulous attention to detail and high standards of aesthetic appeal, showcased our vast experience in delivering exemplary services for high-profile hospitality environments, ensuring the hotel's outdoor spaces matched its luxurious interior.",
      images: [
        { src: 'https://placehold.co/800x600/2E8B57/FFFFFF?text=Golden+Palm+Hotel+1', alt: 'Golden Palm Hotel Gardens 1', caption: 'Luxury Hotel Gardens', description: 'Exquisite landscaping complementing a high-end hospitality environment.' },
        { src: 'https://placehold.co/800x600/2E8B57/FFFFFF?text=Golden+Palm+Hotel+2', alt: 'Golden Palm Hotel Gardens 2', caption: 'Resort-Style Landscaping', description: 'Creating an inviting and relaxing atmosphere for hotel guests.' },
        { src: 'https://placehold.co/800x600/2E8B57/FFFFFF?text=Golden+Palm+Hotel+3', alt: 'Golden Palm Hotel Gardens 3', caption: 'Meticulous Maintenance', description: 'Ongoing care ensuring the gardens remain pristine year-round.' },
      ],
    },
    {
      name: "Sisters of Charity of the Incarnate Word (Ukarimu Center)",
      originalDescription: "At the Ukarimu Center in Molo, we undertook a profound project involving the construction of a spiritual Labyrinth, a calming waterfall, a functional dam, and the overall landscaping of the Catholic grounds. Additionally, we designed and installed a highly efficient 3-Chamber biodigester system with an integrated water recycle process, specifically for garden and water pond use, valued at KES 2.8M. This project highlights our capability in both spiritual landscape design and sustainable environmental solutions.",
      description: "At the Ukarimu Center in Molo, we undertook a profound project involving the construction of a spiritual Labyrinth, a calming waterfall, a functional dam, and the overall landscaping of the Catholic grounds. Additionally, we designed and installed a highly efficient 3-Chamber biodigester system with an integrated water recycle process, specifically for garden and water pond use, valued at KES 2.8M. This project highlights our capability in both spiritual landscape design and sustainable environmental solutions.",
      images: [
        { src: 'https://placehold.co/800x600/3CB371/FFFFFF?text=Ukarimu+Center+1', alt: 'Ukarimu Center Project 1', caption: 'Spiritual Labyrinth Creation', description: 'A serene labyrinth designed for contemplation and peace.' },
        { src: 'https://placehold.co/800x600/3CB371/FFFFFF?text=Ukarimu+Center+2', alt: 'Ukarimu Center Project 2', caption: 'Waterfall & Dam Construction', description: 'Integrating natural water features for a calming effect.' },
        { src: 'https://placehold.co/800x600/3CB371/FFFFFF?text=Ukarimu+Center+3', alt: 'Ukarimu Center Project 3', caption: 'Biodigester System Integration', description: 'Sustainable water recycling for garden and pond use.' },
      ],
    },
    {
      name: "Samdoville Wedding Grounds",
      originalDescription: "For Samdoville, we designed and developed breathtaking wedding grounds, creating a magical backdrop for unforgettable events. This comprehensive project included the installation of lush grass and vibrant flower landscapes, a captivating water fountain as a centerpiece, and an elegant rock garden, ensuring every corner was picture-perfect for celebrations.",
      description: "For Samdoville, we designed and developed breathtaking wedding grounds, creating a magical backdrop for unforgettable events. This comprehensive project included the installation of lush grass and vibrant flower landscapes, a captivating water fountain as a centerpiece, and an elegant rock garden, ensuring every corner was picture-perfect for celebrations.",
      images: [
        { src: 'https://placehold.co/800x600/8FBC8F/FFFFFF?text=Samdoville+Weddings+1', alt: 'Samdoville Wedding Venue 1', caption: 'Enchanting Wedding Gardens', description: 'Creating magical backdrops for special occasions.' },
        { src: 'https://placehold.co/800x600/8FBC8F/FFFFFF?text=Samdoville+Weddings+2', alt: 'Samdoville Wedding Venue 2', caption: 'Central Water Fountain', description: 'A captivating water feature as the heart of the grounds.' },
        { src: 'https://placehold.co/800x600/8FBC8F/FFFFFF?text=Samdoville+Weddings+3', alt: 'Samdoville Wedding Venue 3', caption: 'Lush Floral Arrangements', description: 'Vibrant flowers enhancing the romantic ambiance.' },
      ],
    },
    {
      name: "A.F.C Offices Nationwide",
      originalDescription: "Ecogreen secured a contract to provide comprehensive landscaping services for A.F.C offices throughout the country. This involved designing and creating both hard and soft landscaping works, followed by consistent maintenance over an extended period, ensuring a professional and inviting outdoor presence for all their branches.",
      description: "Ecogreen secured a contract to provide comprehensive landscaping services for A.F.C offices throughout the country. This involved designing and creating both hard and soft landscaping works, followed by consistent maintenance over an extended period, ensuring a professional and inviting outdoor presence for all their branches.",
      images: [
        { src: 'https://placehold.co/800x600/90EE90/FFFFFF?text=AFC+Offices+1', alt: 'AFC Offices Landscaping 1', caption: 'Corporate Campus Design', description: 'Professional landscaping for a welcoming office environment.' },
        { src: 'https://placehold.co/800x600/90EE90/FFFFFF?text=AFC+Offices+2', alt: 'AFC Offices Landscaping 2', caption: 'Hard & Soft Landscaping', description: 'Combining structural elements with natural beauty.' },
        { src: 'https://placehold.co/800x600/90EE90/FFFFFF?text=AFC+Offices+3', alt: 'AFC Offices Landscaping 3', caption: 'Nationwide Maintenance', description: 'Consistent upkeep across multiple branch locations.' },
      ],
    },
    {
      name: "Bishop Magua",
      originalDescription: "Our work for Bishop Magua involved dedicated landscaping and garden development, transforming the property into a serene and aesthetically pleasing environment tailored to the client's specific preferences.",
      description: "Our work for Bishop Magua involved dedicated landscaping and garden development, transforming the property into a serene and aesthetically pleasing environment tailored to the client's specific preferences.",
      images: [
        { src: 'https://placehold.co/800x600/32CD32/FFFFFF?text=Bishop+Magua+1', alt: 'Bishop Magua Gardens 1', caption: 'Private Garden Sanctuary', description: 'A tranquil garden space designed for personal serenity.' },
        { src: 'https://placehold.co/800x600/32CD32/FFFFFF?text=Bishop+Magua+2', alt: 'Bishop Magua Gardens 2', caption: 'Custom Garden Features', description: 'Unique elements tailored to the client’s vision.' },
        { src: 'https://placehold.co/800x600/32CD32/FFFFFF?text=Bishop+Magua+3', alt: 'Bishop Magua Gardens 3', caption: 'Lush Greenery Installation', description: 'Vibrant plant selections for a thriving garden.' },
      ],
    },
    {
      name: "The Kenya Shell",
      originalDescription: "Ecogreen provided professional landscaping services for The Kenya Shell, contributing to the upkeep and enhancement of their corporate premises with our signature green touch.",
      description: "Ecogreen provided professional landscaping services for The Kenya Shell, contributing to the upkeep and enhancement of their corporate premises with our signature green touch.",
      images: [
        { src: 'https://placehold.co/800x600/228B22/FFFFFF?text=Kenya+Shell+1', alt: 'Kenya Shell Landscaping 1', caption: 'Corporate Landscape Maintenance', description: 'Ensuring pristine outdoor areas for a professional image.' },
        { src: 'https://placehold.co/800x600/228B22/FFFFFF?text=Kenya+Shell+2', alt: 'Kenya Shell Landscaping 2', caption: 'Green Infrastructure', description: 'Enhancing the environmental appeal of commercial sites.' },
        { src: 'https://placehold.co/800x600/228B22/FFFFFF?text=Kenya+Shell+3', alt: 'Kenya Shell Landscaping 3', caption: 'Sustainable Green Spaces', description: 'Eco-friendly solutions for large corporate properties.' },
      ],
    },
    {
      name: "The Green Belt Movement",
      originalDescription: "We were honored to undertake landscaping projects for Prof. Wangari Maathai's home and office, as well as other eco-projects under The Green Belt Movement. This collaboration underscored our shared commitment to environmental conservation and sustainable landscaping practices.",
      description: "We were honored to undertake landscaping projects for Prof. Wangari Maathai's home and office, as well as other eco-projects under The Green Belt Movement. This collaboration underscored our shared commitment to environmental conservation and sustainable landscaping practices.",
      images: [
        { src: 'https://placehold.co/800x600/00CED1/FFFFFF?text=Green+Belt+Movement+1', alt: 'Green Belt Movement Sites 1', caption: 'Eco-Conscious Landscaping', description: 'Projects reflecting a deep commitment to environmental preservation.' },
        { src: 'https://placehold.co/800x600/00CED1/FFFFFF?text=Green+Belt+Movement+2', alt: 'Green Belt Movement Sites 2', caption: 'Community Green Initiatives', description: 'Supporting green projects that benefit local communities.' },
        { src: 'https://placehold.co/800x600/00CED1/FFFFFF?text=Green+Belt+Movement+3', alt: 'Green Belt Movement Sites 3', caption: 'Natural Habitat Restoration', description: 'Restoring and enhancing natural ecosystems.' },
      ],
    },
    {
      name: "Mo Teresia Van Miert",
      originalDescription: "For Mo Teresia Van Miert, we provided a comprehensive drainage solution, addressing critical water management needs. This included efficient storm water management, innovative infiltration of sewer water seeping at the front garden through a bioretention garden, precise channel construction, and the installation of a robust biodigester system. This project, valued at KES 3.6M, showcases our expertise in sustainable water and waste management solutions.",
      description: "For Mo Teresia Van Miert, we provided a comprehensive drainage solution, addressing critical water management needs. This included efficient storm water management, innovative infiltration of sewer water seeping at the front garden through a bioretention garden, precise channel construction, and the installation of a robust biodigester system. This project, valued at KES 3.6M, showcases our expertise in sustainable water and waste management solutions.",
      images: [
        { src: 'https://placehold.co/800x600/1E90FF/FFFFFF?text=Mo+Teresia+Drainage+1', alt: 'Mo Teresia Drainage Solution 1', caption: 'Advanced Drainage Systems', description: 'Implementing effective solutions for storm water management.' },
        { src: 'https://placehold.co/800x600/1E90FF/FFFFFF?text=Mo+Teresia+Drainage+2', alt: 'Mo Teresia Drainage Solution 2', caption: 'Bioretention Garden', description: 'Innovative green infrastructure for water infiltration.' },
        { src: 'https://placehold.co/800x600/1E90FF/FFFFFF?text=Mo+Teresia+Drainage+3', alt: 'Mo Teresia Drainage Solution 3', caption: 'Biodigester Installation', description: 'Sustainable waste management for residential properties.' },
      ],
    },
    {
      name: "Golden Palm Hotel (Biodigester)",
      originalDescription: "At the International Golden Palm Hotel, we installed an advanced 4-Chamber biodigester system, incorporating a sophisticated water recycle process. The recycled water was ingeniously utilized for the creation of an aesthetic dam, a flowing river, and a vibrant fishpond, demonstrating our ability to integrate sustainable systems with beautiful landscape features. This project was valued at KES 3.85M.",
      description: "At the International Golden Palm Hotel, we installed an advanced 4-Chamber biodigester system, incorporating a sophisticated water recycle process. The recycled water was ingeniously utilized for the creation of an aesthetic dam, a flowing river, and a vibrant fishpond, demonstrating our ability to integrate sustainable systems with beautiful landscape features. This project was valued at KES 3.85M.",
      images: [
        { src: 'https://placehold.co/800x600/FFD700/FFFFFF?text=Golden+Palm+Biodigester+1', alt: 'Golden Palm Biodigester System 1', caption: 'Integrated Biodigester System', description: 'Advanced waste-to-resource solutions for large establishments.' },
        { src: 'https://placehold.co/800x600/FFD700/FFFFFF?text=Golden+Palm+Biodigester+2', alt: 'Golden Palm Biodigester System 2', caption: 'Aesthetic Dam Creation', description: 'Utilizing recycled water for beautiful landscape features.' },
        { src: 'https://placehold.co/800x600/FFD700/FFFFFF?text=Golden+Palm+Biodigester+3', alt: 'Golden Palm Biodigester System 3', caption: 'Vibrant Fishpond Design', description: 'Creating thriving aquatic environments within the hotel grounds.' },
      ],
    },
    {
      name: "Canadian Embassy Rosslyn Courts 7",
      originalDescription: "We initially designed and landscaped Rosslyn Court 7 with the previous owner. Following the Canadian Embassy's acquisition and management, we continued to maintain the property for a period of three years, ensuring its pristine condition and adherence to high standards.",
      description: "We initially designed and landscaped Rosslyn Court 7 with the previous owner. Following the Canadian Embassy's acquisition and management, we continued to maintain the property for a period of three years, ensuring its pristine condition and adherence to high standards.",
      images: [
        { src: 'https://placehold.co/800x600/FFA500/FFFFFF?text=Rosslyn+Courts+1', alt: 'Rosslyn Courts Landscaping 1', caption: 'Residential Court Landscaping', description: 'Designing and maintaining lush green spaces for residential complexes.' },
        { src: 'https://placehold.co/800x600/FFA500/FFFFFF?text=Rosslyn+Courts+2', alt: 'Rosslyn Courts Landscaping 2', caption: 'Long-Term Maintenance', description: 'Ensuring sustained beauty and health of the landscape over years.' },
        { src: 'https://placehold.co/800x600/FFA500/FFFFFF?text=Rosslyn+Courts+3', alt: 'Rosslyn Courts Landscaping 3', caption: 'Property Enhancement', description: 'Adding significant aesthetic and functional value to the property.' },
      ],
    },
    {
      name: "Central Bank of Kenya Senior Staff Houses",
      originalDescription: "Ecogreen was responsible for the landscaping and meticulous care of the senior staff houses in Caledonian for the Central Bank of Kenya, maintaining high standards of greenery and outdoor aesthetics.",
      description: "Ecogreen was responsible for the landscaping and meticulous care of the senior staff houses in Caledonian for the Central Bank of Kenya, maintaining high standards of greenery and outdoor aesthetics.",
      images: [
        { src: 'https://placehold.co/800x600/FF8C00/FFFFFF?text=CBK+Staff+Housing+1', alt: 'CBK Staff Housing Landscaping 1', caption: 'Executive Residence Gardens', description: 'High-standard landscaping for senior staff residential areas.' },
        { src: 'https://placehold.co/800x600/FF8C00/FFFFFF?text=CBK+Staff+Housing+2', alt: 'CBK Staff Housing Landscaping 2', caption: 'Meticulous Garden Care', description: 'Ensuring pristine and well-maintained outdoor environments.' },
        { src: 'https://placehold.co/800x600/FF8C00/FFFFFF?text=CBK+Staff+Housing+3', alt: 'CBK Staff Housing Landscaping 3', caption: 'Aesthetic Outdoor Spaces', description: 'Creating visually appealing and relaxing areas for residents.' },
      ],
    },
    {
      name: "Gathura Investments Properties",
      originalDescription: "We have continuously landscaped and managed residential apartments for Gathura Investments Properties to date, ensuring their properties maintain attractive and well-kept outdoor environments for residents.",
      description: "We have continuously landscaped and managed residential apartments for Gathura Investments Properties to date, ensuring their properties maintain attractive and well-kept outdoor environments for residents.",
      images: [
        { src: 'https://placehold.co/800x600/FF4500/FFFFFF?text=Gathura+Investments+1', alt: 'Gathura Investments Apartments 1', caption: 'Apartment Complex Landscaping', description: 'Enhancing residential properties with beautiful landscapes.' },
        { src: 'https://placehold.co/800x600/FF4500/FFFFFF?text=Gathura+Investments+2', alt: 'Gathura Investments Apartments 2', caption: 'Ongoing Property Management', description: 'Consistent care ensuring attractive outdoor environments.' },
        { src: 'https://placehold.co/800x600/FF4500/FFFFFF?text=Gathura+Investments+3', alt: 'Gathura Investments Apartments 3', caption: 'Resident Amenity Spaces', description: 'Creating pleasant and functional outdoor areas for residents.' },
      ],
    },
    {
      name: "Nairobi Gymkhana Sports Grounds",
      originalDescription: "In 1999, Ecogreen proudly undertook the landscaping and development of the cricket grounds at Nairobi Gymkhana Sports Grounds, contributing to the creation of a premier sporting facility with lush, well-maintained playing surfaces.",
      description: "In 1999, Ecogreen proudly undertook the landscaping and development of the cricket grounds at Nairobi Gymkhana Sports Grounds, contributing to the creation of a premier sporting facility with lush, well-maintained playing surfaces.",
      images: [
        { src: 'https://placehold.co/800x600/DC143C/FFFFFF?text=Nairobi+Gymkhana+1', alt: 'Nairobi Gymkhana Cricket Grounds 1', caption: 'Cricket Ground Development', description: 'Expert landscaping for professional sports facilities.' },
        { src: 'https://placehold.co/800x600/DC143C/FFFFFF?text=Nairobi+Gymkhana+2', alt: 'Nairobi Gymkhana Cricket Grounds 2', caption: 'Lush Playing Surfaces', description: 'Creating and maintaining high-quality turf for sports.' },
        { src: 'https://placehold.co/800x600/DC143C/FFFFFF?text=Nairobi+Gymkhana+3', alt: 'Nairobi Gymkhana Cricket Grounds 3', caption: 'Sports Facility Enhancement', description: 'Contributing to premier sporting venues with our expertise.' },
      ],
    },
    {
      name: "Simba Union",
      originalDescription: "Ecogreen has a history of working with Simba Union on sports ground-related projects, demonstrating our versatility and expertise in developing and maintaining specialized outdoor facilities.",
      description: "Ecogreen has a history of working with Simba Union on sports ground-related projects, demonstrating our versatility and expertise in developing and maintaining specialized outdoor facilities.",
      images: [
        { src: 'https://placehold.co/800x600/B22222/FFFFFF?text=Simba+Union+1', alt: 'Simba Union Sports Ground 1', caption: 'Sports Field Landscaping', description: 'Developing and maintaining specialized outdoor sports facilities.' },
        { src: 'https://placehold.co/800x600/B22222/FFFFFF?text=Simba+Union+2', alt: 'Simba Union Sports Ground 2', caption: 'Versatile Outdoor Solutions', description: 'Showcasing adaptability in various sports ground projects.' },
        { src: 'https://placehold.co/800x600/B22222/FFFFFF?text=Simba+Union+3', alt: 'Simba Union Sports Ground 3', caption: 'Recreational Area Development', description: 'Creating functional and appealing spaces for community sports.' },
      ],
    },
  ]);

  const [projects, setProjects] = useState(initialProjects.current);
  const [loadingProjectId, setLoadingProjectId] = useState(null);
  const [error, setError] = useState(null);

  const photoGalleryImages = [
    { src: 'https://placehold.co/800x600/4CAF50/FFFFFF?text=Garden+with+Stone+Steps+Overview', alt: 'Garden with Stone Steps Overview', caption: 'Serene Garden Retreats', description: 'Beautifully crafted stone steps amidst lush greenery, inviting tranquility.' },
    { src: 'https://placehold.co/800x600/8BC34A/FFFFFF?text=Manicured+Lawn+and+Flowerbed+Detail', alt: 'Manicured Lawn and Flowerbed Detail', caption: 'Vibrant Floral Displays', description: 'A perfectly manicured lawn complemented by colorful and diverse flowerbeds.' },
    { src: 'https://placehold.co/800x600/689F38/FFFFFF?text=Lush+Tropical+Garden+Path+View', alt: 'Lush Tropical Garden Path View', caption: 'Tropical Oasis Pathways', description: 'Inviting pathways winding through exotic foliage, creating a sense of discovery.' },
    { src: 'https://placehold.co/800x600/7CFC00/FFFFFF?text=Small+Garden+Waterfall+Feature', alt: 'Small Garden Waterfall Feature', caption: 'Tranquil Water Features', description: 'The soothing sound of a cascading garden waterfall adding peace to your space.' },
    { src: 'https://placehold.co/800x600/ADFF2F/FFFFFF?text=Stone+Walkway+with+Greenery+Surround', alt: 'Stone Walkway with Greenery Surround', caption: 'Rustic Charm Walkways', description: 'Natural stone walkways blending seamlessly with the landscape, durable and beautiful.' },
    { src: 'https://placehold.co/800x600/2E8B57/FFFFFF?text=Ongoing+Site+Excavation+Work', alt: 'Ongoing Site Excavation Work', caption: 'Groundwork in Progress', description: 'Preparing the foundation for new landscape transformations with precision and care.' },
    { src: 'https://placehold.co/800x600/3CB371/FFFFFF?text=New+Landscape+Development+Phase', alt: 'New Landscape Development Phase', caption: 'Developing Future Green Spaces', description: 'Early stages of a large-scale landscape project, shaping the environment of tomorrow.' },
    { src: 'https://placehold.co/800x600/8FBC8F/FFFFFF?text=Stream+and+Rock+Garden+Integration', alt: 'Stream and Rock Garden Integration', caption: 'Natural Stream Integration', description: 'Harmonious blend of water features and rockery, creating a natural ecosystem.' },
    { src: 'https://placehold.co/800x600/90EE90/FFFFFF?text=Colorful+Tire+Play+Area+Design', alt: 'Colorful Tire Play Area Design', caption: 'Creative Play Solutions', description: 'Fun and safe play areas designed with recycled materials for sustainable enjoyment.' },
    { src: 'https://placehold.co/800x600/32CD32/FFFFFF?text=Brick+Paved+Pathway+Artistry', alt: 'Brick Paved Pathway Artistry', caption: 'Artistic Paved Paths', description: 'Intricate brick paving adding character and durability to your pathways.' },
    { src: 'https://placehold.co/800x600/228B22/FFFFFF?text=Secluded+Garden+Path+Exploration', alt: 'Secluded Garden Path Exploration', caption: 'Hidden Garden Gems', description: 'Discovering serene and private corners within expansive, thoughtfully designed gardens.' },
    { src: 'https://placehold.co/800x600/00CED1/FFFFFF?text=Water+Feature+with+Foliage+Accent', alt: 'Water Feature with Foliage Accent', caption: 'Lush Water Garden', description: 'Water features integrated with vibrant plant life, enhancing natural beauty.' },
    { src: 'https://placehold.co/800x600/1E90FF/FFFFFF?text=Stone+Wall+and+Path+Construction', alt: 'Stone Wall and Path Construction', caption: 'Crafted Stone Work', description: 'Durable and beautiful stone retaining walls and pathways, built to last.' },
    { src: 'https://placehold.co/800x600/4682B4/FFFFFF?text=Expansive+Green+Lawn+Space', alt: 'Expansive Green Lawn Space', caption: 'Perfect Lawns for Play', description: 'Vast, meticulously maintained green spaces ideal for recreation and relaxation.' },
    { src: 'https://placehold.co/800x600/6A5ACD/FFFFFF?text=Modern+Garden+Lighting', alt: 'Modern Garden Lighting', caption: 'Illuminated Landscapes', description: 'Strategic lighting to enhance beauty and safety during evening hours.' },
    { src: 'https://placehold.co/800x600/8A2BE2/FFFFFF?text=Flowering+Shrubs+and+Trees', alt: 'Flowering Shrubs and Trees', caption: 'Seasonal Blooms', description: 'A diverse selection of flowering plants ensuring color and life year-round.' },
  ];

  // Function to enhance project description using Gemini API
  const enhanceDescription = async (projectId, currentDescription) => {
    setLoadingProjectId(projectId);
    setError(null);

    try {
      const prompt = `Rewrite and enhance the following landscaping project description to be more engaging, marketing-oriented, and descriptive for a company website. Focus on highlighting the benefits, unique aspects, and the quality of work. Keep it concise but impactful (around 50-70 words): "${currentDescription}"`;
      
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = process.env.GEMINI_API_KEY; // get your API key from environment variables
      console.log("Using API Key:", apiKey); // Debugging line to check if API key is being used
      
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${response.status} ${response.statusText} - ${errorData.error.message}`);
      }

      const result = await response.json();
      
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const enhancedText = result.candidates[0].content.parts[0].text;
        
        setProjects(prevProjects =>
          prevProjects.map((proj, idx) =>
            idx === projectId ? { ...proj, description: enhancedText } : proj
          )
        );
      } else {
        throw new Error("Invalid response structure from Gemini API.");
      }
    } catch (err) {
      console.error("Error enhancing description:", err);
      setError("Failed to enhance description. Please try again.");
    } finally {
      setLoadingProjectId(null);
    }
  };

  // Function to reset description to original
  const resetDescription = (projectId) => {
    setProjects(prevProjects =>
      prevProjects.map((proj, idx) =>
        idx === projectId ? { ...proj, description: proj.originalDescription } : proj
      )
    );
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-12">Our Impressive Portfolio & Photo Gallery</h2>

        {/* Past Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-700 text-center mb-8">Showcasing Our Legacy of Excellence</h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            With over three decades in the industry, Ecogreen Landscapers & Contractors has successfully delivered a diverse range of projects for esteemed clients across various sectors. Our extensive portfolio highlights our capability to handle complex challenges and create stunning, functional outdoor spaces. Below are some of our notable past experiences, demonstrating our commitment to quality and client satisfaction, and our ability to transform visions into vibrant realities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <ImageSlider images={project.images} title={project.name} heightClass="h-48" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-2">{project.name}</h4>
                  <p className="text-gray-600 text-sm min-h-[4.5rem]">{project.description}</p> {/* min-h to prevent layout shift */}
                  <div className="mt-4 flex flex-col space-y-2">
                    <button
                      onClick={() => enhanceDescription(index, project.description)}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
                      disabled={loadingProjectId === index}
                    >
                      {loadingProjectId === index ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        '✨ Enhance Description'
                      )}
                    </button>
                    <button
                      onClick={() => resetDescription(index)}
                      className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                      disabled={loadingProjectId === index || project.description === project.originalDescription}
                    >
                      Reset Description
                    </button>
                    {error && loadingProjectId === index && <p className="text-red-500 text-xs mt-2">{error}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-green-700 text-center mb-8">Visual Journey Through Our Masterpieces</h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            A picture is worth a thousand words. Explore our extensive photo gallery to witness the artistry and precision that defines Ecogreen's work. From lush garden landscapes and intricate Mazeras walkways to vibrant ongoing sites, these images are a testament to our dedication to creating beautiful and sustainable outdoor environments that stand the test of time.
          </p>
          <ImageSlider images={photoGalleryImages} title="Our Photo Gallery" />
        </div>
      </div>
    </section>
  );
};

// References Section
const References = () => {
  const referencesData = [
    {
      name: "Sister Mary",
      role: "In charge of work at Sisters of Charity of the Incarnate Word, Ukarimu Center",
      contact: "+254 720 368 186",
      testimonial: "Ecogreen transformed our center's grounds into a truly serene and beautiful space. Their dedication and craftsmanship are exceptional, and the biodigester system they installed is a testament to their innovative approach.",
    },
    {
      name: "Eng. John Njoka",
      role: "Landscaping and maintenance work within the International Golden Palm Hotel",
      contact: "+254 722 949 462",
      testimonial: "The team at Ecogreen consistently delivers outstanding landscaping and maintenance services. Their attention to detail keeps our hotel grounds immaculate, significantly enhancing our guests' experience.",
    },
    {
      name: "Architect Madja Povoden",
      role: "Maya Plan Architects",
      email: "maya.plan@yahoo.com",
      contact: "+254 732 301 756",
      testimonial: "Collaborating with Ecogreen is always a pleasure. Their expertise in landscape architecture and their commitment to realizing complex designs make them an invaluable partner on any project. Highly recommended for their professionalism and quality.",
    },
  ];

  return (
    <section id="references" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-12">Trusted by Our Valued Clients</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-10 max-w-3xl mx-auto">
          Our commitment to excellence is reflected in the satisfaction of our clients. We are proud to have built strong, lasting relationships based on trust, quality, and exceptional service. Here are some of the individuals and organizations who can attest to the high standards and transformative impact of Ecogreen Landscapers & Contractors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {referencesData.map((ref, index) => (
            <div key={index} className="bg-green-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">{ref.name}</h3>
                <p className="text-gray-700 mb-2">{ref.role}</p>
                {ref.email && <p className="text-gray-600 mb-2">Email: <a href={`mailto:${ref.email}`} className="text-green-600 hover:underline">{ref.email}</a></p>}
                <p className="text-gray-600">Contact: <a href={`tel:${ref.contact}`} className="text-green-600 hover:underline">{ref.contact}</a></p>
              </div>
              {ref.testimonial && (
                <p className="italic text-gray-800 mt-4">"{ref.testimonial}"</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section (New Component)
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Sustainable Landscaping in Kenya",
      date: "July 10, 2025",
      snippet: "Discover how Ecogreen integrates eco-friendly practices and local flora to create stunning, sustainable landscapes that thrive in Kenya's unique climate...",
      image: "https://placehold.co/400x250/A2CC8A/333333?text=Sustainable+Landscaping",
    },
    {
      id: 2,
      title: "Transforming Urban Spaces: Our Latest Project in Nairobi",
      date: "June 25, 2025",
      snippet: "Get an exclusive look at our recent urban landscaping project in the heart of Nairobi, showcasing innovative designs for compact spaces...",
      image: "https://placehold.co/400x250/C4E0B2/333333?text=Urban+Project",
    },
    {
      id: 3,
      title: "The Benefits of Professional Tree Care for Your Property",
      date: "June 15, 2025",
      snippet: "Learn why regular tree cutting, pruning, and maintenance by experts are crucial for the health and safety of your garden and property...",
      image: "https://placehold.co/400x250/8BBF7A/333333?text=Tree+Care+Tips",
    },
    {
      id: 4,
      title: "Designing Dream Gardens: A Step-by-Step Guide",
      date: "May 30, 2025",
      snippet: "From initial concept to final bloom, our guide walks you through the process of creating your perfect garden with Ecogreen's expertise...",
      image: "https://placehold.co/400x250/B8D9A8/333333?text=Dream+Garden+Guide",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-12">Our Insights & News</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-10 max-w-3xl mx-auto">
          Stay updated with the latest trends in landscaping, gain valuable insights from our experts, and discover news about Ecogreen Landscapers & Contractors. Our blog is a resource for homeowners, businesses, and enthusiasts looking to cultivate beautiful and sustainable outdoor spaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/CCCCCC/333333?text=Blog+Image`; }} />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-700 text-base mb-4">{post.snippet}</p>
                <a href="#" className="text-green-600 hover:underline font-medium">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
          View All Blog Posts
        </button>
      </div>
    </section>
  );
};


// Contact Us Section
const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-12">Get in Touch with Ecogreen</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-10 max-w-3xl mx-auto">
          Ready to transform your outdoor space? Contact Ecogreen Landscapers & Contractors today for a consultation or to learn more about our services. We look forward to hearing from you and helping you achieve your landscaping dreams, creating beautiful and functional environments that exceed your expectations.
        </p>
      </div>
    </section>
  );
};

export default App;
