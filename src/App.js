import { makeStyles } from "@material-ui/core";
import LocationMetrics from "./Components/LocationMetrics/LocationMetrics";
import Try from "./Components/Try";
import Background from "./images/4.png";

const useStyles = makeStyles({
  root: {
    top: "0",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    background: `url(${Background})`,
    backgroundRepeat: " noRepeat",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LocationMetrics />
      {/* <Try /> */}
    </div>
  );
}

export default App;
