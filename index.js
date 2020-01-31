import React from "react";
import { AppRegistry } from "proton-native";
import MyApp from "./src/MyApp";

AppRegistry.registerComponent("MyApp", <MyApp />);  // e finalmente renderize seu componente principal

// ================================================== ================================
// Isso é para recarregar a quente (isso será retirado da produção pelo webpack)
// NÃO DEVE SER ALTERADO
if (module.hot) {
  module.hot.accept(["./src/MyApp"], function() {
    const MyApp = require("./src/MyApp")["default"];
    AppRegistry.updateProxy(MyApp);
  });
}
