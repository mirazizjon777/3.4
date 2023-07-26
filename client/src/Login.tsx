import TLoginBtn from "react-telegram-login";

interface Ires {
  id: number;
  first_name: string;
  photo_url: string;
  auth_date: string;
  hash: string;
}

const Login = () => {
  const authCB = (res: Ires) => {
    console.log(res);
  };

  return (
    <div>
      <TLoginBtn dataOnauth={authCB} botName="groceryfirstbot"></TLoginBtn>
    </div>
  );
};

export default Login;
