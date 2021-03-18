import React, { useEffect, useState, useContext } from "react";
import s from "./auth.module.css";
import TravelAppContext from "../context/context";
import useHttp from "../../custom-hooks/useHttp";
import { useAuthContext } from "../context/auth-context";
import msgs from "./translate";

function Auth() {
  const [message, setMessage] = useState(null);
  const auth = useAuthContext(); 
  const { language, dispatch, modalType } = useContext(TravelAppContext);
  const { loading, error, request, clearError } = useHttp();
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMessage(null);
      if (message === msgs.regDone[language] || message === msgs.logDone[language]) {
        dispatch({ type: "CLOSE_MODAL" });
      }
    }, 2800);
    return () => clearTimeout(timerId);
  // eslint-disable-next-line   
  }, [message]);

  useEffect(() => {
    if (!error) {
      return;
    }
    setMessage(defineLang(msgs[error]));
    const timerId = setTimeout(() => {
      clearError(null);
    }, 2800);
    return () => clearTimeout(timerId);
  // eslint-disable-next-line   
  }, [error, clearError]);

  const defineLang = trigger => {
    return trigger ? trigger[language] : msgs.defaultMsg[language];
  }; 

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const formFilledCheck = () => {
    const filledFields = Object.values(form).filter(el => el !== '').length;
    const requiredFields = Object.keys(form).length;
    return filledFields !== requiredFields;
  };

  const registerHandler = async () => {
    if (formFilledCheck()) {
      setMessage(defineLang(msgs.noForm));
      return; 
    } else if (!previewAvatar) {
      setMessage(defineLang(msgs.noPhoto));
      return;
    }
    try {
      const res = await request('/api/auth/register', 'POST', 
        { ...form, avatar: previewAvatar }
      );
      setMessage(defineLang(msgs[res.message]));
    } catch (err) {}
  };

  const loginHandler = async () => {
    try {
      const res = await request( '/api/auth/login', 'POST', 
        { ...form }
      );

      auth.login(res.token, res.userId, res.userProfile);
      setMessage(defineLang(msgs[res.message]));
    } catch (err) {}
  };

  const handleFileInputChange = event => {
    const file = event.target.files[0];
    previewFile(file);
  };

  const previewFile = file => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewAvatar(reader.result);
    };
  };

  return (
    <div className={s.modal}>
      <div className={s.subscriptionForm}>
            
        <h2>
          {`${modalType === "register" ? "Registration Form" : "Login"}`}
        </h2>

        <form onSubmit={e => e.preventDefault()}>
          {modalType === "register" && (
            <input 
              onChange={changeHandler}
              name="name"
              type="text"
              minLength={4}
              placeholder="John Smith" 
            />
          )}
          <input
            onChange={changeHandler}
            name="email"
            type="email"
            placeholder="johnsmith@gmail.com"
          />
          <input 
            onChange={changeHandler}
            name="password"
            type="password" 
            minLength={4}
            placeholder=" ********"
          />

          {modalType === "register" && (
            <input
              className={s.choose_file}
              onChange={handleFileInputChange}
              type="file"
              name="photo"
              style={{ cursor: "pointer" }}
              accept="image/*"
            />
          )}
          { previewAvatar && 
            <div className={s.preview_wrap}>
              <img 
                className={s.preview} 
                src={previewAvatar} 
                alt='preview'
              />
            </div>
          }

          <div className={s.buttons}>
            <button
              disabled={loading}
              onClick={modalType === "register" ? registerHandler : loginHandler}
            >
              {modalType === "register" ? "Register" : "Logn in"}
            </button>
            <button
              disabled={loading}
              style={{ background: "rgba(250, 19, 65, 0.932)" }}
              onClick={() => {
                dispatch({ type: "CLOSE_MODAL" });
              }}
            >Close</button>
          </div>
          <div className={s.message}>{message}</div>
          </form>
        </div>
    </div>
  );
}

export default Auth;
