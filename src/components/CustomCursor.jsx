import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [targetElement, setTargetElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [trailDots, setTrailDots] = useState([]);

  // Handle mouse movement
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add position to trail dots
      setTrailDots(prevDots => {
        const newDots = [...prevDots, { x: e.clientX, y: e.clientY, id: Date.now() }];
        // Keep only last 5 positions for the trail
        return newDots.slice(-5);
      });
      
      // Check if hovering over interactive elements
      const hoveredElement = e.target.closest('a, button, .hover-effect, input, textarea, select, [role="button"]');
      setTargetElement(hoveredElement);
      
      if (hoveredElement) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };
    
    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mouseleave', mouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);
  
  // Cursor variants for different states
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.2,
        damping: 8,
      }
    },
    hover: {
      x: targetElement ? targetElement.getBoundingClientRect().left + targetElement.getBoundingClientRect().width / 2 - 16 : mousePosition.x - 16,
      y: targetElement ? targetElement.getBoundingClientRect().top + targetElement.getBoundingClientRect().height / 2 - 16 : mousePosition.y - 16,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "2px solid rgba(255, 255, 255, 0.8)",
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 12,
      }
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "rgba(130, 87, 229, 0.05)",
      border: "2px solid rgba(130, 87, 229, 0.4)",
      mixBlendMode: "difference"
    }
  };

  // Only render on client and hide on touch devices
  if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        style={{ 
          opacity: isVisible ? 1 : 0,
          height: '32px', 
          width: '32px', 
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          border: '1px solid white',
        }}
      />
      
      {/* Cursor trail - subtle dots that follow the cursor */}
      {trailDots.map((dot, index) => (
        <motion.div
          key={dot.id}
          className="trail-dot fixed rounded-full pointer-events-none z-[9998] bg-white mix-blend-difference"
          initial={{ opacity: 0.7, scale: 0.2 }}
          animate={{ 
            opacity: 0,
            scale: 0,
            x: dot.x - 4, 
            y: dot.y - 4,
          }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut",
            delay: index * 0.05
          }}
          style={{
            width: '8px',
            height: '8px',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
