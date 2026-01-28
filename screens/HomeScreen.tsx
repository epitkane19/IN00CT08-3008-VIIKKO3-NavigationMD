import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import { RootStackParamList } from '../types/navigation' 

type Props = NativeStackScreenProps<RootStackParamList,'Home'> 

const HomeScreen = ({navigation}:Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => ( 
                <Ionicons 
                    name="arrow-forward" 
                    size={24} 
                    color="#000000" 
                    style={{ marginRight: 0, padding: 0 }} 
                    onPress={() => navigation.navigate('SecondScreen', {message: 'test'})} 
                />
            ),
        })
    }, []);

    return ( 
        <View style={styles.container}> 
            <Text>Home Screen</Text> 
        </View> 
    ); 
}; 
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 
    
export default HomeScreen; 