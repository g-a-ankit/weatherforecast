import {
  WiCloudy,
  WiRain,
  WiDaySunny,
  WiThunderstorm,
  WiSnow,
} from "weather-icons-react";

const IconList = (val) => {
  switch (val) {
    case "Clouds":
      return <WiCloudy size={40} />;

    case "Rain":
      return <WiRain size={40} />;

    case "Clear":
      return <WiDaySunny size={40} />;

    case "Thunderstorm":
      return <WiThunderstorm size={40} />;

    case "Snow":
      return <WiSnow size={40} />;
  }
  // if (val === "Clouds") return <WiCloudy size={40} />;
  // if (val === "Rain") return <WiRain size={40} />;
  // if (val === "Clear") return <WiDaySunny size={40} />;
  // if (val === "Thunderstorm") return <WiThunderstorm size={40} />;
  // if (val === "Snow") return <WiSnow size={40} />;
};

const LocationList = [
  { name: "Sirsi" },
  { name: "Mysore" },
  { name: "Bengaluru" },
  { name: "Mangalore" },
  { name: "Karwar" },
  { name: "Gulbarga" },
  { name: "Shimoga" },
  { name: "Chikmagalūr" },
  { name: "Udupi" },
  { name: "Madikeri" },
  { name: "Mandya" },
];

export { LocationList, IconList };

// const LocationList = [
//   {
//     id: 1,
//     name: "Sirsi",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
//   {
//     id: 2,
//     name: "Mysore",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
//   {
//     id: 3,
//     name: "Bengaluru",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
//   {
//     id: 4,
//     name: "Shimoga",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
//   {
//     id: 5,
//     name: "Bīdar",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
//   {
//     id: 6,
//     name: "Gulbarga",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
//   {
//     id: 7,
//     name: "Karwar",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
//   {
//     id: 8,
//     name: "Mangalore",
//     lat: null,
//     lon: null,
//     temp: null,
//     pressure: null,
//     humidity: null,
//     speed: null,
//     description: null,
//     main: null,
//   },
// ];
