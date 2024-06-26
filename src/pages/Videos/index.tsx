import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import axios from "axios";
import ImageWithFallback from "../../components/ImageWithFallback";
import { Button, Chip, Switch, TableCell } from "@mui/material";
import { VideoResponseData } from "../../model/movie";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

interface RowData {
  video: string;
  name: string;
  date: string;
  views: number;
  comments: number;
  isPublic: boolean;
  process: string;
  tags: string[];
}

export default function Videos() {
  const { data } = useQuery(["movies"], async () => {
    return axios.get<VideoResponseData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
      {
        params: {
          languageCode: "en",
        },
      },
    );
  });

  let rows: RowData[] = [];
  if (data?.data) {
    rows = data?.data?.data.map((item) => {
      return {
        video: item.coverPictureUrl,
        name: item.name,
        date: item.updatedAt,
        views: 0,
        comments: 0,
        isPublic: true,
        process: item.status,
        tags: item.videoTags.map((tag) => tag.value),
      };
    });
  }

  return (
    <div className="p-8">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Video</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Views</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Tags</TableCell>
              <TableCell align="right">Public</TableCell>
              <TableCell align="right">Process</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <ImageWithFallback
                    className="h-20 w-14"
                    src={row.video}
                    fallbackSrc="/images/bg-sign-in.jpeg"
                    alt="video"
                  />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  {new Date(row.date).toDateString()}
                </TableCell>
                <TableCell align="right">{row.views}</TableCell>
                <TableCell align="right">{row.comments}</TableCell>
                <TableCell className="space-x-1" align="right">
                  {row.tags.map((tag) => (
                    <Chip key={tag} label={tag} variant="outlined" />
                  ))}
                </TableCell>
                <TableCell align="right">
                  <Switch defaultChecked={row.isPublic} />
                </TableCell>
                <TableCell align="right">{row.process}</TableCell>
                <TableCell align="right">
                  <Button variant="text">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
