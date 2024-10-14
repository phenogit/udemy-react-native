import { s } from "./Forecasts.style";
import { Txt } from "../../components/Txt/Txt";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { Header } from "../../components/Header/Header";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { getWeatherInterpretation, DAYS } from "../../utils/meteo-utils";
// import cloudImg from

export function Forecasts({}) {
  const { params } = useRoute();

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = params.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formattedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formattedDate}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  );
}
