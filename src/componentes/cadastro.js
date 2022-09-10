/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {useState} from 'react';
 import Style from '/home/matheus/projetos/pokedex_DB/src/Estlio.js';
 import {
   ImageBackground,
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   
   
 } from 'react-native';
 
 
  const Bulbasaur = {
   number: '001',
   name: 'Bulbasaur',
   type1: 'Grass',
   type2: null,
   ImgUrl: '/home/matheus/projetos/pokedex_DB/img/bulbasaur.png'
  }


 const Cadastro = ()=>{
  const [Nome, setNome] = useState("");
  const [Numero, setNumero] = useState("");
  const [Sprite, setSprite] = useState("");
  const [TypeOne, setTypeOne] = useState("");
  const [TypeTwo, setTypeTwo] = useState("");
   return (
    
     <SafeAreaView style={Style.containerCad}>
       <ImageBackground  
                  source={require('/home/matheus/projetos/pokedex_DB/img/pokedex.jpg')} style={Style.fundo}>
                   <View style={Style.card}>
                    
                   <TextInput
                        style={Style.input}
                        placeholder='Numero da Dex'
                        onChangeText={(text)=>setNumero(text)}
                        
                        
                    />
                    <TextInput
                        style={Style.input}
                        placeholder='Nome do Pokemon'
                        onChangeText={(text)=>setNome(text)}
                        
                    />
                    <TextInput
                        style={Style.input}
                        placeholder='Sprite(url)'
                        onChangeText={(text)=>setSprite(text)}
                        
                    />
                    <TextInput
                        style={Style.input}
                        placeholder='Type1'
                        onChangeText={(text)=>setTypeOne(text)}
                        
                    />
                    <TextInput
                        style={Style.input}
                        placeholder='Type2'
                        onChangeText={(text)=>setTypeTwo(text)}
                        
                    />
                        
                   </View>
       </ImageBackground>
     </SafeAreaView>
   );
 };

 
 
 export default Cadastro;
 