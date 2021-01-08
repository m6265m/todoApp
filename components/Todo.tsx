import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";
import { TodoContainer } from "../store/todoStore";
import { IToDo } from "../types/todoTypes";

export const Todo: React.FC = (): React.ReactElement => {
  const todo = TodoContainer.useContainer();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your todo task..."
          value={todo.value}
          onChangeText={(e) => todo.handleOnChangeText(e)}
        />
        <Button title="Add Todo" onPress={todo.handleAddTask} />
      </View>
      {todo.error ? (
        <Text style={styles.error}>Error: Input field is empty...</Text>
      ) : null}
      <Text style={styles.subtitle}>Your Todos :</Text>
      {todo.toDoList.length ? null : <Text>You don't have any todos</Text>}
      <ScrollView style={{flex:1, padding:5}}>
      {todo.toDoList.map((toDo: IToDo, index: number) => (
        <View style={styles.listItem} key={`${index}_${toDo.text}`}>
          <Text
            style={[
              styles.task,
              { textDecorationLine: toDo.completed ? "line-through" : "none" },
            ]}
          >
            {toDo.text}
          </Text>
          <Button
            title={toDo.completed ? "Completed" : "Complete"}
            onPress={() => todo.toggleComplete(index)}
          />
          <Button
            title="X"
            onPress={() => todo.removeItem(index)}
            color="crimson"
          />
        </View>
      ))}
    </ScrollView>


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15,
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputBox: {
    width: 200,
    borderColor: "purple",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "purple",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  addButton: {
    alignItems: "flex-end",
  },
  task: {
    width: 200,
  },
  error: {
    color: "red",
  },
  parentView: { padding: 10, marginTop: 20 },
});
