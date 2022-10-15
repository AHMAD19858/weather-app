import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import IconBack from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/AntDesign';
const HeaderComponent = ({ navigation, showAdd }) => {

    //header component that can be called in many screens rather writing same code in them!
    return (
        <View style={styles.appbar}>

            <View style={styles.backbtn}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <IconBack
                        name='arrow-back'
                        color={'white'}
                        size={24}
                    />
                </TouchableOpacity>
            </View>

            {showAdd === true ?
                <View style={styles.backbtn}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("addCity")}>
                        <IconPlus
                            name='pluscircle'
                            color={'white'}
                            size={25}
                            style={{ marginRight: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                :
                null}

        </View>
    )
}

export default HeaderComponent