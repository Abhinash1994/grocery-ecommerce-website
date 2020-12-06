import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "../../menuItem";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "lightgray" }
  },
}));

export default function Menu() {
  const classes = useStyles();
  const state = {
    label:[
        {
            name: "Ikan",
            imgUrl: "https://www.romania-insider.com/sites/default/files/styles/article_large_image/public/featured_images/fish-photo-Alfredo-Seafood.jpg"
        },
        {
            name: "Daging",
            imgUrl: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg"
        },
        {
            name: "Sayur",
            imgUrl: "https://nhncwtttsf-flywheel.netdna-ssl.com/6/wp-content/uploads/sites/29/2019/01/Eat-Vegetables.jpg"
        },
        {
            name: "Barang cucian",
            imgUrl: "https://drncvpyikhjv3.cloudfront.net/sites/204/2015/04/05212437/cleaning-supplies-header.jpg"
        }
    ],
};
  const menuItem = state.label.map(label => (
    <MenuItem label={label}/>
    ));
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={1}>
        </Grid>
        {menuItem}
      </Grid>
    </div>
  );
}
