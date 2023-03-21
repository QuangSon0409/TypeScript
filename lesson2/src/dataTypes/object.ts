enum LEVEl {
  MANAGER,
  STAFF,
}

interface User {
  id: number | string;
  name: string;
  username: string;
  password: string;
  email: string;
}
interface User {
  logout: () => void;
  login: () => void;
}
interface Admin extends User {
  id: string;
  is_admin: boolean;
  level: LEVEl.MANAGER | LEVEl.STAFF;
}
