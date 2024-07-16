import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Button, Divider, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Fragment, useState } from "react";

import CustomSelect from "../../components/CustomSelect";
import { peopleTypeOptions } from "../../data/movies";
import ImageWithFallback from "../../components/ImageWithFallback";
import ArrowSortIcon from "../../components/ArrowSortIcon";
import { RolesData } from "../../model/movie";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function SearchPeople() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [occupation, setOccupation] = useState<string>();
  const navigate = useNavigate();
  const [sortDirection, setSortDirection] = useState<"top" | "down" | 'none'>("none");

  const { data } = useQuery(["/api/v1/crews"], async () => {
    return axios.get<RolesData[]>(VITE_BACKEND_API_BASE_URL + `/api/v1/crews`);
  });

  let peopleData = data?.data.sort(
    (a, b) =>
      a.id - b.id,
  );

  if (sortDirection !== "none") {
    peopleData = data?.data.sort((a, b) => {
      if (sortDirection === "top") {
        return (
          a.name.toLowerCase().charCodeAt(0) -
          b.name.toLowerCase().charCodeAt(0)
        );
      } else {
        return (
          b.name.toLowerCase().charCodeAt(0) -
          a.name.toLowerCase().charCodeAt(0)
        );
      }
    });
  }
  if (search) {
    peopleData = peopleData?.filter(
      (data) =>
        data.name.toLowerCase().includes(search.toLowerCase()) ||
        data.roles.join(", ").toLowerCase().includes(search.toLowerCase()),
    );
  }
  if (occupation) {
    peopleData = peopleData?.filter((data) =>
      data.roles.join(", ").toLowerCase().includes(occupation.toLowerCase()),
    );
  }

  return (
    <div className="pt-[64px]">
      <div className="px-10 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-3">
            <Button
              className="normal-case text-white"
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
            <Typography variant="h4">{search}</Typography>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="flex space-x-6">
              <CustomSelect
                data={peopleTypeOptions.map((data) => ({
                  label: data.name,
                  value: data.value,
                }))}
                title={occupation || "Occupation"}
                onChange={(value) => {
                  setOccupation(value);
                }}
                value={occupation}
                col={2}
                width={234}
              />
            </div>
            <div className="flex items-center">
              <div
                className="flex cursor-pointer items-center justify-center gap-2"
                onClick={() => {
                  if (sortDirection === "top") {
                    setSortDirection("down");
                  }else if (sortDirection === "down") {
                    setSortDirection("none");
                  } else {
                    setSortDirection("top");
                  }
                }}
              >
                <Typography variant="body2">Sort by</Typography>
                <Typography
                  className="font-medium text-yellow-500"
                  variant="body2"
                >
                  A-Z
                </Typography>
                <ArrowSortIcon direction={sortDirection} />
              </div>
            </div>
          </div>
          <Divider className="mt-1 bg-white" />
          <div>
            {peopleData?.map((_data, index) => (
              <Fragment key={_data.id}>
                <div
                  className="flex cursor-pointer gap-8 py-10 transition hover:bg-white/10"
                  onClick={() => {
                    navigate(`/cast/${_data.id}`);
                  }}
                >
                  <ImageWithFallback
                    className="h-[90px] w-[90px] flex-shrink-0 flex-grow-0 object-cover"
                    src={_data.pictureUrl}
                    fallbackSrc="/images/bg-sign-in.jpeg"
                    alt="avatar"
                  />

                  <div className="space-y-3">
                    <Typography variant="body2">{_data.name}</Typography>
                    <div className="flex">
                      <div className="w-24 shrink-0">
                        <Typography className="text-gray-500" variant="body2">
                          Occupations
                        </Typography>
                      </div>
                      <div>
                        <Typography className="capitalize" variant="body2">
                          {_data.roles.join(", ").toLocaleLowerCase()}
                        </Typography>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-24 shrink-0">
                        <Typography className="text-gray-500" variant="body2">
                          Movies
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2">
                          Inside Out, Baby Mama (dev)
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
                {index < 4 && <div className="h-[1px] w-full bg-[#343434]" />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
