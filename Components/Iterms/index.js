import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import ItermStyle from "./ItermStyle";

const Iterms = props => {
  const {
    iconSource,
    dropDownImgSource,
    imageStyle,
    textStyle,
    content
  } = props;
  return (
    <View style={{ paddingTop: 40, paddingBottom: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={iconSource} style={imageStyle} />
        <Text style={textStyle}>{content}</Text>
        <Text style={{ flex: 1, textAlign: "right" }}>
          <Image source={dropDownImgSource} style={{ height: 60, width: 70 }} />
        </Text>
      </View>
    </View>
  );
};

Iterms.PropTypes = {
  iconSource: PropTypes.string.isrequired,
  dropDownImgSource: PropTypes.string.isrequired,
  imageStyle: PropTypes.any,
  textStyle: PropTypes.any,
  content: PropTypes.string.isrequired
};

Iterms.defaultProps = {
  imageStyle: ItermStyle.imageStyle,
  textStyle: ItermStyle.textStyle
};

export default Iterms;
