import { ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState, useRef, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  label: string;
  items: string[];
}

export const Dropdown: FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => handleClickOutside(event);

    document.addEventListener('mousedown', handleDocumentClick as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick as EventListener);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-2 font-bold text-pink-500 cursor-pointer">
        {label}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bg-white border border-gray-300 mt-4 rounded shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => alert(item)} 
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};