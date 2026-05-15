// Shared animation config — imported by every animated component
export const EASE = [0.22, 1, 0.36, 1];

// Reusable scroll-triggered variants
export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.75, ease: EASE } },
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0,   transition: { duration: 0.80, ease: EASE } },
};

export const slideRight = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0,   transition: { duration: 0.80, ease: EASE } },
};

export const scaleFade = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.60, ease: EASE } },
};
