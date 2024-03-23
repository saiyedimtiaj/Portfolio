// VideoPopup.js
import React from 'react';
import Modal from 'react-modal';

const VideoPopup = ({ isOpen, onClose,video }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="w-full sm:w-auto md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto my-12 border-none rounded-lg shadow-lg"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center"
    >
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
        Close
      </button>
      <div className="aspect-w-16 aspect-h-9">
        <video
          className="w-full h-full"
          controls
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default VideoPopup;
