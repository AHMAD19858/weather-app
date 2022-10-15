import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native';
import styles from './styles'
const Loader = () => {
  return (
    <View>

      <LottieView
        source={require('../../assets/lottie/loader.json')}
        autoPlay loop={true}
        style={styles.loader}
      />
    </View>
  )
}

export default Loader

