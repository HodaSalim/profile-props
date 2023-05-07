import PropTypes from "prop-types";

const styles = {
  backgroundColor: "lightGrey",
  fontFamily: "sans-serif",
  boxShadow: "5px 10px #888888",
  width: "40vw",
  margin: "0 auto",
  padding: "5%",
};
export function Profile({ fullName, bio, profession, children }) {
  return (
    <div style={styles}>
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      {children}
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
