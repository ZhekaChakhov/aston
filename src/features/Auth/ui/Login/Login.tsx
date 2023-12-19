import { useNavigate } from "react-router";
import { useAppDispatch } from "src/app/providers/store/config/hooks";
import { login } from "src/features/Auth/model";

import { Form } from "../Form/Form";

interface Credentials {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: Credentials) => {
    try {
      const response = await dispatch(login(data)).unwrap();
      if (response) {
        navigate("/");
      }
    } catch (err) {
      /* eslint-disable no-console */
      console.log(err);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit} text="Log in" />
    </div>
  );
};
