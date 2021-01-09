import * as React from "react";
import { View,StatusBar, StyleSheet } from "react-native";
import { Todo } from "./components/Todo";
import { TodoContainer } from "./store/todoStore";

const App: React.FC = (): React.ReactElement => {
  return (
    <View style = {styles.appParentView}>
    <StatusBar backgroundColor="purple" />
      <TodoContainer.Provider>
        <Todo />
      </TodoContainer.Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appParentView: {flex:1},
});
