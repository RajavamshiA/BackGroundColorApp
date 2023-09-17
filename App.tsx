

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  
  const [randomBackground,setrandomBackground]=useState('#ffffff');
  const [randomBackground1,setrandomBackground1]=useState('#000000');


  const generateColor=()=>{
    const hexRange ="0123456789ABCDEF"
    let color="#",color1="#"

    for (let i = 0; i < 6; i++) {

      color += hexRange[Math.floor(Math.random()*16)];
      color1 += hexRange[Math.floor(Math.random()*16)];

      
    }
    setrandomBackground(color);
    setrandomBackground1(color1);

  }

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={[styles.actionBtn,{backgroundColor:randomBackground1}]}>
          <Text style={styles.actionBtnTxt}>Press Me </Text>
        </View>
      </TouchableOpacity>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",//UI color picker 
    paddingVertical:10,
    paddingHorizontal:40
  },
  actionBtnTxt:{
    fontSize:24,
    color:"#FFFFFF",
    textTransform:"uppercase"
  }
});

export default App;
