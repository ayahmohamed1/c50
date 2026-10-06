import { motion } from 'framer-motion'

/**
 * A single tilted polaroid-style photo frame.
 *
 * Props:
 *  - src, alt: image source + alt text
 *  - rotate: tilt angle in degrees (default alternates nicely if you pass -6 / 5 etc)
 *  - delay: stagger delay for the entrance animation
 *  - className: extra width/margin utility classes from the parent grid
 */
export default function Polaroid({ src, alt = '', rotate = -4, delay = 0, className = '' }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24, rotate: 0, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white p-2.5 pb-6 rounded-[2px] shadow-polaroid select-none ${className}`}
    >
      <div className="aspect-square w-full overflow-hidden bg-blush-100">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </motion.figure>
  )
}
