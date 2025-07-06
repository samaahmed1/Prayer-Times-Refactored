import { useState, useEffect } from "react";

type Timings = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

const [city, setCity] = useState("Monufia");
const [prayerDate, setPrayerDate] = useState("");
const [prayersTime, setPrayersTime] = useState<Timings>({} as Timings);

const cities = [
  { value: "Monufia", name: "المنوفية" },
  { value: "Cairo", name: "القاهرة" },
  { value: "Alexandria", name: "الإسكندرية" },
  { value: "Aswan", name: "أسوان" },
  { value: "Luxor", name: "الأقصر" },
  { value: "Port Said", name: "بورسعيد" },
  { value: "Suez", name: "السويس" },
  { value: "Ismailia", name: "الإسماعيلية" },
  { value: "Tanta", name: "طنطا" },
  { value: "Minya", name: "المنيا" },
  { value: "Hurghada", name: "الغردقة" },
  { value: "Sharm El Sheikh", name: "شرم الشيخ" },
];

useEffect(() => {
  const fetchDtataPrayer = async () => {
    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity/03-09-2024?city=Eg&country=${city}`);
    const dataPrayer = await response.json();
    setPrayersTime(dataPrayer.data.timings);
    // console.log(dataPrayer.data);

    setPrayerDate(dataPrayer.data.date.hijri.date);
    // console.log(dataPrayer.data.date.hijri.date);
  };
  fetchDtataPrayer();
}, [city]);

const handleCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
  return setCity(e.target.value);
};
// console.log(city);

const formateTime = (time: string) => {
  if (!time) return "00 : 00";
  const [rawHours, rawMinutes] = time.toString().split(":").map(Number);
  let hours: number = rawHours;
  const minutes: number = rawMinutes;
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutesFinal: string = minutes < 10 ? "0" + minutes : minutes.toString();
  return `${hours} : ${minutesFinal} ${period}`;
};
