import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const RightArrow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      width="27"
      height="8"
      viewBox="0 0 27 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={className}
      {...props}
    >
      <path
        d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM26.3536 4.35356C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464468C22.9763 0.269206 22.6597 0.269206 22.4645 0.464468C22.2692 0.65973 22.2692 0.976313 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53554C22.6597 7.7308 22.9763 7.7308 23.1716 7.53554L26.3536 4.35356ZM1 4.5L26 4.5L26 3.5L1 3.5L1 4.5Z"
        fill="#FFE375"
      />
    </svg>
  )
);

RightArrow.displayName = "RightArrow";

export default RightArrow;
