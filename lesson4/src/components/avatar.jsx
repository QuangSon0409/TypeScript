const Avatar = (props) => {
  let { name, showInfo } = props;
  name = "bùi quang sơn";
  return (
    <div className="flex items-center">
      <h1>{name}</h1>
      <img
        src="https://picsum.photos/536/354"
        alt=""
        className="w-24 border-2 border-pink-600 rounded-[50%]"
      />
      <button
        className="rounded border-4 border-orange-200 bg-sky-500/100 p-2  m-2"
        onClick={showInfo}
      >
        Show Info
      </button>
    </div>
  );
};
export default Avatar;
