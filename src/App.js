import './App.css';
import { ReactNetflixPlayer } from 'react-netflix-player'

function App() {
  return (
    <div className="App">
      <ReactNetflixPlayer
      // Vídeo Link - Just data is required
    
    /**
    * maystrixtv series test 1 folder videos
    *
    * 1: https://mayst.s3.amazonaws.com/Serie+Test+1+/finalLobo.mp4
    * 2: https://mayst.s3.amazonaws.com/Serie+Test+1+/maystrix+(5).mp4
    * 3: https://mayst.s3.amazonaws.com/Serie+Test+1+/tests.mp4
    * 4: https://mayst.s3.amazonaws.com/Serie+Test+1+/v1.mp4
    *
    * these are 4 videos in series test folder we have to test it with media player
    */
    
    src = {"https://mayst.s3.amazonaws.com/Serie+Test+1+/finalLobo.mp4"}
    //src="https://cdn.jwplayer.com/videos/Q3GKHVHC-nirXmPcu.mp4"
      // src={"https://www.youtube.com/embed/s5h1IP23ixI"}
      // src={"http://videoinvalid"}
      title={"Dollface"}
      subTitle={"Travel Agent"}
      titleMedia={"Dollface"}
      extraInfoMedia={"Travel Agent"}
      // Action when the button X (close) is clicked
      backButton={() => {}}
      // The player use the all viewport
      fullPlayer={true}
      // The video starts when the component is render
      autoPlay={true}
      // The start position video
      startPosition={0}
      // The info of the next video action
      dataNext={{ title: "Right-Hand Woman" }}
      // The action call when the next video is clicked
      onNextClick={() => {}}
      playerLanguage={"en"}
      // The list reproduction data, will be render in this order
      reprodutionList={[
        {
          nome: "Travel Agent",
          id: 1,
          playing: true
        },
        {
          nome: "Right-Hand Woman",
          id: 2,
          playing: false
        },
        {
          nome: "Boss Lady",
          id: 3,
          playing: false
        },
        {
          nome: "Power Player",
          id: 4,
          playing: false
        },
        {
          nome: "Miss Codependent",
          id: 5,
          playing: false
        },
        {
          nome: "Space Cadet",
          id: 6,
          playing: false
        },
        {
          nome: "Molly",
          id: 7,
          playing: false
        },
        {
          nome: "Homecoming Queen",
          id: 8,
          playing: false
        },
        {
          nome: "Princess Charming",
          id: 9,
          playing: false
        },
        {
          nome: "Birthday Girl",
          id: 10,
          playing: false
        }
      ]}
      // The function call when a item in reproductionList is clicked
      onClickItemListReproduction={(id, playing) => {}}
      // The function is call when the video finish
      onEnded={() => {}}
      // The function is call when the video is playing (One time for frame)
      onTimeUpdate={() => {}}
      //color
      //primaryColor={"#FFFFFF"}
    />
    </div>
  );
}

export default App;
