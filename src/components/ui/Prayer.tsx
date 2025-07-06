type PrayerProps = {
  name: string;
  time: string;
};
const Prayer = ({ name, time }: PrayerProps) => {
  return (
    <>
      <div className="flex flex-row-reverse justify-between items-center border-1 border-[#d7d7d74e] bg-[#a34d36] rounded-sm py-2 px-3">
        <span>{name}</span>
        <span>{time}</span>
      </div>
    </>
  );
};

export default Prayer;
