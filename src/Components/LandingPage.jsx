import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Build Your Dream Website
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          Fast, responsive, and modern design powered by React & Tailwind CSS.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { title: "Fast Performance", desc: "Optimized for speed and SEO." },
            { title: "Responsive Design", desc: "Looks great on all devices." },
            { title: "Easy Customization", desc: "Built with Tailwind utility classes." },
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white shadow-lg rounded-2xl text-center">
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-blue-600 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to launch your project?
        </h3>
        <p className="mb-6">
          Join thousands of developers building amazing products with us.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
