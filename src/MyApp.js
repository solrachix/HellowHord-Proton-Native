import React, { useEffect } from "react"; // import from react

import { Window, App, Text, Button } from "proton-native"; // import the proton-native components


export default function MyApp(){
  useEffect(()=>{
    // alert();
  })
  return(
    <App>
      {/* você sempre deve incluir o aplicativo em torno de tudo */}
      <Window style={{ width: 300, height: 300, backgroundColor: "#3d3d3d" }}>
        {/* todos os seus outros componentes vão aqui*/}
        <Text>Hellow Hord</Text>
      </Window>
    </App>
  );
}

// export default class App extends Component {
//   render() {
//     // all Components must have a render method
//     return (
//       <App>
//         {/* you must always include App around everything */}
//         <Window style={{ width: 300, height: 300, backgroundColor: "blue" }}>
//           {/* all your other components go here*/}
//         </Window>
//       </App>
//     );
//   }
// }
