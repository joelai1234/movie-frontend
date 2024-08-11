import { Button, Popover, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { VideoCategory } from "../../model/movie";
import { categoryList } from "../../data/movies";
import useMoviesWithFavoriteQuery from "../../hooks/useMoviesQuery";

interface BannerProps {
  category: VideoCategory;
  setCategory: (category: VideoCategory) => void;
}

export default function Banner({ category, setCategory }: BannerProps) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data: totalViewsData } = useMoviesWithFavoriteQuery({
    language: "en",
    sortBy: "TOTAL_VIEWS",
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);

  const id = open ? "category-popper" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative mb-0 h-full max-h-[600px] pb-0">
      <img
        className="mb-0 block h-[600px] w-full object-cover pb-0"
        src={totalViewsData?.[0]?.coverPictureUrl}
        alt="banner"
      />
      <div className="absolute left-6 top-16 z-40">
        <Button
          className="border-white/40 px-5 text-white"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          onClick={handleClick}
        >
          Category: {category.toLocaleLowerCase()}
        </Button>
        <Popover
          style={{
            zIndex: 1000,
          }}
          id={id}
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
            {categoryList.map((item) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCategory(item.value);
                  handleClose();
                }}
                key={item.value}
              >
                {item.name}
              </div>
            ))}
          </div>
        </Popover>
      </div>
      <div
        className="absolute left-0 top-0 z-10 h-[600px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 80%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 z-20 w-full px-14 py-10">
        <Typography className="font-medium" variant="h2">
          {totalViewsData?.[0]?.videoDetail.title}
        </Typography>
        <Typography className="line-clamp-3 max-w-[600px]" variant="h5">
          {totalViewsData?.[0]?.videoDetail.description}
        </Typography>
        <Button
          size="large"
          className="mt-8 rounded-full bg-red-600 px-10 py-2 text-white"
          onClick={() => {
            navigate(`/detail/${totalViewsData?.[0]?.id}`);
          }}
        >
          See more
        </Button>
      </div>
    </div>
  );
}
