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
import { blue } from "@mui/material/colors";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }} id="card_active">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {/* {obj.category[0].toUpperCase()} */}R
          </Avatar>
        }
        action={
          // <Link to={`/details/${obj.id}`}>
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          // {/* </Link> */}
        }
        // title={obj.title}
        // subheader={obj.model}
        title="Apple"
        subheader="13 pro max"
      />
      <CardMedia
        component="img"
        height="280"
        image="https://softech.kg/image/cache/46148fda07614998a56cbb35a0ca760c.png"
        alt="apple"
        // image={obj.img1}
        // alt={obj.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className="cardText">
          {/* {obj.description} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum
          accusantium mollitia ad voluptatibus, atque impedit. Voluptates
          quibusdam autem nam!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BookmarkBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
