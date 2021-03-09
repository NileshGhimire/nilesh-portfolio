import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { portfolioData } from "../../storage/PortfolioData";
const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 350,
    margin: "4rem",
    borderRadius: "1rem",
    backgroundColor: "lightgray",
  },
  cardImage: {
    objectFit: "cover",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center" alignItems="center">
          {portfolioData.map((item, key) => (
            <>
              <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                  <CardActionArea key={key}>
                    <CardMedia
                      component="img"
                      alt="project1"
                      height="150"
                      image={item.image}
                      className={classes.cardImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {item.heading}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Live Demo
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
