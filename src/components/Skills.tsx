import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const importImages = async () => {
      // Dynamically import all images from the 'assets/icon-skills' directory
      const imageContext = import.meta.glob('../assets/icon-skills/*.{png,jpg,jpeg,svg}');
      const imagePaths = await Promise.all(
        Object.keys(imageContext).map(async (key) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const module: any = await imageContext[key]();
          return module.default;
        })
      );
      setImages(imagePaths);
    };

    importImages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="uppercase mb-16">
        <p className="m-2">Skill sets:</p>
        <div id="drop-shadow" className="bg-bgday200 p-4 rounded-2xl">
          <div className="grid grid-cols-6 md:grid-cols-8 gap-6 justify-items-center items-center max-w-128 lg:w-128 md:w-[600px] min-w-[300px]">
            
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} className="w-6 h-6 md:w-8 md:h-8 mb-2 transform transition duration-500 hover:scale-150 " />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
