import React from "react";
import { motion, HTMLMotionProps, Transition } from "motion/react";

// Common visual transition settings for standard, lightweight feel
const springTransition: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 100,
  mass: 1,
};

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

/**
 * ScrollReveal: Animates a single component/block into view.
 * Uses whileInView and viewport={{ once: true }} with a customizable offset and delay.
 */
export function ScrollReveal({
  children,
  delay = 0,
  yOffset = 24,
  className = "",
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        ...springTransition,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

/**
 * StaggerContainer: Parent wrapper for bento grids or card lists.
 * Facilitates automatic staggered animation triggers for all StaggerItem children.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = "",
  ...props
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  yOffset?: number;
  className?: string;
}

/**
 * StaggerItem: Animated child that automatically inherits timeline triggers from its parent StaggerContainer.
 */
export function StaggerItem({
  children,
  yOffset = 20,
  className = "",
  ...props
}: StaggerItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: springTransition,
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
