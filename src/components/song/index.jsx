import { Howl, Howler } from "howler";
import Rem from "../audio/rem.mp3";

export const Player = () => {
  const sound = new Howl({
    src: [Rem],
  });

  function play() {
    sound.play();
  }

  function pause() {
    sound.pause();
  }

  return (
    <>
      <button onClick={play}>play</button>
      <button onClick={pause}>stop</button>
    </>
  );
};
