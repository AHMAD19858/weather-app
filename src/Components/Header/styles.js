
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    appbar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        height: 150,
        elevation: 25
    },

    backbtn: {
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20
    },

});


export default styles
