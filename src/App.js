import "./App.css";
import { ChangeName } from "./ChangeName";
import { Likes } from "./Likes";
import { LikesDown } from "./LikesDown";

function App() {
  return (
    <div className="flex">
      <Likes />
      <LikesDown />
      <ChangeName />
    </div>
  );
}

export default App;
