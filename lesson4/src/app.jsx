import Avatar from "./components/avatar";

const app = () => {
  const user = {
    name: "sơn",
    role: "Student",
  };

  return (
    <>
      <h1>Hello World</h1>
      <h2>{user.name}</h2>
      <Avatar
        name={user.name}
        user={user}
        showInfo={() => console.log(user.name)}
      ></Avatar>
      ;
    </>
  );
};
export default app;
