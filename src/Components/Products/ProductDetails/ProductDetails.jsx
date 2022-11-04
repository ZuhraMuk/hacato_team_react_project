import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Thumbs } from "swiper";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";
// import { basketContext } from "../../../context/BasketContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Container sx={{ marginTop: "40px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Swiper
              className="mySwiper2"
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}>
              <SwiperSlide>
                <img
                  src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_720x.jpg?v=1576267132"
                  alt="apple"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/WhatsApp_Image_2019-07-25_at_1.06.36_PM_1_720x.jpeg?v=1598391125"
                  alt="apple"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/fullsizeoutput_6bcd_1_720x.jpg?v=1576267132"
                  alt="apple"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper">
              <SwiperSlide>
                <Paper elevation={3}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_720x.jpg?v=1576267132"
                    alt="apple"
                  />
                </Paper>
              </SwiperSlide>
              <SwiperSlide>
                <Paper elevation={3}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/WhatsApp_Image_2019-07-25_at_1.06.36_PM_1_720x.jpeg?v=1598391125"
                    alt="apple"
                  />
                </Paper>
              </SwiperSlide>
              <SwiperSlide>
                <Paper elevation={3}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/fullsizeoutput_6bcd_1_720x.jpg?v=1576267132"
                    alt="apple"
                  />
                </Paper>
              </SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ padding: "10px", marginTop: "40px" }}>
              <Typography variant="h4">
                {/* {productDetails.title}{" "} */}
                Apple
              </Typography>
              <Typography variant="h5">13 Pro Max</Typography>
              <hr />
              <Typography sx={{ marginTop: "30px" }}>
                {/* {productDetails.description} */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                aliquam, nisi distinctio consequatur maxime ex quos ad quis quod
                illum, eligendi numquam nostrum modi ab magnam ratione est
                suscipit omnis.
              </Typography>
              <Alert
                icon={<AttachMoneyIcon />}
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  mt: "20px",
                  display: "flex",
                  alignItems: "center",
                }}>
                Цена: 40000 сом
                <Button variant="contained" sx={{ marginLeft: "20px" }}>
                  Купить
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "20px" }}
                  // onClick={() => addProductToBasket(productDetails)}
                >
                  <AddShoppingCart />
                </Button>
              </Alert>
              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: "48%" }}
                  // onClick={() => deleteProduct(productDetails.id)}
                >
                  Delete
                </Button>
                {/* <Link
                    to={`/edit/${productDetails.id}`}
                    style={{ width: "50%" }}
                  > */}
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ width: "48%" }}
                  // onClick={() => navigate(`/edit/${productDetails.id}`)}
                >
                  Edit
                </Button>
                {/* </Link> */}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetails;
