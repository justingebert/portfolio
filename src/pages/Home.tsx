import React from "react";
import { Button } from "@/components/ui/button";

//TODO extract data to content folder
const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center mx-auto">
        <div>
          <h1 className="text-4xl font-bold">Software Engineer</h1>
          <div>
            Hi, I'm Justin Gebert. A result oriented Visual Computing and
            Media...
          </div>
          <div>Berlin, Germany. 📍</div>

          <div className="">
            <Button variant="outline">
              <img
                src="/src/assets/icons/github-mark.svg"
                alt="github Icon"
                className="w-5"
              />
            </Button>
            <Button variant="outline">
              <img
                src="/src/assets/icons/LinkedIn_icon.svg"
                alt="github Icon"
                className="w-5"
              />
            </Button>
            <Button variant="outline">
                <a 
                href="https://github.com/username/repository/raw/main/path/to/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                >My CV
                </a>
            </Button>
          </div>
        </div>

        <div className=" mt-4 sm:mt-0 sm:w-72 sm:ml-4">
          <img
            src="/src/assets/profilePicture.jpg"
            alt="portilfe picture"
            className="rounded-xl w-72 h-72 object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
