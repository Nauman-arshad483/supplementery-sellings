import React, { useEffect, useState } from "react";
import avatar from "../../../icons/avatar.png";
import {
  updatePersonalInformationRequest,
  updatePersonalInformationSuccess,
  updatePersonalInformationFailure,
  updatePasswordRequest,
} from "../../../store/features/profile/profileSlice";
import { useSelector, useDispatch } from 'react-redux'
import { storePersonalInformation } from "../../../store/actions/profileActions/profileThunks";

const FullfilmentProfile = () => {
  const [personalInformation, setPersonalInformation] = useState({
    type: "personalInformation",
    companyName: "",
    nameLastName: "",
    profileEmail: "",
    profilePhone: "",
  });
  const [avatar, setAvatar] = useState({
    type: "avatar",
    profileAvatar: "",

  });
  const [password, setPassword] = useState({
    type: "password",
    password: "",
    newPassword: "",
    confirmPassword: "",

  });
  const userProfile = useSelector(state => state.profile.personalInformation);
  const dispatch = useDispatch();

  const handleInputChangePersonalInfo = (event) => {
    console.log("evant value is", event.target.value);
    setPersonalInformation({
      ...personalInformation,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputChangeAvatar = (event) => {
    console.log("evant value is", event.target.value);
    setAvatar({
      ...avatar,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputChangePassword = (event) => {
    console.log("evant value is", event.target.value);
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
  };

  const handlePersonalInformation = (event) => {
    event.preventDefault();
    dispatch(updatePersonalInformationRequest());

    console.log("personal information...", personalInformation);

    dispatch(storePersonalInformation(personalInformation)).then(
      ({ payload, error }) => {
        if (error) {
          console.log("error comes");
          dispatch(updatePersonalInformationFailure(error));
        } else {
          console.log("userRole", userProfile);
          dispatch(updatePersonalInformationSuccess(payload));
        }
      }
    );

    console.log("personal information hit");
  }
  const handleAvatar = (event) => {
    console.log("avatar is clicked");
  }
  const handlePassword = (event) => {
    event.preventDefault();

    dispatch(updatePasswordRequest());
    
    console.log("password hitted")
    console.log("password is", password)
    console.log("password hit");


  }
  useEffect(() => {
    console.log("use effect runs");
  }, [personalInformation])

  return (
    <div>
      <h1 className="font-bold text-2xl uppercase text-gray-500 pb-10">
        My Profile and setting
      </h1>
      <div className="mt-10 ">
        <h1 className="font-bold text-md text-gray-500 pb-10">Avatar</h1>
        <div className="md:flex justify-start items-center gap-10">
          <div className="avatar mr-4">
            <div className="md:w-36 w-32 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-1">
              <img src={avatar} alt="" />
            </div>
          </div>
          <div>
            <p className="mb-10 w-full md:w-3/5 text-gray-500">
              Your avatar is one of the defining parts of your profile. It'll
              help designers or clients establish an impression of you.
            </p>
            <label
              className="bg-primary text-white rounded-xl px-7 py-3 "
              htmlFor="avatar"
            >
              <span>Upload Photo</span>
              <input className="hidden" type="file" name="" id="avatar" onChange={handleAvatar} />
            </label>
          </div>
        </div>
        <div className="my-20 w-full md:w-3/5">
          <h1 className="font-bold text-lg text-gray-500 mb-10">
            Personal Information
          </h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              <label className="text-gray-500 font-bold" htmlFor="">
                Company Name:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder=""
                name="companyName"
                id="companyName"
                onChange={handleInputChangePersonalInfo}
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Name and Lastname:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder=""
                name="nameLastName"
                id="nameLastName"
                onChange={handleInputChangePersonalInfo}
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Email:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="email"
                placeholder=""
                name="profileEmail"
                id="profileEmail"
                onChange={handleInputChangePersonalInfo}
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Phone
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="text"
                placeholder=""
                name="profilePhone"
                id="profilePhone  "
                onChange={handleInputChangePersonalInfo}
              />
            </div>
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10"
              type="submit"
              value={"Edit"}
              onClick={handlePersonalInformation}
            />
          </form>
        </div>

        <div className="my-20 w-full md:w-3/5">
          <h1 className="font-bold text-lg text-gray-500 mb-10">
            Change My Password
          </h1>
          <form>
            <div className="w-full grid grid-cols-3 gap-3">
              <label className="text-gray-500 font-bold" htmlFor="">
                Current Password:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="password"
                name="password"
                id="password"
                onChange={handleInputChangePassword} />
              <label className="text-gray-500 font-bold" htmlFor="">
                New Password:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="password"
                name="newPassword"
                id="newPassword"
                onChange={handleInputChangePassword}
              />
              <label className="text-gray-500 font-bold" htmlFor="">
                Confirm Password:
              </label>
              <input
                className="text-gray-500 p-2 w-full col-span-2"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleInputChangePassword}
              />
            </div>
            <div className="flex justify-end mt-5">
              <button className="text-gray-500 ">Forgot password</button>
            </div>
            <input
              className="bg-gray-300 text-white rounded-xl px-9 py-3 mt-10"
              type="submit"
              value={"Save"}
              onClick={handlePassword}
            />
            <input
              className="bg-gray-400 text-white rounded-xl px-9 py-3 mt-10 ml-5"
              type="submit"
              value={"Cancel"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullfilmentProfile;
