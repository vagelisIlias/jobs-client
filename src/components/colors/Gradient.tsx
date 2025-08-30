import React from 'react'

interface GradientProps {
  gradient: keyof typeof gradientColors;
  children: React.ReactNode;
}

const gradientColors = {
  blueCyanTeal: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500',
  purplePink: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
  sunset: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500'
};

function Gradient({ gradient, children }: GradientProps) {
  const selector: string = gradientColors[gradient];

  if (!selector) {
    throw new Error(`Invalid gradient color "${gradient}" provided.`);
  }

  return (<div className={selector}>{children}</div>);
}

export default Gradient;
