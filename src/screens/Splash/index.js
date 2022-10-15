import React, { useEffect, useRef } from 'react'
import { Text, View, Animated, Image } from 'react-native'
import LottieView from 'lottie-react-native';
import styles from './styles'


const Splash = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
        }).start();
    };

    useEffect(() => {
        fadeIn()
        setTimeout(() => {
            fadeOut()
        }, 2500);
    })
    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: false
        }).start();
    };


    return (
        <View style={styles.container}>


            <Animated.View

                style={[
                    styles.fadingContainer,
                    {
                        opacity: fadeAnim
                    }
                ]}

            >
            </Animated.View>

            <LottieView
                source={require('../../assets/lottie/splash.json')}
                autoPlay loop={false}
                style={{ width: 120, alignContent: "center", alignItems: 'center', marginBottom: 100 }}
                onAnimationFinish={() => navigation.navigate('home')}
            />


        </View>
    )
}

export default Splash

