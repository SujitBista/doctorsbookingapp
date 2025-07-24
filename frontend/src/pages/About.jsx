import React from 'react'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Prescripto</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting patients with trusted healthcare providers through innovative technology and compassionate care.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Prescripto, we believe that quality healthcare should be accessible to everyone. Our mission is to bridge the gap between patients and healthcare providers by creating a seamless, user-friendly platform that makes booking appointments simple and stress-free.
          </p>
          <p className="text-gray-600 mb-4">
            We understand that your health is your most valuable asset, and we're committed to ensuring that you receive the care you deserve from qualified, experienced medical professionals.
          </p>
          <p className="text-gray-600">
            Through our innovative technology and dedicated team, we're transforming the way people access healthcare services, making it easier than ever to find the right doctor and book appointments that fit your schedule.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Prescripto?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Verified and qualified healthcare providers</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Easy appointment booking and management</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Secure and confidential patient data</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">24/7 customer support</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Transparent pricing and no hidden fees</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 rounded-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-blue-100">Happy Patients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-100">Qualified Doctors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-100">Medical Specialties</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-blue-100">Patient Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
            <p className="text-gray-600">We treat every patient with empathy, understanding, and respect, ensuring they feel valued and cared for throughout their healthcare journey.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
            <p className="text-gray-600">We build lasting relationships based on transparency, reliability, and the highest standards of medical care and data security.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">We continuously evolve our platform to provide cutting-edge solutions that enhance the healthcare experience for both patients and providers.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://placehold.co/200x200/blue/white?text=JD"
              alt="John Doe"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
            <p className="text-blue-600 mb-2">CEO & Founder</p>
            <p className="text-gray-600 text-sm">Healthcare technology expert with over 15 years of experience in digital health solutions.</p>
          </div>
          <div className="text-center">
            <img
              src="https://placehold.co/200x200/pink/white?text=JS"
              alt="Jane Smith"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Jane Smith</h3>
            <p className="text-blue-600 mb-2">Chief Medical Officer</p>
            <p className="text-gray-600 text-sm">Board-certified physician with expertise in healthcare quality and patient safety.</p>
          </div>
          <div className="text-center">
            <img
              src="https://placehold.co/200x200/green/white?text=MB"
              alt="Mike Brown"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Mike Brown</h3>
            <p className="text-blue-600 mb-2">CTO</p>
            <p className="text-gray-600 text-sm">Technology leader specializing in scalable healthcare platforms and data security.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About