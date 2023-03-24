const Avatar = (props) => {
  let { name, showInfo } = props;
  name = "bùi quang sơn";
  return (
    <div className="flex items-center">
      <h1>{name}</h1>
      <img
        className="border-2 border-red-600 rounded-[50%]"
        src="https://picsum.photos/id/237/50/50"
        alt=""
      />
      <p>FPOLY</p>
      <button onClick={showInfo} className="bg-pink-600">
        showInfo
      </button>
    </div>
  );
};
export default Avatar;
