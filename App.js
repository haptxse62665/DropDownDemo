import React from "react";
import { StyleSheet, Text, View, Image, Header } from "react-native";
import Images from "./Images";
import { Iterms } from "./Components";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 40,
            paddingBottom: 20,
            backgroundColor: "#ccc"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              source={Images.headerDropDownIcon}
              style={{
                height: 30,
                width: 40,
                right: 10,
                marginLeft: 20,
                marginRight: 20
              }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 40
              }}
            >
              Topics
            </Text>
            <Text style={{ flex: 1, textAlign: "right" }}>
              <Image
                source={Images.hiddenIcon}
                style={{ height: 60, width: 70, right: 20 }}
              />
            </Text>
          </View>
        </View>
        <Iterms
          iconSource={Images.educationIcon}
          dropDownImgSource={Images.dropDownIcon}
          content="Educations"
        />
        <Iterms
          iconSource={Images.diningIcon}
          dropDownImgSource={Images.dropDownIcon}
          content="Dining"
        />
        <Iterms
          iconSource={Images.familyIcon}
          dropDownImgSource={Images.dropDownIcon}
          content="Family"
        />
        <Iterms
          iconSource={Images.healthIcon}
          dropDownImgSource={Images.dropDownIcon}
          content="Health"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
