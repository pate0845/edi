const Footer = () => (
  <footer className="bg-yellow-100 py-8">
    <div className="container mx-auto px-4">
      <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold">Join our newsletter</h3>
            <p className="mt-2 text-sm sm:text-base">
              Get the latest tips, tutorials, and exclusive deals straight to your inbox.
            </p>
            <form className="mt-4 flex flex-col items-center sm:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md mb-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-gray-900 hover:bg-blue-800 rounded-md text-white text-xs sm:text-sm"
              >
                SUBSCRIBE
              </button>
              <p className="text-xs mt-2 sm:text-sm">
                Read our <a href="#" className="text-gray-900">privacy policy</a>.
              </p>
            </form>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold">Connect with us</h3>
            <div className="mt-4 flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-600">LinkedIn</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">Twitter</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">Instagram</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">Facebook</a>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold">Navigation</h3>
            <ul className="mt-4 space-y-2 sm:space-y-4">
              <li><a href="#" className="text-gray-800 hover:text-blue-600">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-600">Sign up</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm sm:text-base">
          &copy; 2024 Dileepa Rukshan. All rights reserved.
          <div className="text-xs mt-2 sm:text-sm">
            Made in Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
