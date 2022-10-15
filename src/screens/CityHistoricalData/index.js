import React, { useEffect } from 'react';
import { Text, View, FlatList, Image, LogBox } from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import Group from '../../assets/Group.png'
import IconSun from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';
import { COLORS } from '../../constants';
import HeaderComponent from '../../Components/Header';
LogBox.ignoreLogs(['WARN: ...']);
LogBox.ignoreAllLogs();

const History = ({ navigation, route }) => {


    useEffect(() => {
        Moment.locale('en');
    }, [])
    return (
        <LinearGradient
            colors={[COLORS.white, COLORS.gradient]}
            style={styles.container}>

            <HeaderComponent navigation={navigation} />

            <Text style={styles.cityname}>{route?.params?.name} historical</Text>

            {
                route?.params?.item?.history.length == '' ?
                    <View>
                        <Text style={styles.empty}>List is empty, Please view a city first!</Text>
                    </View>
                    :
                    <View>
                        <FlatList contentContainerStyle={{ alignItems: 'center' }}
                            onEndReachedThreshold={0.2}
                            progressViewOffset={1}
                            scrollEventThrottle={1}
                            keyExtractor={(index) => String(index)}
                            data={route?.params?.item?.history} //taking history param from home screen and looping in a flatlist our data (temp, desc, time)
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ ...styles.card }}>

                                        <View style={styles.row} >
                                            <View style={styles.row}>
                                                <IconSun
                                                    name='cloud-sun'
                                                    color={COLORS.primary}
                                                    size={24}
                                                    style={styles.iconSun}
                                                />
                                                <View>
                                                    <Text style={styles.header}>
                                                        {Moment(item.time).format('llll')}
                                                    </Text>
                                                    <Text style={styles.subHeader}>
                                                        {item.description}, {Math.round(item.temp - 273.15)}° C</Text>
                                                </View>
                                            </View>
                                        </View>


                                    </View>

                                )
                            }}
                        />

                    </View>

            }
            <Image
                style={{ width: "100%", position: 'absolute', bottom: 0 }}
                source={Group}
            ></Image>
        </LinearGradient>
    )
}

export default History