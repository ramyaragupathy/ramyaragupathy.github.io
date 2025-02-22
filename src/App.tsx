import React from 'react';
import { Github, Linkedin, Mail, Code, Globe, Folder} from 'lucide-react';
import ramya from './assets/ramya-circle.jpg';
import hot from './assets/hotosm.jpg';
import maplibre from './assets/maplibre.png';
import community from './assets/community.png';
import npshot from './assets/nps_hot.png';
import nps from './assets/nps.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-10">
  <div className="container mx-auto px-4 py-4 flex justify-center gap-8">
    <a href="#hero" className="text-gray-300 hover:text-white">Home</a>
    <a href="#about" className="text-gray-300 hover:text-white">About</a>
    <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
    <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
    <a href="#blog" className="text-gray-300 hover:text-white">Blog</a>
    <a href="#connect" className="text-gray-300 hover:text-white">Connect</a>
  </div>
</nav>
      {/* Hero Section */}
      <div id="hero" className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Ramya Ragupathy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
            Driving humanitarian impact through open-source mapping and product innovation.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/ramyaragupathy" target="_blank" className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/ramyaragupathy/" target="_blank" className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="mailto:r.ragupathy85@gmail.com" target="_blank" className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
                <img
                  src={ramya}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container mx-auto px-4 py-16">
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-300">
          I'm a consultant software developer & product manager specializing in open-source mapping technologies, currently driving product vision and strategy at Humanitarian OpenStreetMap Team (HOT) and serving as Head of Product & Operations at MapLibre. I lead projects that leverage cutting-edge geospatial tools to empower humanitarian efforts and community-driven mapping. Passionate about creating tech that makes a real-world impact, I thrive at the intersection of technology, community, and storytelling.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Software Development</h3>
            <p className="text-gray-400">Node.js, Python,HTML, CSS, PostgreSQL, MongoDB, Rest APIs, CI/CD, Git, AWS</p>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all">
            <Globe className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">OpenStreetMap Tools & Ecosystem</h3>
            <p className="text-gray-400">Data extraction, processing and visualisation, Community Engagement</p>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/50 transition-all">
            <Folder className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Software Product Management</h3>
            <p className="text-gray-400">Team Management, Roadmap Development, Product Vision & Strategy, User Research & feedback analysis</p>
          </div>
        </div>
      </div>

      {/* Experience/Projects Section */}
<div id="projects" className="container mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
  <div className="space-y-8">
    {/* HOT Project */}
    <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm flex flex-col lg:flex-row items-center gap-6">
      <img src={hot} alt="HOT" className="w-full lg:w-48 h-32 object-cover rounded-lg" />
      <div>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Product Management for Tasking Manager</h3>
          <span className="text-blue-400">2018 - Present</span>
        </div>
        <h4 className="text-lg text-gray-300 mb-2">Humanitarian OpenStreetMap Team</h4>
        <p className="text-gray-400">
          Leading product vision and strategy for open-source web and mobile applications that empower volunteers, partners, and donors with critical geospatial data.
        </p>
      </div>
    </div>

    {/* MapLibre Project */}
    <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm flex flex-col lg:flex-row items-center gap-6">
      <img src={maplibre} alt="MapLibre" className="w-full lg:w-48 h-32 object-cover rounded-lg" />
      <div>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Head of Product & Operations for web and native libraries</h3>
          <span className="text-blue-400">2024 - Present</span>
        </div>
        <h4 className="text-lg text-gray-300 mb-2">MapLibre</h4>
        <p className="text-gray-400">
          Overseeing product positioning, community engagement, and operational excellence for MapLibre’s open-source mapping library.
        </p>
      </div>
    </div>

    {/* Community Project */}
    <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm flex flex-col lg:flex-row items-center gap-6">
      <img src={community} alt="Community" className="w-full lg:w-48 h-32 object-cover rounded-lg" />
      <div>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Community Engagement & Mentorship for FOSS Tools</h3>
          <span className="text-blue-400">2015 - Present</span>
        </div>
        <h4 className="text-lg text-gray-300 mb-2">Open Source Community</h4>
        <p className="text-gray-400">
          Regular speaker and mentor at events like State of the Map Asia, fostering inclusive open-source communities.
        </p>
      </div>
    </div>
  </div>
</div>

    {/* Blog & LinkedIn Posts Section */}
<div id="blog" className="container mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-white mb-12 text-center">Blog</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 
    {/* Blog Post */}
    <a 
      href="https://www.hotosm.org/updates/the-results-are-in-enhancing-the-hot-tasking-manager-based-on-your-feedback/" 
      target="_blank" 
      className="bg-purple-800/30 p-6 rounded-xl backdrop-blur-sm hover:bg-purple-800/50 transition-all"
    >
      <img 
        src={npshot} 
        alt="Blog Post" 
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold text-white mb-2">Announcing 2025 roadmap for Tasking Manager</h3>
      <p className="text-gray-300">Results of the 2024 NPS survey and the plan ahead for tthe flagship tool.</p>
    </a>
    <a 
      href="https://www.linkedin.com/feed/update/urn:li:activity:7275556325441363969/" 
      target="_blank" 
      className="bg-purple-800/30 p-6 rounded-xl backdrop-blur-sm hover:bg-purple-800/50 transition-all"
    >
      <img 
        src={nps} 
        alt="Blog Post" 
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold text-white mb-2">End of Year survey for Tasking Manager</h3>
      <p className="text-gray-300">Inviting end users to provide feedback on the performance of the tool.</p>
    </a>

  </div>
 
</div>
      {/* Connect Section */}
      <div id ="connect" className="container mx-auto px-4 py-16">
  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Let's Connect</h2>
    <div className="max-w-2xl mx-auto">
      <form 
        action="https://formspree.io/f/mbldbkjl" 
        method="POST" 
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;