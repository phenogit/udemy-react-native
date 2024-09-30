import { s } from "./Forecasts.style";
import { Txt } from "../../components/Txt/Txt";
import { useRoute } from "@react-navigation/native";

export function Forecasts({}) {
  const { params } = useRoute();
  console.log(params);
  return <Txt>Forecasts</Txt>;
}
