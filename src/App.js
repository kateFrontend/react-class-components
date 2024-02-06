import "./App.css";
import { ChangeName } from "./ChangeName";
import { Likes } from "./Likes";
import { LikesDown } from "./LikesDown";

function App() {
  return (
    <div>
      <Likes />
      <LikesDown />
      <ChangeName />
    </div>
  );
}

export default App;
