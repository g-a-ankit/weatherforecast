import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "@material-ui/core";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import { WiCelsius, WiHumidity, WiStrongWind } from "weather-icons-react";
import { IconList } from "../constants";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(150, 150, 150, 0.6)",
    borderColor: "black",
    borderWidth: "10px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    padding: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default function LocationCard({
  name,
  lat,
  lon,
  temp,
  pressure,
  humidity,
  speed,
  main,
  description,
  deleteLoc,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon
              onClick={() => {
                deleteLoc(name);
              }}
            ></DeleteIcon>
          </IconButton>
        }
        title={name}
        subheader={
          <Link
            style={{ cursor: "pointer" }}
            to={`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`}
            onClick={() => {
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
                "_blank"
              );
            }}
          >
            View on Map
          </Link>
        }
      />

      <CardContent>
        <Typography variant="body1" className={classes.icon}>
          {bull} Weather: {main} {IconList(main)}
        </Typography>
        <Typography variant="body1" className={classes.icon}>
          {bull} Description: {description}
        </Typography>
        <Typography variant="body1" className={classes.icon}>
          {bull} Temp = {temp}
          <WiCelsius size={40} />
        </Typography>
        <Typography variant="body1" className={classes.icon}>
          {bull} Pressure = {`${pressure} hPa`}
        </Typography>
        <Typography variant="body1" className={classes.icon}>
          {bull} Humidity = {humidity}
          <WiHumidity size={40} />
        </Typography>
        <Typography variant="body1" className={classes.icon}>
          {bull} Wind Speed = {`${speed} meter/sec`}
          <WiStrongWind size={40} />
        </Typography>

        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
