import React from "react";
import {SafeAreaView,ScrollView,StyleSheet,Text,View} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./src/application/reducers";
import {Header} from "./src/infrastructure/components/common";
import LibraryList from "./src/architecture/LibraryList";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
          <View style={{ flex:1 }}>
            <Header headerText="Tech Stack"/>
            <LibraryList/>
          </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
