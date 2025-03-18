import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useUser } from "../contextApi/UsersCpntext";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const MianPage = ({ setIsModalOpen }) => {
  const { user } = useUser();
  console.log(user, "useUser");

  return (
    <div
      style={{
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginLeft: "25%",
      }}
    >
      {user.length > 0 ? (
        user?.map((use, i) => (
          <Card key={i} sx={{ width: 500 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {use?.fullName?.slice(0, 1)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={use?.fullName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={use?.imgUrl}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {use?.fourMind}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton onClick={() => setIsModalOpen(use.id)}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))
      ) : (
        <p style={{ textAlign: "center", fontSize: "32px" }}>
          No posts available at the moment.
        </p>
      )}
    </div>
  );
};

export default MianPage;
