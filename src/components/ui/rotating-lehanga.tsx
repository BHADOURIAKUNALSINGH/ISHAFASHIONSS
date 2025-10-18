// components/rotating-lehenga.tsx

import Image from 'next/image';

export function RotatingLehenga() {
  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
      {/* - transform-preserve-3d enables the 3D space for rotation.
        - animate-rotate-y applies the custom animation we just defined.
      */}
      <div className="absolute top-[-32%] right-[-72%] -translate-y-1/4 w-1/2 h-1/2 transform-preserve-3d animate-rotate-y">
        <Image
          // IMPORTANT: Replace this with the path to your lehenga image!
          src="/images/your-lehenga.png" 
          alt="Rotating bridal lehenga"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}