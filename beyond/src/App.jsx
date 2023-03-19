import React from 'react';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">Beyond Reviews</h1>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Advance Your Career</h2>
              <p className="text-gray-700">
                Beyond Reviews specializes in marketing solutions for career advancement, job skill
                upgrading, education, certification, and helping people stay employable in the rapidly
                changing world.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 mt-4">
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/500x350"
                alt="People working together"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Career Advancement</h3>
              <p className="text-gray-700">
                We offer a wide range of services to help you advance your career, including resume writing,
                interview preparation, and career coaching.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Job Skill Upgrading</h3>
              <p className="text-gray-700">
                Our job skill upgrading services are designed to help you learn new skills and stay up-to-date
                with the latest industry trends and technologies.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-700">
                We provide educational resources and training programs to help you acquire new knowledge and
                improve your skills in your field of interest.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <p className="text-gray-700">
                We offer certification programs to help you validate your skills and demonstrate your
                expertise to employers and clients.
              </p>
              </div>
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="bg-gray-100 py-20">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700">
            "Beyond Reviews helped me land my dream job by providing me with valuable career advice
            and interview preparation. Their team of experts is truly amazing!"
          </p>
          <div className="flex justify-between items-center mt-4">
            <img
              src="https://via.placeholder.com/50x50"
              alt="Testimonial author"
              className="rounded-full"
            />
            <div className="ml-4">
              <h4 className="text-lg font-bold">John Doe</h4>
              <p className="text-gray-700">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700">
            "I've been using Beyond Reviews' services for years and I can't recommend them enough.
            Their educational resources are top-notch and have helped me stay up-to-date with the
            latest technologies in my field."
          </p>
          <div className="flex justify-between items-center mt-4">
            <img
              src="https://via.placeholder.com/50x50"
              alt="Testimonial author"
              className="rounded-full"
            />
            <div className="ml-4">
              <h4 className="text-lg font-bold">Jane Smith</h4>
              <p className="text-gray-700">Web Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-blue-500 py-4">
    <div className="max-w-screen-xl mx-auto px-4">
      <p className="text-white text-center">&copy; 2023 Beyond Reviews. All rights reserved.</p>
    </div>
  </footer>
</div>

);
}

export default App;

      
