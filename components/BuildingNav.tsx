"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useProgress } from "@/context/ProgressContext";

export default function BuildingNav({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  const { progress } = useProgress();

  useGSAP(
    () => {
      if (!svgRef.current) return;

      // 1. Foundation elements
      const foundationEls = svgRef.current.querySelectorAll(
        '[class*="foundation"]',
      );

      const stairEls = svgRef.current.querySelectorAll('[class*="stair"]');

      const verticalEls = svgRef.current.querySelectorAll(
        '[class*="vertical"]',
      );

      // 2. Beam elements
      const beamEls = svgRef.current.querySelectorAll('[class*="beam"]');

      // 3. Lock elements
      const lockEls = svgRef.current.querySelectorAll('[class*="lock"]');

      // 4. Door group: Includes .door, .door-container, .door-window, .door-window-vertical-line,
      // and .door-window-semicircle (Excludes ONLY .door-lock)
      const allDoorEls = Array.from(
        svgRef.current.querySelectorAll<SVGElement>('[class*="door"]'),
      );
      const doorEls = allDoorEls.filter(
        (el) => !el.classList.value.includes("lock"),
      );

      // 5. Window group: Includes all main windows (Excludes door-window elements)
      const allWindowEls = Array.from(
        svgRef.current.querySelectorAll<SVGElement>('[class*="window"]'),
      );
      const windowEls = allWindowEls.filter(
        (el) => !el.classList.value.includes("door"),
      );

      // Initial State: fill transparent & visible white stroke
      const animatedEls = [
        ...Array.from(foundationEls),
        ...Array.from(stairEls),
        ...doorEls,
        ...windowEls,
        ...Array.from(beamEls),
      ];

      gsap.set(animatedEls, {
        fill: "transparent",
        stroke: "#ffffff",
        strokeWidth: 4,
      });

      gsap.set([...Array.from(lockEls)], {
        fill: "transparent",
        stroke: "#ffffff",
        strokeWidth: 2,
      });

      gsap.set([...Array.from(verticalEls)], {
        stroke: "#ffffff",
        fill: "#ffffff",
        strokeWidth: 2,
      });
    },
    { scope: svgRef },
  );

  useGSAP(
    () => {
      if (!svgRef.current) return;

      const stairEls = svgRef.current.querySelectorAll('[class*="stair"]');
      const foundationEls = svgRef.current.querySelectorAll(
        '[class*="foundation"]',
      );
      const verticalEls = svgRef.current.querySelectorAll(
        '[class*="vertical"]',
      );

      const allDoorEls = Array.from(
        svgRef.current.querySelectorAll<SVGElement>('[class*="door"]'),
      );
      const doorEls = allDoorEls.filter(
        (el) => !el.classList.value.includes("lock"),
      );

      const outlineEls = svgRef.current.querySelectorAll('[class*="frame"]');
      const doubleEls = svgRef.current.querySelectorAll('[class*="double"]');

      const lockEls = svgRef.current.querySelectorAll('[class*="lock"]');
      const holeEls = svgRef.current.querySelectorAll('[class*="cut-out"]');

      const allWindowEls = Array.from(
        svgRef.current.querySelectorAll<SVGElement>('[class*="window"]'),
      );
      const windowEls = allWindowEls.filter(
        (el) => !el.classList.value.includes("door"),
      );

      const tl = gsap.timeline();

      // When progress reaches 20 (Module1BuildingFoundation completed)
      if (progress >= 80) {
        tl.to([...windowEls], {
          fill: "#fff",
          stroke: "#222f5f",
          strokeWidth: 0.5,
        });
      } else if (progress >= 60) {
        tl.to([...stairEls, ...foundationEls, ...doorEls, ...lockEls], {
          fill: "#ffffff",
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        })
          .to(
            [...verticalEls],
            {
              stroke: "#222f5f",
              fill: "#222f5f",
            },
            "<",
          )
          .to(
            [...lockEls],
            {
              stroke: "#222f5f",
              fill: "#222f5f",
            },
            "<",
          )
          .to(
            [...Array.from(outlineEls)],
            {
              stroke: "#222f5f",
              strokeWidth: 2,
            },
            "<",
          )
          .to(
            [...Array.from(doubleEls)],
            {
              stroke: "#222f5f",
              strokeWidth: 9,
            },
            "<",
          )
          .to([...holeEls], {
            fill: "#222f5f",
            stroke: "#222f5f",
            strokeWidth: 5,
          });
      } else if (progress >= 40) {
        tl.to([...stairEls, ...foundationEls, ...doorEls], {
          fill: "#ffffff",
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        })
          .to(
            [...verticalEls],
            {
              stroke: "#222f5f",
              fill: "#222f5f",
            },
            "<",
          )
          .to(
            [...lockEls],
            {
              stroke: "#222f5f",
              fill: "#222f5f",
            },
            "<",
          )
          .to(
            [...Array.from(outlineEls)],
            {
              stroke: "#222f5f",
              strokeWidth: 2,
            },
            "<",
          )
          .to(
            [...Array.from(doubleEls)],
            {
              stroke: "#222f5f",
              strokeWidth: 9,
            },
            "<",
          );
      } else if (progress >= 20) {
        tl.to([...stairEls, ...foundationEls], {
          fill: "#ffffff",
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    },
    { scope: svgRef, dependencies: [progress] }, // Triggers whenever progress changes
  );

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 887.21 605.92"
      className={className ? className : ""}
    >
      <defs xmlns="http://www.w3.org/2000/svg">
        <style>
          {`

    //   .cls-2.nav-bulding-stroke, .cls-3.door, .cls-3.door-window, .cls-3.door-window-vertical-line, .cls-3.door-inner-frame, .cls-3.door-lock, .cls-3.foundation-left, .cls-3.foundation-right, .cls-4.nav-bulding-stroke.stair-first, .cls-4.nav-bulding-stroke.stair-second, .cls-4.nav-bulding-stroke.stair-third, .cls-4.nav-bulding-stroke.stair-fourth {
    //     fill: #fff;
    //   }

    //   .cls-2.nav-bulding-stroke, .cls-4.nav-bulding-stroke {
    //     stroke: #fff;
    //     stroke-miterlimit: 10;
    //     stroke-width: 4px
    //   }

    //   .cls-4.nav-bulding-stroke, .cls-6 {
    //     fill: none;
    //   }

          .cls-2.nav-bulding-stroke,
      .cls-3.beam-top, 
      .cls-3.container, 
      .cls-3.door-window, 
      .cls-3.door-window-vertical-line, 
      .cls-3.door-inner-frame, 
      .cls-3.door-lock, 
      .cls-3.foundation-left, 
      .cls-3.foundation-right, 
      .cls-4.nav-bulding-stroke.stair-first, 
      .cls-4.nav-bulding-stroke.stair-second, 
      .cls-4.nav-bulding-stroke.stair-third, 
      .cls-4.nav-bulding-stroke.stair-fourth {
        fill: transparent;
        stroke: #fff;
        stroke-width: 4px
      }

      .cls-2.nav-bulding-stroke, 
      .cls-4.nav-bulding-stroke {
        stroke: #fff;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }

      .cls-4.nav-bulding-stroke, .cls-6 {
        fill: none;
      }

`}
        </style>
      </defs>
      <g>
        <path
          className="cls-4 nav-bulding-stroke"
          d="M185.95,163.54c6.09-1.05,11.36,3.37,11.74,8.56-.92,3.26.49,3.77,2.67,5.19,5.56,3.62,8.04,9.94,9.59,16.12l-202.1.54,178.1-30.41Z"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="4.48 209.68 .66 195.97 211.04 195.87 211.26 208.83 4.48 209.68"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M14.46,217.14c-2.95-2.7-7.27-4.77-8.91-5.05-.02,0-.01-.04.01-.04l205.77-1.36v6.11s-196.87.33-196.87.33Z"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="17.52 220.05 16.74 219.36 211.08 219.14 211.08 220.05 17.52 220.05"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="19.38 248.88 19.33 222.48 205.79 222.81 209.78 237.79 209.52 248.66 19.38 248.88"
        />
        <path
          className="cls-4 foundation-left"
          d="M204.5,536.17H20.65s-.19-36.18-.19-36.18c-.36-.44-.17-1.15.8-1.15l185.73.78c.94,0,1.18.67,1.12,1.16-.96,2.24-3.4,3.93-3.42,6.93l-.19,28.46Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M20.18,498.84l-.77-249.96,189.43-.22.02,6.99c3.08,1.78,5.65,4.15,6.41,8.17,1.45,4.45-1.34,5.6-1.18,8.23-.08,2.93,1.28,5.04,1.28,5.04l-2.18,222.55-193.01-.79Z"
        />
        <polygon
          className="cls-3 foundation-left"
          points="161.32 590.3 14.16 590.26 14.04 536.18 204.5 536.17 204.61 552.42 190.8 552.45 190.62 569.95 176.94 569.94 176.72 588.07 164.23 588 161.32 590.3"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M246.07,266.45l-30.31-.06c-.52-3.32-1.09-5.95-3.44-8.29l36.51.05c-1.81,2.6-2.51,4.09-2.76,8.29Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M215.65,269.2l29.78.1c.43,0,.83.25,1.02.64,1.24,2.53.37,4.5-.2,5.38-.21.32-.56.51-.94.51l-29.56.03c-.3,0-.59-.1-.79-.32-1.14-1.23-1.13-4.73-.15-5.96.2-.25.52-.38-.85-.38Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M215.36,277.46l30.35.09s2.26,222.05,2.26,222.05l-34.77.04,2.17-222.18Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M247.76,502.51c1.16,0,2.13,2.11,2.48,3.69l-39.32.05c.15-1.13.7-3.77,2.21-3.77l34.64.02Z"
        />
        <rect
          className="cls-4 foundation-left"
          x="207.63"
          y="508.52"
          width="45.9"
          height="25.83"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="208.86"
          y="248.54"
          width="43.45"
          height="6.91"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M318.11,266.45l-30.31-.06c-.52-3.32-1.09-5.95-3.44-8.29l36.51.05c-1.81,2.6-2.51,4.09-2.76,8.29Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M287.69,269.2l29.78.1c.43,0,.83.25,1.02.64,1.24,2.53.37,4.5-.2,5.38-.21.32-.56.51-.94.51l-29.56.03c-.3,0-.59-.1-.79-.32-1.14-1.23-1.13-4.73-.15-5.96.2-.25-.52-.38-.85-.38Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M287.4,277.46l30.35.09s2.26,222.05,2.26,222.05l-34.77.04,2.17-222.18Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M319.8,502.51c1.16,0,2.13,2.11,2.48,3.69l-39.32.05c.15-1.13.7-3.77,2.21-3.77l34.64.02Z"
        />
        <rect
          className="cls-4 foundation-left"
          x="279.67"
          y="508.52"
          width="45.9"
          height="25.83"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="280.89"
          y="248.54"
          width="43.45"
          height="6.91"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="184.52 491.48 20.16 491.48 19.48 272.48 184.52 272.48 184.52 491.48"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-top-support"
          x="53.17"
          y="308.15"
          width="98.69"
          height="12.49"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-bottom-support"
          x="53.17"
          y="444.54"
          width="98.69"
          height="11.27"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="58.52"
          y="320.79"
          width="88.01"
          height="123.84"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="64.6"
          y="325.69"
          width="75.58"
          height="111.4"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="67.02"
          y="328.38"
          width="70.75"
          height="106.02"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="68.92"
          y="330.22"
          width="66.95"
          height="102.21"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-1"
          x="72.26"
          y="332.55"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-2"
          x="93.74"
          y="332.55"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-3"
          x="115.22"
          y="332.55"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-4"
          x="72.26"
          y="357.85"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-5"
          x="93.74"
          y="357.85"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-6"
          x="115.22"
          y="357.85"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-7"
          x="72.26"
          y="383.28"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-8"
          x="93.74"
          y="383.28"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-9"
          x="115.22"
          y="383.28"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-10"
          x="72.26"
          y="408.83"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-11"
          x="93.74"
          y="408.83"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-left-tile-12"
          x="115.22"
          y="408.83"
          width="17.5"
          height="21.34"
        />
        <rect
          className="cls-4 nav-bulding-stroke stair-first"
          x="208.39"
          y="537.88"
          width="470.44"
          height="14.54"
        />
        <rect
          className="cls-4 nav-bulding-stroke stair-second"
          x="194.94"
          y="555.4"
          width="497.33"
          height="14.54"
        />
        <rect
          className="cls-4 nav-bulding-stroke stair-third"
          x="181.01"
          y="573.41"
          width="525.18"
          height="14.54"
        />
        <rect
          className="cls-4 nav-bulding-stroke stair-fourth"
          x="165.17"
          y="590.88"
          width="556.88"
          height="14.54"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="212.93"
          y="240.7"
          width="461.34"
          height="6.6"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="674.22 239.38 677.91 222.49 209.3 222.49 212.99 239.38 674.22 239.38"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="214.16"
          y="200.23"
          width="458.89"
          height="19.78"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="214.14"
          y="195.16"
          width="458.93"
          height="3.01"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M674.53,193.22c1.22-6.09,3.96-11.19,8.35-16.92H204.33c4.39,5.73,7.13,10.83,8.35,16.92h461.85Z"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="196.96"
          y="163.11"
          width="493.3"
          height="2.88"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="199.96"
          y="167.79"
          width="487.29"
          height="5.9"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M701.26,163.54c-6.09-1.05-11.36,3.37-11.74,8.56.92,3.26-.49,3.77-2.67,5.19-5.56,3.62-8.04,9.94-9.59,16.12l202.1.54-178.1-30.41Z"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="882.73 209.68 886.55 195.97 676.17 195.87 675.95 208.83 882.73 209.68"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M872.75,217.14c2.95-2.7,7.27-4.77,8.91-5.05.02,0,.01-.04-.01-.04l-205.77-1.36v6.11s196.87.33,196.87.33Z"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="869.69 220.05 870.47 219.36 676.13 219.14 676.13 220.05 869.69 220.05"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="867.83 248.88 867.88 222.48 681.42 222.81 677.43 237.79 677.69 248.66 867.83 248.88"
        />
        <path
          className="cls-4 foundation-right"
          d="M682.7,536.17h183.85s.19-36.18.19-36.18c.36-.44.17-1.15-.8-1.15l-185.73.78c-.94,0-1.18.67-1.12,1.16.96,2.24,3.4,3.93,3.42,6.93l.19,28.46Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M867.03,498.84l.77-249.96-189.43-.22-.02,6.99c-3.08,1.78-5.65,4.15-6.41,8.17-1.45,4.45,1.34,5.6,1.18,8.23.08,2.93-1.28,5.04-1.28,5.04l2.18,222.55,193.01-.79Z"
        />
        <polygon
          className="cls-3 foundation-right"
          points="725.89 590.3 873.05 590.26 873.17 536.18 682.7 536.17 682.6 552.42 696.41 552.45 696.59 569.95 710.27 569.94 710.49 588.07 722.98 588 725.89 590.3"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M641.14,266.45l30.31-.06c.52-3.32,1.09-5.95,3.44-8.29l-36.51.05c1.81,2.6,2.51,4.09,2.76,8.29Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M671.56,269.2l-29.78.1c-.43,0-.83.25-1.02.64-1.24,2.53-.37,4.5.2,5.38.21.32.56.51.94.51l29.56.03c.3,0,.59-.1.79-.32,1.14-1.23,1.13-4.73.15-5.96-.2-.25-.52-.38-.85-.38Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M671.85,277.46l-30.35.09s-2.26,222.05-2.26,222.05l34.77.04-2.17-222.18Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M639.45,502.51c-1.16,0-2.13,2.11-2.48,3.69l39.32.05c-.15-1.13-.7-3.77-2.21-3.77l-34.64.02Z"
        />
        <rect
          className="cls-4 foundation-right"
          x="633.68"
          y="508.52"
          width="45.9"
          height="25.83"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="634.91"
          y="248.54"
          width="43.45"
          height="6.91"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M569.1,266.45l30.31-.06c.52-3.32,1.09-5.95,3.44-8.29l-36.51.05c1.81,2.6,2.51,4.09,2.76,8.29Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M599.52,269.2l-29.78.1c-.43,0-.83.25-1.02.64-1.24,2.53-.37,4.5.2,5.38.21.32.56.51.94.51l29.56.03c.3,0,.59-.1.79-.32,1.14-1.23,1.13-4.73-.15-5.96-.2-.25-.52-.38-.85-.38Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M599.81,277.46l-30.35.09s-2.26,222.05-2.26,222.05l34.77.04-2.17-222.18Z"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M567.41,502.51c-1.16,0-2.13,2.11-2.48,3.69l39.32.05c-.15-1.13-.7-3.77-2.21-3.77l-34.64.02Z"
        />
        <rect
          className="cls-4 foundation-right"
          x="561.64"
          y="508.52"
          width="45.9"
          height="25.83"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="562.87"
          y="248.54"
          width="43.45"
          height="6.91"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="702.69 491.48 867.05 491.48 867.73 272.48 702.69 272.48 702.69 491.48"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-top-support"
          x="735.34"
          y="308.15"
          width="98.69"
          height="12.49"
          transform="translate(1569.3809 628.7904) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-bottom-support"
          x="735.34"
          y="444.54"
          width="98.69"
          height="11.27"
          transform="translate(1569.3809 900.3564) rotate(-180)"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="740.69"
          y="320.79"
          width="88.01"
          height="123.84"
          transform="translate(1569.3809 765.4285) rotate(-180)"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="747.03"
          y="325.69"
          width="75.58"
          height="111.4"
          transform="translate(1569.636 762.7679) rotate(-180)"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="749.44"
          y="328.38"
          width="70.75"
          height="106.02"
          transform="translate(1569.636 762.7679) rotate(-180)"
        />
        <rect
          className="cls-4 nav-bulding-stroke"
          x="751.34"
          y="330.22"
          width="66.95"
          height="102.21"
          transform="translate(1569.636 762.6641) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-1"
          x="797.45"
          y="332.55"
          width="17.5"
          height="21.34"
          transform="translate(1612.399 686.4405) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-2"
          x="775.97"
          y="332.55"
          width="17.5"
          height="21.34"
          transform="translate(1569.439 686.4405) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-3"
          x="754.49"
          y="332.55"
          width="17.5"
          height="21.34"
          transform="translate(1526.4791 686.4405) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-4"
          x="797.45"
          y="357.85"
          width="17.5"
          height="21.34"
          transform="translate(1612.399 737.0409) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-5"
          x="775.97"
          y="357.85"
          width="17.5"
          height="21.34"
          transform="translate(1569.439 737.0409) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-6"
          x="754.49"
          y="357.85"
          width="17.5"
          height="21.34"
          transform="translate(1526.4791 737.0409) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-7"
          x="797.45"
          y="383.28"
          width="17.5"
          height="21.34"
          transform="translate(1612.399 787.8969) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-8"
          x="775.97"
          y="383.28"
          width="17.5"
          height="21.34"
          transform="translate(1569.439 787.8969) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-9"
          x="754.49"
          y="383.28"
          width="17.5"
          height="21.34"
          transform="translate(1526.4791 787.8969) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-10"
          x="797.45"
          y="408.83"
          width="17.5"
          height="21.34"
          transform="translate(1612.399 839.0085) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-11"
          x="775.97"
          y="408.83"
          width="17.5"
          height="21.34"
          transform="translate(1569.439 839.0085) rotate(-180)"
        />
        <rect
          className="cls-2 nav-bulding-stroke window-right-tile-12"
          x="754.49"
          y="408.83"
          width="17.5"
          height="21.34"
          transform="translate(1526.4791 839.0085) rotate(-180)"
        />
        <polygon
          className="cls-3 beam-top"
          points="462.72 105.4 424.16 105.4 410.51 0 476.38 0 462.72 105.4"
        />
        <path
          className="cls-4 nav-bulding-stroke"
          d="M619.45,159.16c-40.77-18.1-81.74-38.13-123.63-55.43-10.02-4.55-20.39-9.46-30.86-14.9l1.1-9.03,176.15,80.23-398.8.02,119.5-53.89,57.9-26.57c.28,1.99,1.35,10.39,1.35,10.39-49.83,22.85-97.51,43.79-147.59,67.46-1.82.91-2.73.91-4.35,1.35"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="468.08 64.05 466.69 75.39 650.38 160.02 681.09 160.03 468.08 64.05"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="418.81 64.11 205.96 159.93 235.95 160.23 420.24 75.13 418.81 64.11"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="468.64 59.86 698.38 162.69 698.28 151.76 470 49.22 468.64 59.86"
        />
        <polygon
          className="cls-4 nav-bulding-stroke"
          points="416.91 49.45 189.16 151.53 189.37 162.69 418.29 60.08 416.91 49.45"
        />
      </g>
      <g className="cls-1">
        <path
          className="cls-3 container"
          d="M502.43,536.7h-103.49v-164.9h-7.61l.06-.4c.02-.12,1.93-12.21,10.17-24.12,7.6-11.01,22.3-24.13,49.12-24.13s42.06,13.12,49.54,24.13c8.1,11.92,9.74,24.01,9.75,24.13l.05.39h-7.6v164.9Z"
        />
      </g>
      <path
        className="cls-4 nav-bulding-stroke door"
        d="M502.43,536.7h-103.49v-164.9h-7.61l.06-.4c.02-.12,1.93-12.21,10.17-24.12,7.6-11.01,22.3-24.13,49.12-24.13s42.06,13.12,49.54,24.13c8.1,11.92,9.74,24.01,9.75,24.13l.05.39h-7.6v164.9Z"
      />
      <path
        className="cls-3 door-window"
        d="M494.3,366.44h-87.24l.06-.4c.01-.08,1.42-8.49,7.47-16.77,5.59-7.65,16.38-16.76,36.08-16.76s30.9,9.11,36.39,16.76c5.95,8.28,7.16,16.69,7.17,16.77l.05.4Z"
      />
      <path
        className="cls-4 nav-bulding-stroke frame-outline"
        d="M494.3,366.44h-87.24l.06-.4c.01-.08,1.42-8.49,7.47-16.77,5.59-7.65,16.38-16.76,36.08-16.76s30.9,9.11,36.39,16.76c5.95,8.28,7.16,16.69,7.17,16.77l.05.4Z"
      />
      <rect
        className="cls-5 vertical-line"
        x="450.33"
        y="332.05"
        width=".7"
        height="25.32"
      />
      <path
        className="semicircle"
        d="M441.76,366.09c0-4.92,4-8.92,8.92-8.92s8.93,4,8.93,8.92h-17.85Z"
        fill="#222f5f"
        stroke="#fff"
      />
      <path
        className="cls-3 double"
        d="M487.37,524.99h-73.96v-132.43h73.96v132.43ZM416.07,522.7h68.82v-127.84h-68.82v127.84Z"
      />
      <path
        className="cls-4 door"
        d="M487.37,524.99h-73.96v-132.43h73.96v132.43ZM416.07,522.7h68.82v-127.84h-68.82v127.84Z"
      />
      <path
        className="cls-3"
        d="M465.24,448.75h-1.33v-4.12c0-1.96-.39-3.87-1.14-5.66-.73-1.73-1.78-3.29-3.12-4.62-1.34-1.33-2.89-2.38-4.62-3.12-1.8-.76-3.7-1.14-5.66-1.14s-3.87.39-5.66,1.14c-1.73.73-3.29,1.78-4.62,3.12-1.33,1.33-2.38,2.89-3.12,4.62-.76,1.8-1.14,3.7-1.14,5.66v4.12h-1.47c-2.15,0-3.9,1.74-3.9,3.88v22.95c0,2.14,1.75,3.88,3.9,3.88h31.89c2.15,0,3.9-1.74,3.9-3.88v-22.95c0-2.14-1.75-3.88-3.9-3.88M436.24,444.63c0-1.77.35-3.49,1.03-5.11.66-1.56,1.61-2.97,2.81-4.17,1.2-1.2,2.61-2.15,4.17-2.81,1.62-.69,3.34-1.03,5.11-1.03s3.49.35,5.11,1.03c1.56.66,2.97,1.61,4.17,2.81,1.2,1.2,2.15,2.61,2.81,4.17.68,1.62,1.03,3.34,1.03,5.11v4.13h-4.93v-4.13c0-4.52-3.67-8.19-8.19-8.19s-8.19,3.67-8.19,8.19v4.13h-4.93v-4.13ZM456.13,448.76h-13.54v-4.13c0-3.73,3.04-6.77,6.77-6.77s6.77,3.04,6.77,6.77v4.13ZM467.71,475.58c0,1.35-1.11,2.46-2.47,2.46h-31.89c-1.36,0-2.47-1.1-2.47-2.46v-22.95c0-1.35,1.11-2.46,2.47-2.46h1.47s.71,0,.71,0h28.39s1.33,0,1.33,0c1.36,0,2.47,1.1,2.47,2.46v22.95Z"
      />
      <path
        className="cls-3 cut-out"
        d="M452.75,463.04c.43-.66.66-1.43.66-2.22,0-2.26-1.85-4.1-4.12-4.1s-4.12,1.84-4.12,4.1c0,.79.23,1.56.66,2.22.32.49.73.9,1.21,1.21l-1.27,7.25h7.03l-1.27-7.25c.48-.31.9-.73,1.21-1.21M450.45,463.23l-.49.23,1.15,6.61h-3.64l1.15-6.61-.49-.23c-.93-.44-1.54-1.39-1.54-2.42,0-1.47,1.21-2.67,2.69-2.67s2.69,1.2,2.69,2.67c0,1.03-.6,1.97-1.54,2.42"
      />
      <path
        className="cls-3 lock"
        d="M441.14,444.75c0-4.56,3.71-8.27,8.27-8.27s8.27,3.71,8.27,8.27v4.17h4.98v-4.17c0-1.79-.35-3.52-1.04-5.16-.67-1.58-1.62-3-2.84-4.21-1.22-1.22-2.63-2.17-4.21-2.84-1.64-.69-3.37-1.04-5.16-1.04s-3.53.35-5.16,1.04c-1.58.67-3,1.62-4.21,2.84-1.22,1.22-2.17,2.63-2.84,4.21-.69,1.64-1.04,3.37-1.04,5.16v4.17h4.98v-4.17Z"
      />
      <path
        className="cls-3 lock"
        d="M465.45,450.36h-1.34s-29.39,0-29.39,0h0s-1.48,0-1.48,0c-1.38,0-2.5,1.11-2.5,2.48v23.18c0,1.37,1.12,2.48,2.5,2.48h32.21c1.38,0,2.5-1.11,2.5-2.48v-23.18c0-1.37-1.12-2.48-2.5-2.48M452.9,471.89h-7.1l1.28-7.32c-.49-.32-.91-.73-1.22-1.23-.43-.67-.66-1.44-.66-2.24,0-2.28,1.86-4.14,4.16-4.14s4.16,1.86,4.16,4.14c0,.8-.23,1.57-.66,2.24-.32.49-.74.91-1.22,1.23l1.28,7.32Z"
      />
      <path
        className="cls-3 lock"
        d="M467.97,447.97h-1.55v-4.82c0-2.29-.45-4.52-1.34-6.61-.43-1.01-.95-1.97-1.56-2.87-.61-.9-1.3-1.75-2.08-2.52-1.56-1.56-3.38-2.78-5.4-3.64-2.1-.89-4.32-1.34-6.62-1.34s-4.52.45-6.61,1.34c-2.02.85-3.84,2.08-5.4,3.64-1.56,1.56-2.78,3.38-3.64,5.4-.89,2.1-1.34,4.32-1.34,6.61v4.82h-1.71c-2.51,0-4.55,2.03-4.55,4.53v26.8c0,2.5,2.04,4.53,4.55,4.53h37.24c2.51,0,4.55-2.03,4.55-4.53v-26.8c0-2.5-2.04-4.53-4.55-4.53M469.39,476.02c0,2.16-1.77,3.92-3.94,3.92h-32.21c-2.17,0-3.94-1.76-3.94-3.92v-23.18c0-2.16,1.77-3.92,3.94-3.92h1.48v-4.16c0-1.98.39-3.91,1.16-5.72.74-1.75,1.8-3.32,3.15-4.67,1.35-1.35,2.92-2.41,4.67-3.15,1.81-.77,3.74-1.16,5.72-1.16s3.91.39,5.72,1.16c1.75.74,3.32,1.8,4.67,3.15.67.67,1.28,1.4,1.8,2.18.53.78.98,1.61,1.35,2.49.77,1.81,1.16,3.74,1.16,5.72v4.16h1.34c2.17,0,3.94,1.76,3.94,3.92v23.18Z"
      />
    </svg>
  );
}
