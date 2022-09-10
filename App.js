/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Cadastro from './src/componentes/cadastro';
import React from 'react';
import Style from '/home/matheus/projetos/pokedex_DB/src/Estlio.js';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'; 
 const Bulbasaur = {
  number: '001',
  name: 'Bulbasaur',
  type1: 'Grass',
  type2: null,
  ImgUrl: '/home/matheus/projetos/pokedex_DB/img/bulbasaur.png'
 }


const App = ()=>{
  return (
    <SafeAreaView style={Style.container}>
      <Cadastro />
    </SafeAreaView>
  );
};

// ------------------------------------------Tela de home--------------------
{/* <View style={Style.sprite}>
<Image style={Style.image}
source={require('/home/matheus/projetos/pokedex_DB/img/bulbasaur.png')}/>
<View style={Style.CampText}>
  <Text style={Style.texto}>N.dex:{Bulbasaur.number}</Text>
  <Text style={Style.texto}>Name:{Bulbasaur.name}</Text> 
  <Text style={Style.texto}>Type:{Bulbasaur.type1}</Text>  
</View>
</View>
<ImageBackground  
                 source={require('/home/matheus/projetos/pokedex_DB/img/pokedex.jpg')} style={Style.fundo}>
                  
      </ImageBackground> */
}


export default App;
