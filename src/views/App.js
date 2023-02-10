import "./App.scss";
import MyComponentss from "./Example/MyComponents";

// function Demo() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

let App = () => {
  return (
    <div className="App">
      <MyComponentss></MyComponentss>
    </div>
  );
};

// function YoutubeItem(props) {
//   console.log(props);
//   return (
//     <div className="youtube-item">
//       <div
//         className="youtube-image"
//         styles={{
//           height: "250px",
//         }}
//       >
//         <img
//           src={props.image}
//           alt=""
//           styles={{
//             display: "block",
//             maxWidth: "100%",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       <div className="youtube-footer">
//         <img
//           src="https://www.invert.vn/media/downloads/221203T1328_631.jpg"
//           alt=""
//           className="youtube-avatar"
//         />
//         <div className="youtube-info">
//           <h3 className="youtube">{props.info || "Chưa có tiêu đề"}</h3>
//           <h4 className="youtube-author">
//             {props.author || "Chưa điền tên tác giả"}
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
