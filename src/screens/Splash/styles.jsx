import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#222222',
        width: width,
        height: height,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

      fadingContainer: {
        padding: 20,
      },

});
export default styles;