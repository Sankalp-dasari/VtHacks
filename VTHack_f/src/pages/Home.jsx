import React from 'react';
import Hero from '../components/Hero'; 
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div>
      <Hero />
      
      <div className="bg-gray-100 py-20">
        <div className="max-w-[1200px] mx-auto text-center p-6">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-xl mb-6">
          CHUT: Campus Help & University Talent

Campus: Representing your focus on services within a university or campus environment.
Help: Highlighting that the platform provides help and services.
University: Emphasizing that the services are targeted at and for university students.
Talent: Referring to the talent or skills offered by the students on the platform.
          </p>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto text-center p-6">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-xl mb-6">
            Discover various services offered by students including tutoring, transportation, tech help, and much more.
          </p>
          <div className="max-w-[1200px] mx-auto py-10 px-6"> 
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/Tutoring" className="block transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden"> 
            <img
              src="https://i.pinimg.com/originals/91/d6/80/91d680e0c27eda61f17e58b1136379d5.gif" 
              alt="Tutoring"
              className="w-full h-56 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Tutoring</h2>
              <p className="text-gray-600">
                Get personalized academic support from fellow students who understand your coursework. Whether it's help with difficult subjects, preparing for exams, or improving your study skills, our tutoring services connect you with peers who can guide you through your academic journey.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/Carpooling" className="block transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://media3.giphy.com/media/d2IUymtquRRMYk1kuU/200w.gif?cid=6c09b9522yuqsug6kzxm25zqtdxd5recw9t9a0yh8d48otgs&ep=v1_gifs_search&rid=200w.gif&ct=g"
              alt="Carpooling"
              className="w-full h-56 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Carpooling</h2>
              <p className="text-gray-600">
                Save on transportation costs and reduce your carbon footprint by carpooling with other students. Whether you’re heading to campus, running errands, or traveling long distances, our carpooling service helps you find or offer rides in a convenient, cost-effective, and eco-friendly way.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/TechSupport" className="block transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden"> 
            <img
              src="https://i.pinimg.com/originals/06/d5/67/06d5674d86d74435991e3434d29b3ebf.gif" 
              alt="Tech Support"
              className="w-full h-56 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Tech Support</h2>
              <p className="text-gray-600">
                Struggling with tech issues? Our student-led tech support service is here to help with troubleshooting, repairs, and general tech assistance. From fixing laptops to setting up software, our knowledgeable peers are ready to solve your tech problems quickly and affordably.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
        </div>
      </div>
      
      <footer className="bg-black text-white py-10 text-center">
      </footer>
    </div>
  );
};

export default Home;
