// src/components/StarField.tsx
import React, { useMemo } from "react";

type StarFieldProps = {
  amount?: number;
};

const StarField: React.FC<StarFieldProps> = ({ amount = 60 }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: amount }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 1.5,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 3,
      })),
    [amount]
  );

  return (
    <>
      {stars.map((s) => (
        <div
          key={s.id}
          className="star-dot"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </>
  );
};

export default StarField;
