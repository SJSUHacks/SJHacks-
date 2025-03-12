import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const RightArrow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      width="47"
      height="24"
      viewBox="0 0 47 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      ref={ref}
    >
      <path
        d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM46.0607 13.0607C46.6464 12.4749 46.6464 11.5251 46.0607 10.9393L36.5147 1.3934C35.9289 0.807611 34.9792 0.807611 34.3934 1.3934C33.8076 1.97919 33.8076 2.92893 34.3934 3.51472L42.8787 12L34.3934 20.4853C33.8076 21.0711 33.8076 22.0208 34.3934 22.6066C34.9792 23.1924 35.9289 23.1924 36.5147 22.6066L46.0607 13.0607ZM2 13.5L45 13.5V10.5L2 10.5L2 13.5Z"
        fill="#FFE375"
      />
    </svg>
  )
);

RightArrow.displayName = "RightArrow";

export default RightArrow;
