import React, { useEffect, useState } from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import LocationCard from "../LocationCard/LocationCard";
import axios from "axios";
import { LocationList } from "../constants";
import _ from "lodash";
const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
    cardSpacing: 2,
  },
});

const LocationMetrics = () => {
  const [loc, setLoc] = useState(LocationList);
  const [newLoc, setNewLoc] = useState({ name: "Chennai" });
  const parseRespone = (res) => {
    const {
      data: {
        name,
        coord: { lat, lon },
        weather,
        main: { temp, pressure, humidity },
        wind: { speed },
      },
    } = res;
    const [{ main, description }] = weather;
    // console.log(name, main);
    if (!loc.some((item) => item.name === name)) {
      const newLoc = { name: name };
      setLoc((loc) => loc.concat(newLoc));
    }

    setLoc((loc) =>
      loc.map((item) => {
        if (item.name === name) {
          const updatedLoc = {
            name: name,
            lat: lat,
            lon: lon,
            temp: temp,
            pressure: pressure,
            humidity: humidity,
            speed: speed,
            description: description,
            main: main,
          };
          // console.log("updating ", updatedLoc);
          return updatedLoc;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    const getdata = async () => {
      loc.forEach(async (item) => {
        const res = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${item.name},ind&units=metric&appid=dfaeadf836286ce4fed4596101283a19`
        );
        parseRespone(res);
      });
    };
    getdata();
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${newLoc.name},ind&units=metric&appid=dfaeadf836286ce4fed4596101283a19`
      );
      parseRespone(res);
    };
    getdata();
  }, [newLoc]);
  const deleteLoc = (name) => {
    // console.log("deleting ", name);
    const newLoc = loc.filter((item) => item.name !== name);
    // console.log(newLoc);
    setLoc(newLoc);
  };

  const renderAllLoc = () => {
    // console.log(loc);
    return loc.map((l) => {
      return (
        <Grid item key={l.name}>
          <LocationCard
            name={l.name}
            lat={l.lat}
            lon={l.lon}
            temp={l.temp}
            pressure={l.pressure}
            humidity={l.humidity}
            speed={l.speed}
            main={l.main}
            description={l.description}
            deleteLoc={deleteLoc}
          />
        </Grid>
      );
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header loc={newLoc} addLoc={setNewLoc} />
        <Grid container spacing={2}>
          {renderAllLoc()}
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default LocationMetrics;
