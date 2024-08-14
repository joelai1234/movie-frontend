import { Popover } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { cn } from "../../utils/helper";

interface SelectProps {
  className?: string;
  title: string;
  data: { label: string; value: string }[];
  onChange?: (value: string) => void;
  value?: string;
  col?: number;
  width?: number;
  p?: number;
}

export default function CustomSelect({
  className,
  title,
  data,
  onChange,
  value,
  col = 4,
  width = 420,
  p = 16,
}: SelectProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={cn("relative z-50", className)}>
      <div
        className="flex cursor-pointer items-center gap-1.5 px-2"
        onClick={handleClick}
      >
        <p className="text-sm text-white">{title}</p>
        <ExpandMoreIcon />
      </div>
      <Popover
        style={{
          zIndex: 1000,
        }}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div
          style={{
            width: width,
            backgroundColor: "#00000077",
            paddingLeft: p + 4,
            paddingRight: p + 4,
            paddingTop: p,
            paddingBottom: p,
            border: "1px solid #626262",
            borderRadius: 4,
            display: "grid",
            gridTemplateColumns: Array(col).fill("1fr").join(" "),
            gap: 8,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {data.map((item) => (
            <div
              style={{
                cursor: "pointer",
                color: item.value == value ? "#eab308" : "#fff",
                whiteSpace: "nowrap",
              }}
              onClick={() => {
                onChange?.(item.value);
                handleClose();
              }}
              key={item.value}
            >
              {item.label}
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
}
