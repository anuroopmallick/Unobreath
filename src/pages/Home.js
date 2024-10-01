import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full background-cover bg-center flex items-center justify-center">
        <img
          src="/images/Deepdive4.jpg"
          className="object-cover h-full w-full"
          alt="header-image"
        ></img>
      </div>
      <div className="w-full p-11 flex flex-col justify-center items-center">
        <div className="container lg:px-60">
          <h3 className="text-3xl font-medium mx-auto text-center">
            Unlock the Depths of Your Potential with your favourite instructor
          </h3>
          <div className="mx-auto text-center my-4">
            <em className="text-2xl font-medium  text-center">
              Join the community who are redefining{" "}
              <span className="text-blue-700">freediving</span>
            </em>
          </div>
          <p className="text-center text-gray-500 text-lg">
            Welcome to Unobreath Freediving! Whether you're a beginner or
            seasoned diver, my personalized training programs are designed to
            help you achieve depths of up to 30 meters and breath-holds
            exceeding 3 minutes, all while focusing on safety, technique, and
            mental tranquility. With over 250 successful dives and more than 100
            satisfied students, I offer tailored lessons that fit your goals and
            skill level, helping many improve their dive time by up to 40% in
            just 5 sessions. Join the growing community of 150+ freedivers who
            have transformed their skills and experience the underwater world
            with confidence.
          </p>
        </div>
      </div>
      <div className="relative bg-center h-[60rem] md:h-[52rem] bg-cover ">
        <img
          src="/images/discovery.jpg"
          className="object-cover h-full w-full"
        ></img>
        <div className="absolute top-0 left-0 z10 h-full w-full flex justify-center items-center">
          <div className="backdrop-blur-xl bg-center w-5/6 h-full md:h-5/6 flex flex-col justify-around text-white">
            <p className="text-4xl font-semibold text-white text-center my-8">
              Why choose Us ?
            </p>
            <div className="flex flex-col md:flex-row grow justify-around items-center">
              <div className="size-60 md:size-80 text-center flex flex-col  border-box border-white border-2 rounded-md md:justify-center md:px-2">
                <h1 className="text-2xl font-serif font-semibold md:pb-4">
                  Personalized Coaching
                </h1>

                <p className="text-center text-lg">
                  We tailor our lessons to your need, focusing on your unique
                  goals and comfort level.
                </p>
              </div>

              <div className="size-60 md:size-80 text-center flex flex-col border-box border-white border-2 rounded-md md:justify-center md:px-2">
                <h1 className="text-2xl font-serif font-semibold md:pb-4">
                  Proven Results
                </h1>

                <p className="text-center text-lg">
                  With years of experience, we’ve helped students achieve
                  remarkable milestones, including improved breath-holding
                  capacity and enhanced underwater endurance.
                </p>
              </div>

              <div className="size-60 md:size-80 text-center flex flex-col border-box border-white border-2 rounded-md md:justify-center md:px-2">
                <h1 className="text-2xl font-serif font-semibold md:pb-4">
                  Unleashing Growth Potential
                </h1>

                <p className="text-center text-lg">
                  We focus on personal development, mental clarity, and physical
                  resilience. You'll leave each session with increased
                  confidence, inner peace, and strength.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-11 flex flex-col justify-center items-center">
        <div className="container lg:px-60">
          <h3 className="text-3xl font-medium mx-auto text-center mb-4">
            Experience Tranquility
          </h3>
          <p className="text-center text-gray-500 text-lg">
            Imagine holding your breath, feeling weightless, and sinking
            effortlessly into the vastness of the ocean. Free diving offers more
            than just the ability to dive deeper. It's an experience that brings
            you closer to nature and yourself. From exploring vibrant coral
            reefs to encountering marine life, free diving offers a unique sense
            of freedom and tranquility like no other.
          </p>
        </div>
      </div>
      <div className="relative bg-center h-[60rem] md:h-[52rem] bg-cover ">
        <img
          src="/images/ship-wrek.jpg"
          className="object-cover h-full w-full bg-fixed"
        ></img>
        <div className="absolute top-0 left-0 z10 h-full w-full flex items-center justify-center  text-white">
          <div className="container flex flex-col h-full justify-center items-center px-8">
            <h2 className="text-3xl font-semibold my-12">
              What You Can Achieve in One Breath?
            </h2>
            <div className="text-left flex flex-col text-2xl">
              <p className=" my-6">
                Free diving is about pushing the limits of what’s possible on a
                single breath. With proper training, you'll be able to:
              </p>
              <ul className="list-disc text-lg pl-6 space-y-2">
                <li className="my-6">
                  Dive up to 20-40 meters below the surface.
                </li>
                <li className="py-6">
                  Hold your breath for up to 4 minutes or more.
                </li>
                <li className="py-6">
                  Explore shipwrecks, caves, and underwater ecosystems.
                </li>
                <li className="py-6">
                  Experience marine life up close in its natural habitat.
                </li>
                <li className="py-6">
                  Improve your lung capacity and enhance your overall physical
                  and mental well-being.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-lg font-semibold">
              Unobreath Free Diving Academy
            </span>
          </div>

          <ul className="flex space-x-4 text-sm">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-gray-400">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <p className="text-sm">
              &copy; 2024 <span className="font-semibold">Unobreath</span>. All
              rights reserved.
            </p>
            {/* 
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a> */}
            <a
              href="https://www.instagram.com/unobreath/?hl=en"
              className="hover:text-gray-400"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// <div className="flex flex-col h-full justify-evenly items-center text-white">
//   <p className="text-4xl font-semibold text-white text-center mt-4">
//     Why choose Us ?
//   </p>
//   <div className="max-h-full flex flex-col justify-evenly items-center">
//     <div className="size-60 text-center flex flex-col border-box border-white border-2 rounded-md">
//       <h1 className="text-2xl font-serif font-semibold">
//         Personalized Coaching
//       </h1>
//       <p className="text-center text-lg">
//         We tailor our lessons to your need, focusing on your unique
//         goals and comfort level.
//       </p>
//     </div>
//     <div className="size-60 text-center flex flex-col border-box border-white border-2 rounded-md">
//       <h1 className="text-2xl font-serif font-semibold">
//         Proven Results
//       </h1>
//       <p className="text-center text-lg">
//         With years of experience, we’ve helped students achieve
//         remarkable milestones, including improved breath-holding
//         capacity and enhanced underwater endurance.
//       </p>
//     </div>
//     <div className="size-60 text-center flex flex-col border-box border-white border-2 rounded-md">
//       <h1 className="text-2xl font-serif font-semibold">
//         Unleashing Growth Potential
//       </h1>
//       <p className="text-center text-lg">
//         We focus on personal development, mental clarity, and
//         physical resilience. You’ll leave each session with
//         increased confidence, inner peace, and strength.
//       </p>
//     </div>
//   </div>
// </div>;
