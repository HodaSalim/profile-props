import { Profile } from "./profile/Profile";
import { ProfileImage } from "./profile/ProfileImage";

const user = {
  fullName: "Hannah Sminth",
  bio: "a careere driven social media specialist that always aims to set the next trend to acheive your business objectives",
  profession: "Social Media Manager",
};

export function App() {
  return (
    <>
      <Profile
        fullName={user.fullName}
        bio={user.bio}
        profession={user.profession}
      >
        <img src="./Hannah.jpeg"></img>
      </Profile>
    </>
  );
}
