import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Password = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === "passwordtest") {
      router.push("/");
    } else {
      alert(`Wrong Password!`);
    }
  };
  return (
    <div className="password-main">
      <div className="password-wrapper">
        <div className="yaw-pwd">
          <h6 className="header">International House</h6>
          <h1>Young Alumni</h1>
          <h1>Weekend</h1>
          <br />
        </div>
        <form className="password-form" onSubmit={handleSubmit}>
          <h3>Enter Password</h3>

          <input
            type={"password"}
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input className="pwd-btn" type={"submit"} />
        </form>
        <FontAwesomeIcon icon={faGlobe} size="2xl" className="globe-icon" />
      </div>
    </div>
  );
};

export default Password;
