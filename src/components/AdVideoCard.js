import VideoCard from "./VideoCard";

const AdVideoCard = ({ info }) => {
  return (
    <div className=" ">
      <VideoCard info={info} ad={"sponsored"} />
    </div>
  );
};

export default AdVideoCard;
