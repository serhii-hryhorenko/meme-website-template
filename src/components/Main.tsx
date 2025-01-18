import { useEffect, useRef, useState } from "react";

import TokenContract from "./TokenContract";

type Props = {
  logo: string;
  main: string;
  contractId: string;
};

const Main = ({ logo, main, contractId }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const isMobile = containerSize.width < 768 - 16 - 16;

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

  const clipPath =
    "M358 100C358 44.7715 402.772 0 458 0H1136C1202.27 0 1256 53.7258 1256 120V876C1256 942.274 1202.27 996 1136 996H120C53.7258 996 0 942.274 0 876V320C0 253.726 53.7258 200 120 200H258C313.228 200 358 155.228 358 100V100Z";

  return (
    <>
      <img
        src={logo}
        alt="logo"
        className="md:hidden w-full h-48 shrink-0 rounded-[60px] object-cover z-10"
      />
      <div
        ref={containerRef}
        className="w-full min-h-[calc(100vh-24px)] xl:min-h-full flex flex-col justify-end md:justify-between rounded-[120px] relative"
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full object-cover rounded-[60px] xl:rounded-[120px]"
        >
          <defs>
            <clipPath id="clipPath">
              {/* Scale the path dynamically */}
              <path d={clipPath} />
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
            href={main}
            x="0"
            y="0"
            width="100%"
            height="100%"
            clipPath={isMobile ? undefined : "url(#clipPath)"}
            preserveAspectRatio="xMidYMid slice"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            onLoad={() => setIsLoaded(true)}
          />
        </svg>
        <img
          src={logo}
          alt="logo"
          className="hidden md:block max-w-[350px] h-48 shrink-0 rounded-[96px] object-cover z-10"
        />
        <TokenContract contractId={contractId} />
      </div>
    </>
  );
};

export default Main;
