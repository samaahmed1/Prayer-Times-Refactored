import Prayer from "../Prayer";
import { cities } from "./data";
import { formatTime } from "./utils";
import { fetchPrayerData } from "./api";
import { useState, useEffect } from "react";

type Timings = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

const Card = () => {
  const [prayersTime, setPrayersTime] = useState<Timings>({} as Timings);
  const [prayerDate, setPrayerDate] = useState("");
  const [city, setCity] = useState("Monufia");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPrayerData(city);
      setPrayersTime(data.timings);
      setPrayerDate(data.hijriDate);
    };
    getData();
  }, [city]);

  const handleCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <section>
      <div className="container w-[330px] sm:w-[650px] bg-[#332a224e] py-7 px-5 rounded-md border-2 border-[#d7d7d74e] text-white backdrop-blur-sm font-sans">
        <div className="top border-b-2 border-[rgba(215,215,215,0.31)] flex justify-between items-center gap-5 flex-col sm:flex-row text-center sm:text-end pb-7">
          <div className="flex justify-between w-full sm:w-fit flex-row-reverse sm:flex-col gap-3">
            <h2 className="text-xl">التاريخ</h2>
            <p className="text-md font-semibold">{prayerDate}</p>
          </div>
          <div className="flex justify-between w-full sm:w-fit flex-row-reverse sm:flex-col gap-3">
            <h2 className="text-xl">المدينة</h2>
            <select className="text-md outline-0 bg-[#a34d36] border-1 border-[#d7d7d74e] rounded-sm w-[200px] p-2" name="city" id="city" onChange={handleCity}>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="bottom pt-7 text-xl flex flex-col gap-3">
          <Prayer name=":الفجر" time={formatTime(prayersTime.Fajr)} />
          <Prayer name=":الظهر" time={formatTime(prayersTime.Dhuhr)} />
          <Prayer name=":العصر" time={formatTime(prayersTime.Asr)} />
          <Prayer name=":المغرب" time={formatTime(prayersTime.Maghrib)} />
          <Prayer name=":العشاء" time={formatTime(prayersTime.Isha)} />
        </div>
      </div>
    </section>
  );
};

export default Card;
