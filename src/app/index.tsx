import { Text, View } from "react-native";
import React from "react";
import indexStyle from "../styles/indexStyle";
import { Card } from "react-native-paper";
import cardImage from '../../assets/images/curtain-frame-gold-color_800563-4319.png'


export default function Index() {
  return (
    <View style={{alignItems: 'center', paddingTop:20, elevation: 5}}>
      <Card
      mode="elevated"
      style={{
        alignContent:'center',
        backgroundColor: '#dec41c7c',
        width:'70%',
      }}>
        <Card.Content>
          <Text>Theatre Name</Text>
            <Card.Cover source={cardImage}/>
          <Text>
            Sample theater description:
            The Saenger Theatre opened on February 4, 1927, to a parade of thousands along Canal Street. The theatre welcomed 4,000 guests to enjoy silent movies and stage plays for $0.65 per ticket. Designed to recall an Italian Baroque courtyard, the Saenger features Greek and Roman statues, a ceiling filled with stars and projections of moving clouds and other magnificent details.
          </Text>
        </Card.Content>
          <View style={indexStyle.center}>
          </View>
      </Card>
    </View>
  );
}
