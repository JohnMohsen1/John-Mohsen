'use client'

import { useRef } from 'react';
import { Player } from '@lordicon/react';

export default function HoverIcon({ icon, size }: { icon: unknown; size: number }) {
  const ref = useRef<Player>(null);

  const handleMouseEnter = () => ref.current?.playFromBeginning();
  const handleMouseLeave = () => ref.current?.goToFirstFrame();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >

    <Player ref={ref} 
            icon={icon as object}
            size={size}
    />
    </div>
  );
}
