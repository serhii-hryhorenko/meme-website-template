import React, { useState, useRef, useEffect } from "react";

interface ImageWithPathClipProps {
  imageHref: string;
}

const HeroPicture: React.FC<ImageWithPathClipProps> = ({ imageHref }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Dynamically calculate the scale factor for the clipPath based on container size
  const calculateClipPathScale = (
    containerWidth: number,
    containerHeight: number,
  ) => {
    const baseWidth = 1256; // Original SVG width
    const baseHeight = 996; // Original SVG height
    const widthRatio = containerWidth / baseWidth;
    const heightRatio = containerHeight / baseHeight;

    // Return the scaling factor to maintain the proportions
    return Math.min(widthRatio, heightRatio); // Scale uniformly to fit the container
  };

  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        setContainerSize({
          width: containerRef.current!.offsetWidth,
          height: containerRef.current!.offsetHeight,
        });
      };

      updateSize();
      window.addEventListener("resize", updateSize);

      return () => {
        window.removeEventListener("resize", updateSize);
      };
    }
  }, []);

  const clipPath = `
    M1256 120
    C1256 53.7258 1202.27 0 1136 0
    H458
    C402.772 0 358 44.7715 358 100
    C358 155.228 313.228 200 258 200
    H120
    C53.7258 200 0 253.726 0 320
    V876
    C0 942.274 53.7258 996 120 996
    H844
    C899.228 996 944 951.228 944 896
    C944 840.772 988.772 796 1044 796
    H1136
    C1202.27 796 1256 742.274 1256 676
    V120
  `;

  const scale = calculateClipPathScale(
    containerSize.width,
    containerSize.height,
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          position: "relative",
        }}
      >
        <defs>
          <clipPath id="clipPath">
            {/* Scale the path dynamically */}
            <path
              d={clipPath}
              transform={`scale(${scale})`} // Scale the path to fit the container
            />
          </clipPath>

          {/* Gradient for shimmer effect */}
          <linearGradient id="shimmerGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="50%" stopColor="#e0e0e0" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
        </defs>

        {!isLoaded && (
          <rect
            width="100%"
            height="100%"
            fill="url(#shimmerGradient)"
            clipPath="url(#clipPath)"
          >
            <animate
              attributeName="x"
              from="-100%"
              to="100%"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        )}

        <image
          href={imageHref}
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#clipPath)"
          preserveAspectRatio="xMidYMid slice"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          onLoad={() => setIsLoaded(true)}
        />
      </svg>
    </div>
  );
};

export default HeroPicture;
