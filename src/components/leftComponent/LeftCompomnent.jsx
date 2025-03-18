import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
   


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const LeftCompomnent = () => {
  return (
    <div className="main_left">
      <h3>Online Friends</h3>
      <div className="left_avatar">
        <AvatarGroup
          renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
          total={4251}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
        </AvatarGroup>
      </div>
      <div className="left-container ">
          <h3>
          Latest Photos
          </h3>
          <div  style={{display:"flex" ,alignItems:"center", gap:"15px",flexWrap:"wrap" ,width:"310px"}}>
            <div>
                <img width={140} src="https://mui.com/static/images/image-list/breakfast.jpg" alt="" />
            </div>
            <div>
                <img width={140} src="https://mui.com/static/images/image-list/breakfast.jpg" alt="" />
            </div>
            <div>
                <img width={140} src="https://mui.com/static/images/image-list/breakfast.jpg" alt="" />
            </div>
            <div>
                <img width={140} src="https://mui.com/static/images/image-list/breakfast.jpg" alt="" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default LeftCompomnent;
