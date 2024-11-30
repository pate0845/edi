import Image from 'next/image';
import Head from "next/head";

const Hero = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
    </Head>

    <section className="relative bg-yellow-100 min-h-screen flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-yellow-100 opacity-90"></div>

      <div className="relative z-10 flex justify-center items-center w-full max-w-5xl mx-auto px-4">
        <div className="w-full flex flex-wrap items-center justify-center p-8 bg-yellow-100 rounded-xl shadow-lg">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left pr-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 text-gray-900">
              We are VisionCraf
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
              YOUR CONTENT OUR CRAFT – LET'S GO VIRAL!
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-900">
              Eye-catching edits tailored for influencers who want to shine on every platform. We help you reach a wider audience while saving precious time—leave the editing to us and focus on creating amazing content!
            </p>
            <a
              href="/Contact"
              className="inline-block w-40 h-12 border-2 border-black text-gray-900 font-semibold text-xs rounded-md transition-colors duration-300 hover:bg-gray-900 hover:text-white flex items-center justify-center"
            >
              EXPLORE SERVICES
              <span className="ml-1 text-xs">
                {/* Smaller button icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m0 0l-7-7m7 7l-7 7"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <Image
              src="/images/g.jpg"
              alt="Hero Image"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg"
              width={500}
              height={375}
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
