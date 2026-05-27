'use client';

import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoSectionProps {
  videoId: string;
  title: string;
  description: string;
}

const VideoSection = ({ videoId, title, description }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Play className="h-5 w-5 text-primary-600" />
        Service Overview
      </h3>
      
      {/* Video Player */}
      <div className="relative mb-6 rounded-xl overflow-hidden bg-gray-900 aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
        
        {/* Custom overlay controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg p-2">
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-white" />
              ) : (
                <Play className="h-4 w-4 text-white" />
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-white" />
              ) : (
                <Volume2 className="h-4 w-4 text-white" />
              )}
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <Maximize className="h-4 w-4 text-white" />
          </motion.button>
        </div>
      </div>
      
      {/* Service Description */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">About This Service</h4>
        <div className="text-gray-700 leading-relaxed space-y-3">
          {description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {/* Key highlights */}
        <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
          <h5 className="font-semibold text-primary-900 mb-2">Why Choose Us?</h5>
          <ul className="text-sm text-primary-800 space-y-1">
            <li>• Expert guidance throughout the process</li>
            <li>• 100% online and paperless experience</li>
            <li>• Dedicated relationship manager</li>
            <li>• Post-service support and assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;