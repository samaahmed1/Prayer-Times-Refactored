import "../card/card";
import Prayer from "../Prayer";

const Card = () => {
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
              {cities.map((city) => {
                return (
                  <option key={city.value} value={city.value}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="bottom pt-7 text-xl flex flex-col gap-3">
          <Prayer name=":الفجر" time={formateTime(prayersTime.Fajr)} />
          <Prayer name=":الظهر" time={formateTime(prayersTime.Dhuhr)} />
          <Prayer name=":العصر" time={formateTime(prayersTime.Asr)} />
          <Prayer name=":المغرب" time={formateTime(prayersTime.Maghrib)} />
          <Prayer name=":العشاء" time={formateTime(prayersTime.Isha)} />
        </div>
      </div>
    </section>
  );
};

export default Card;
