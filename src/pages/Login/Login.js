import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "../../store/actions/authActions/authThunks";
import { loginStart, loginSuccess } from "../../store/features/auth/authSlice";
const Login = () => {
  // const dispatch = useDispatch()
  // const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('');
  const userRole = useSelector(state => state.auth.role);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const login = () => {

    dispatch(loginStart())
    dispatch(loginUser({ email, password })).then(
      ({ payload, error }) => {
        if (error) {
          console.log("eroor comess");
        } else {
          dispatch(loginSuccess(payload));
          console.log("userRole", userRole);
        }
      }
    );
  }
  const getData = (event, id) => {
    if (id === 1) {
      setEmail(event.target.value)
    } else if (id === 2) {
      setPassword(event.target.value)
    }
    else {
      setEmail("");
      setPassword("");
    }

  }

  useEffect(() => {

    switch (userRole) {
      case 'graphic designer':
        navigate("/graphic-designer")
        break;
      case 'voip':
        navigate("/voip")
        break;
      case 'merchant':
        navigate("/merchant-processor")
        break;
      case 'afliate':
        navigate("/affiliate")
        break;
      case 'affliate manager':
        navigate("/affiliate-manager")
        break;
      case 'customer service':
        navigate("/customer-service")
        break;
      case 'complaince':
        navigate("/store-owner")
        break;

      default:
        navigate("/login")
    }

    setRole(userRole);
  }, [userRole, navigate])

  return (
    <div className="w-full h-screen flex justify-center items-center text-accent">
      <div>
        <h1 className="text-2xl text-secondary text-center my-10 font-bold">
          You have been logged out
        </h1>
        <div className="md:flex gap-10">
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img className="w-72" src="/Icons/logo.png" alt="" />
          </div>
          <div className="border-l border-secondary "></div>
          <div className="md:w-1/2 w-full md:py-10 md:px-10">
            <div className="px-5 py-8 m-5 border border-secondary rounded-md">
              {[
                { id: 1, label: "Username or Email Address", type: "text" },
                { id: 2, label: "Password", type: "password" },
              ].map((field) => (
                <div key={field.id} className="mb-5">
                  <label className="w-full mb-2 inline-block" htmlFor="">
                    {field.label}
                  </label>
                  <input
                    className="w-full py-1.5 px-3 border border-secondary"
                    type={field.type}
                    name=""
                    id=""

                    onChange={

                      (event) => {
                        getData(event, field.id)
                      }
                    }
                  />
                </div>
              ))}
              <div className="flex justify-between items-center">
                <label htmlFor="rememberMe">
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="rememberMe"
                    id=""
                  />
                  Remember Me
                </label>
                <input
                  onClick={() => {
                    login()
                    // navigate("/customer-service/chat")
                  }}
                  className="px-5 py-1.5 bg-primary text-white rounded-md cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
