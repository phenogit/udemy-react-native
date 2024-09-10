import { useEffect, useState } from "react";

import { s } from "./Clock.style";
import { Txt } from "../Txt/Txt";
import { nowToHHMM } from "../../utils/date-time";

export function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
      console.log(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Txt style={s.time}>{nowToHHMM()}</Txt>
    </>
  );
}
