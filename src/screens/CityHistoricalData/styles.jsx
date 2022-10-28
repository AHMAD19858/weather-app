
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


    backbtn: {
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20
    },

    card: {
        textAlign: 'center',
        alignSelf: 'center',
        width: width - 20,
        height: 56,
        marginTop: 16,
        marginBottom: 15,
        paddingRight: 10,
        paddingTop: 10,
        zIndex: 999
    },

    appbar: {
        flexDirection: 'row',
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
    cityname: {
        position: "absolute",
        color: "white",
        marginTop: 99,
        marginLeft: 72,
        fontSize: 24,
        textTransform: 'capitalize'
    },

    header: {
        color: COLORS.lightGray,
        fontSize: 12,
        paddingLeft: 21,

    },
    subHeader: {
        color: "black",
        fontSize: 14,
        paddingLeft: 21,
        fontWeight: "bold",
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
    },
    iconSun: {
        marginLeft: 21,
        alignSelf: "center"
    }
});


export default styles