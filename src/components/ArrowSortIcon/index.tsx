import { cn } from "../../utils/helper";

interface ArrowSortIconProps {
  className?: string;
  direction: "top" | "down" | "none";
}

export default function ArrowSortIcon({
  className,
  direction,
}: ArrowSortIconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("relative h-6 w-6", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <g clip-path="url(#clip0_150_285)">
        <path
          d="M9 3L5 6.99H8V14H10V6.99H13L9 3ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z"
          fill={direction === "top" ? "#eab308" : "white"}
        />
        <path
          d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM16 17.01V10H14V17.01H11L15 21L19 17.01H16Z"
          fill={direction === "down" ? "#eab308" : "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_150_285">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
