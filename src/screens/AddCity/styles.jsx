import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: width,
        height: height,
        backgroundColor: COLORS.white
    },

    inputView: {
        borderRadius: 25,
        backgroundColor: COLORS.inputBackground,
        width: width - 50,
        height: 50,
        marginTop: 15,
        alignSelf: 'center',

    },

    text_input: {
        color: COLORS.black,
        textAlign: 'left',
        marginLeft: 20,
        flex: 1
    },


    addTouch: {
        width: width - 50,
        height: 50,
        marginTop: 60,
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        borderRadius: 25,
        alignSelf: 'center',
    },

    addText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    addCityText: {
        textAlign: 'left',
        color: COLORS.label,
        marginTop: 50,
        marginLeft: 30,
        fontSize: 16
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        elevation: 0
    },
    modalView: {
        backgroundColor: "white",
        height: 350,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: width,
        position: 'absolute',
        bottom: 0,
        padding: 35,
        alignItems: "center",
    },
    modalText: {
        fontSize: 20,
        color: COLORS.label
    },

    check: {
        width: "80%",
        alignContent: "center",
        alignItems: 'center',
    },

    backbtn: {
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20
    },
});


export default styles
