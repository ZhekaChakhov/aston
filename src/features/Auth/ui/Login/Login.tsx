import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "src/app/providers/store/config/hooks";
import { login } from "src/features/Auth/model";

import { Form } from "../Form/Form";

interface Data {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  const onSubmit = async (data: Data) => {
    try {
      const response = await dispatch(login(data)).unwrap();
      if (response) {
        navigate("/");
      }
    } catch (err) {
      setError(err as string);
    }
  };

  return (
    <div>
      {error && <h2 className="text-lg">{error}</h2>}
      <Form onSubmit={onSubmit} text="Log in" />
    </div>
  );
};
