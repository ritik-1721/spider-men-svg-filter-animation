'use client';  

import { useEffect } from "react";
import gsap from "gsap";
import { throttle } from "lodash";

export default function Home() {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'none',
      },
    });

    tl.to('.mask', {
      translateY: 296,
      duration: 3,
    }).to('#bg-color', {
      attr: {
        fill: '#ffd11b',
      },
      duration: 2,
    }, '<+=1');

    const $picture = document.querySelector('.picture');

    function handleMoveEvent(clientY) {
      const rect = $picture.getBoundingClientRect();
      const relPos = (clientY - rect.top) / (rect.bottom - rect.top);
      tl.progress(relPos);
    }
  
    function handleMouseMove(ev) {
      handleMoveEvent(ev.clientY);
    }
  
    function handleTouchMove(ev) {
      const touch = ev.touches[0];
      handleMoveEvent(touch.clientY);
    }

    $picture.addEventListener('mousemove', throttle(handleMouseMove, 60));
    $picture.addEventListener('touchmove', throttle(handleTouchMove, 60));

    return () => {
      $picture.removeEventListener('mousemove', throttle(handleMoveEvent, 60));
      $picture.removeEventListener('touchmove', throttle(handleTouchMove, 60));
    };
  }, []);

  return (
    <main
      style={{
        backgroundImage: "url('/images/web-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
      className="h-screen bg-gradient-to-t from-[#5e4082] to-[#3a124d] flex items-center justify-center"
    >

      <div className="absolute top-0 left-0 right-0 p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h1 className="font-might-makes-right text-2xl md:text-4xl font-light leading-tight">
            Superhero Animation <br />
            with SVG Filters and Masks
          </h1>
          <nav className="space-x-4 flex items-center">
            <a
              href="https://www.linkedin.com/in/pawar-ritik/"
              className="flex items-center text-[#fef5e7] hover:text-[#f2a37c]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className="w-5 h-5 mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM7.6 20.1H3.8V8.9h3.8v11.2zm-1.9-12.9c-1.2 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1c-.1 1.2-1 2.1-2.1 2.1zM20.1 20.1h-3.8v-5.8c0-1.4-.5-2.3-1.7-2.3-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8v6.2h-3.8V8.9h3.8v1.5c.5-.8 1.4-1.8 3.3-1.8 2.4 0 4.2 1.6 4.2 5v6.5z" />
                </svg>
              </span>
              Linkedin
            </a>
            <a
              href="https://github.com/ritik-1721/spider-men-svg-filter-animation"
              className="flex items-center text-[#fef5e7] hover:text-[#f2a37c]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="w-5 h-5 mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.334-1.755-1.334-1.755-1.09-.744.082-.729.082-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.805 1.305 3.49.998.108-.775.42-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.522.118-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.4 3.003-.405 1.02.005 2.047.138 3.006.405 2.29-1.552 3.297-1.23 3.297-1.23.656 1.654.244 2.873.12 3.176.768.838 1.236 1.91 1.236 3.22 0 4.61-2.805 5.625-5.478 5.92.432.372.816 1.1.816 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.216.694.824.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </span>
              GitHub
            </a>
          </nav>
        </div>
      </div>
      <div>
      <svg
        className="picture max-w-full h-[60vh] sm:h-[80vh]  mx-auto filter drop-shadow-2xl"
        viewBox="0 0 196 296"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="distort">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.08"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="mask_mystique">
            <g filter="url(#distort)">
              <rect
                className="mask"
                x="0"
                y="-100%"
                width="100%"
                height="100%"
                fill="white"
              />
            </g>
          </mask>
          <mask id="mask_transformed">
            <g filter="url(#distort)">
              <rect
                className="mask"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="white"
              />
            </g>
          </mask>
        </defs>

        <rect
          id="bg-color"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#ff911b"
        />
        <image
          id="transformed"
          mask="url(#mask_transformed)"
          x="0"
          y="0"
          width="100%"
          height="100%"
          xlinkHref="images/spiderman.svg"
        />
        <image
          id="mystique"
          mask="url(#mask_mystique)"
          x="0"
          y="0"
          width="100%"
          height="100%"
          xlinkHref="images/venom.svg"
        />
        <image
          id="foreground"
          x="0"
          y="0"
          width="100%"
          height="100%"
          xlinkHref="images/frame.svg"
        />
      </svg>
    </div>
    <div className="absolute bottom-0 right-0 p-8 text-white">
      <div className="text-center py-4 mt-8">
        <a 
          href="https://www.linkedin.com/in/ritik-pawar" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm underline">
          <p className="text-sm">
            By Ritik Pawar © {currentYear}
          </p> 
        </a>
      </div>
    </div>
    </main>
  );
}
