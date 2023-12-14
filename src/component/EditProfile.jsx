//Firebase import
import {
  getAuth,
  updateEmail,
  updatePhoneNumber,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//React import
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Component import
import Button from "./Button";
import Modal from "./Modal";

//CSS import
import "../styles/editProfile.css";

//App config import
import AuthContext from "../firbase/auth-context";
import { app, storage } from "../firbase/config";

const auth = getAuth(app);
let errorMessage = "";
let imgErrorMessage = "";
let image = null;

const EditProfile = () => {
  const ctx = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);
  const [isError, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [redirect, setRedirect] = useState("");
  const navigate = useNavigate();

  const fileChnageHnadler = (e) => {
    image = e.target.files[0];
    setError(false);
    if (!image.type.includes("image")) {
      setError(true);
      imgErrorMessage = "File must be an image";
      return;
    }
    if (image.size > 1240000) {
      setError(true);
      imgErrorMessage = "File can not be larger than 1mb";
      return;
    }
  };
  const updateUserProfile = async (event) => {
    event.preventDefault();
    setModal(true);
    if (!image && !name && !email && !phoneNumber) {
      setError(true);
      errorMessage = "Atleast update one field of your profile!";
      return;
    }
    console.log(auth.currentUser);
    if (auth.currentUser === null) {
      setError(true);
      errorMessage = "You are not logged in";
      setRedirect("/login");
    } else {
      setLoading(true);
      let photoURL = null;
      try {
        if (image) {
          if (image && image.size > 1240000) {
            setLoading(false);
            setError(true);
            errorMessage = "File is too large!";
            return;
          }
          if (!image.type.includes("image")) {
            setLoading(false);
            setError(true);
            errorMessage = "File must be an image";
            return;
          }
          const imagePath = ref(
            storage,
            `userProfile/${ctx.user.uid}/${image.name}`
          );
          const img = await uploadBytes(imagePath, image);
          photoURL = await getDownloadURL(img.ref);
        }
        if (phoneNumber) {
          await updatePhoneNumber(phoneNumber);
        }
        if (email) {
          await updateEmail(auth.currentUser, email);
        }
        updateProfile(auth.currentUser, {
          displayName: name ? name : ctx.user.displayName,
          photoURL,
        }).then(() => {
          setLoading(false);
          errorMessage = "Profile updated successfully!";
          setRedirect(`/user/${ctx.user.uid}`);
        });
      } catch (err) {
        setError(true);
        setLoading(false);
        errorMessage = "somthing went wrong";
      }
    }
  };

  const hideModal = () => {
    setModal(false);
    navigate(redirect);
    location.reload();
  };

  const onCancel = () => {
    navigate(auth.currentUser === null ? "/login" : `/user/${ctx.user.uid}`);
  };

  return (
    <>
      {showModal && (
        <Modal
          onClick={hideModal}
          loading={isLoading}
          errorClassName={isError ? "error" : "success"}
          message={errorMessage}
          title={isError ? "Error" : "Success"}
        />
      )}
      <div className="edit-profile-container">
        <h1>Edit Profile</h1>
        <form onSubmit={updateUserProfile} className="edit-profile-form">
          <div>
            <label htmlFor="name">Enter new name</label>
            <p className="user-warning-update-profile">
              *if dont wanna edit your name leave than this field blank
            </p>
            <input
              type="text"
              id="name"
              // required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={"edit-profile-input"}
            />
          </div>
          {/* <div>
            <label htmlFor="email">Email</label>
            <p className="user-warning-update-profile">
              *if dont wanna edit your email than leave this field blank
            </p>
            <input
              type="email"
              // required
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className={"edit-profile-input"}
            />
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <p className="user-warning-update-profile">
              *if dont wanna edit your phone number than leave this field blank
            </p>
            <input
              id="phone-number"
              type="text"
              placeholder={ctx.user.phoneNumber ? "" : "Add phone number"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={"edit-profile-input"}
            />
          </div> */}
          <div>
            <label htmlFor="image" style={{ margin: "5px 0" }}>
              Change Profile Image
            </label>
            <p className="user-warning-update-profile">
              *if dont wanna update your photo than leave this field blank
            </p>
            <input
              type="file"
              id={"image"}
              className={"edit-profile-input"}
              onChange={fileChnageHnadler}
            />
            {isError && (
              <p style={{ color: "red", transform: "translateY(-50%)" }}>
                {imgErrorMessage}
              </p>
            )}
          </div>
          <div className="edit-btn-container">
            <Button className={"btn save-edit-btn"} title={"Save"} />
          </div>
        </form>
        <Button
          className={"cancel-btn btn"}
          title={"Cancel"}
          onclick={onCancel}
        />
      </div>
    </>
  );
};

export default EditProfile;
