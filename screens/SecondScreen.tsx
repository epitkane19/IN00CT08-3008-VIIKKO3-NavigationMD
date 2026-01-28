import React, { useEffect, useLayoutEffect } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import { RootStackParamList } from '../types/navigation'; 

type Props = NativeStackScreenProps<RootStackParamList,'SecondScreen'>; 

const SecondScreen = ({ navigation }: Props) => { 
    useLayoutEffect(() => {
    }, [navigation]);

    useEffect(() => {
        const onBackPress = () => {
            return false;
        };
        const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress); 
        return () => { 
            subscription.remove(); 
        }; 
    }, []);

    return ( 
        <View style={styles.container}> 
            <Text>Second Screen</Text> 
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
 
export default SecondScreen; 