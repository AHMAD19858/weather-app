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
        backgroundColor: COLORS.white
    },


    Image: {
        height: 47,
        width: 94,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    card: {
        position: "absolute",
        textAlign: 'center',
        alignSelf: 'center',
        width: 320, // the width a little bigger to fit the retrieved data
        height: 423,
        marginTop: 105,
        backgroundColor: COLORS.white,
        paddingRight: 10,
        paddingTop: 10,
        borderRadius: 4,
        elevation: 25,
    },

    appbar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        height: 150
    },


    row: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginLeft: 32,
        marginRight: 32,
        alignItems: 'center'
    },


    header: {
        color: COLORS.black,
        fontSize: 24,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },


    detail: {
        color: COLORS.black,
        fontSize: 14,
        fontFamily: "Roboto-Bold",
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },

    data: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        color: COLORS.primary
    },

    imgContainer: {
        marginBottom: 10,
        marginTop: 30,
        marginLeft: 20
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
    backbtn: {
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20
    },
});


export default styles