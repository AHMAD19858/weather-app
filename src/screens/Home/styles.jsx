import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../constants';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: width,
        height: height,
        backgroundColor: COLORS.white,
    },

    iconCity: {
        marginLeft: 16,
        alignSelf: "center"
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingRight: 20,
        alignItems: "flex-end"
    },
    backbtn: {
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20
    },
    slider: {
        height: 170,
        width: 130,
        resizeMode: 'contain',
        top: 5,
        alignSelf: 'flex-start'
    },
    noImage: {
        alignSelf: 'flex-start',
    },


    card: {
        textAlign: 'center',
        alignSelf: 'center',
        width: width - 20,
        height: 56,
        marginTop: 10,
        marginBottom: 5,
        paddingRight: 10,
        paddingTop: 10,
        borderRadius: 5,

    },

    appbar: {
        flexDirection: 'row-reverse',
        alignContent: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        height: 150,
        elevation: 25
    },

    row: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    homeTitle: {
        position: "absolute",
        color: "white",
        marginTop: 99,
        marginLeft: 72,
        fontSize: 24
    },

    header: {
        color: COLORS.gray,
        fontSize: 14,
        paddingLeft: 32,
        fontWeight: "bold",
        textTransform: 'capitalize'
    },


    addTouch: {
        width: 170,
        height: 50,
        marginTop: 30,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        borderRadius: 25,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    addText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    empty: {
        textAlign: 'center',
        fontSize: 18,
        color: COLORS.emptyText,
        paddingTop: 150,
        ...FONTS.emptyTitle
    }
});


export default styles