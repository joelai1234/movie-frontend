import { Popover } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

interface SelectProps {
  title: string;
  data: { label: string; value: string }[];
  onChange?: (value: string) => void;
  value?: string;
  col?: number;
}

export default function CustomSelect({
  title,
  data,
  onChange,
  value,
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
    <div className="relative z-50">
      <div
        className="flex cursor-pointer items-center gap-1.5"
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
            width: 420,
            backgroundColor: "#00000077",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 16,
            paddingBottom: 16,
            border: "1px solid #626262",
            borderRadius: 4,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
