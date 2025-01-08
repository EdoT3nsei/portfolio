import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const isVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-video overflow-hidden rounded-lg"
          >
            {isVideo(image) ? (
              <video
                src={image}
                controls
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            ) : (
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={photoIndex}
          //onIndexChange={setPhotoIndex}
        />
      )}
    </div>
  );
};

export default ProjectGallery;