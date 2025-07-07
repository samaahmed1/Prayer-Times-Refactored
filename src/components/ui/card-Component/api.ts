export const fetchPrayerData = async (city: string) => {
  try {
    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity/03-09-2024?city=Eg&country=${city}`);
    const dataPrayer = await response.json();
    return {
      timings: dataPrayer.data.timings,
      hijriDate: dataPrayer.data.date.hijri.date,
    };
  } catch (error) {
    console.error("Failed to fetch prayer times:", error);
    return {
      timings: {
        Fajr: "00:00",
        Dhuhr: "00:00",
        Asr: "00:00",
        Maghrib: "00:00",
        Isha: "00:00",
      },
      hijriDate: "غير متاح",
    };
  }
};
