import { s } from "./Forecasts.style";
import { Txt } from "../../components/Txt/Txt";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
// import cloudImg from

export function Forecasts({}) {
  const { params } = useRoute();
  return (
    <>
      <Header city={params.city} />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={3}
      />
      <ForecastListItem
        image={require("../../assets/clouds.png")}
        day={"MON"}
        date={"03/11"}
        temperature={32}
      />
    </>
  );
}
