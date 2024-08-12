import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ImageWithFallback from "../../components/ImageWithFallback";
import { Chip, IconButton, Switch, TableCell } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMoviesWithFavoriteQuery from "../../hooks/useMoviesQuery";
import useAuth from "../../services/auth/hooks/useAuth";
import { useMutation } from "react-query";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface RowData {
  id: number;
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
  const { authAxios } = useAuth();
  const navigate = useNavigate();
  const { data } = useMoviesWithFavoriteQuery({
    queryKey: "my-videos",
    language: "en",
    self: true,
    sortBy: "UPDATED_AT",
  });

  let rows: RowData[] = [];
  if (data) {
    rows = data.map((item) => {
      return {
        id: item.id,
        video: item.coverPictureUrl,
        name: item.name,
        date: item.updatedAt,
        views: 0,
        comments: 0,
        isPublic: item.isPublic ?? false,
        process: item.status,
        tags: item.videoTags.map((tag) => tag.value),
      };
    });
  }

  const updateVideoIsPublicStatusMutation = useMutation(
    ({ id, isPublic }: { id: number; isPublic: boolean }) => {
      return authAxios?.put(`/api/v1/videos/${id}`, { isPublic });
    },
  );

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
                key={row.id}
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
                <TableCell className="space-x-1 space-y-1" align="right">
                  {row.tags.map((tag) => (
                    <Chip key={tag} label={tag} variant="outlined" />
                  ))}
                </TableCell>
                <TableCell align="right">
                  <Switch
                    color="warning"
                    defaultChecked={row.isPublic}
                    onChange={(_, checked) => {
                      updateVideoIsPublicStatusMutation.mutate({
                        id: row.id,
                        isPublic: checked,
                      });
                    }}
                  />
                </TableCell>
                <TableCell className="capitalize" align="right">
                  {row.process.toLowerCase()}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    size="small"
                    onClick={() => {
                      navigate(`/edit-video/${row.id}`);
                    }}
                  >
                    <EditOutlinedIcon className="text-[#E09F3E]" />
                  </IconButton>

                  {/* <Button
                    className="my-4 rounded-3xl bg-[#335C67] capitalize text-white"
                    variant="contained"
                    size="small"
                    onClick={() => {
                      navigate(`/edit-video/${row.id}`);
                    }}
                  >
                    Edit
                  </Button> */}
                  {/* <Button
                    color="warning"
                    className="capitalize"
                    variant="text"
                    onClick={() => {
                      navigate(`/edit-video/${row.id}`);
                    }}
                  >
                    Edit
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
