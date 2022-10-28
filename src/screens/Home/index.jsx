import React, { useEffect, useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import HeaderComponent from '../../Components/Header/index'
import Icon from 'react-native-vector-icons/AntDesign';
import IconCity from 'react-native-vector-icons/FontAwesome5';
import { WeatherContext } from '../../context/WeatherContext'
import IconPlus from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../constants';
const Home = ({ navigation }) => {
    const { state } = useContext(WeatherContext)

    return (
        <View style={styles.container}>
            <View style={styles.appbar}>
            </View>
            <Text style={styles.homeTitle}>Cities</Text>
            {
                state.length == '' ?
                    <View>
                        <Text style={styles.empty}>List is empty, Please add a city first!</Text>
                    </View>
                    :
                    <View>
                        <FlatList contentContainerStyle={{ alignItems: 'center' }}
                            onEndReachedThreshold={0.2}
                            progressViewOffset={1}
                            scrollEventThrottle={1}
                            keyExtractor={(item, index) => String(index)}
                            data={state}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ ...styles.card }}>

                                        <View style={styles.row} >
                                            <View style={styles.row}>
                                                <IconCity
                                                    name='city'
                                                    color={COLORS.primary}
                                                    size={16}
                                                    style={styles.iconCity}
                                                />
                                                <TouchableOpacity onPress={() => navigation.navigate("details", {
                                                    name: item.cityName,
                                                    index: index
                                                })}>
                                                    <Text style={styles.header}>{item.cityName}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity onPress={() => navigation.navigate("history", {
                                                name: item.cityName,
                                                item: item
                                            })}>
                                                <Icon
                                                    name='exclamationcircle'
                                                    color={COLORS.label}
                                                    size={20}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
            }

            <KeyboardAvoidingView behavior={'height'} style={styles.writeTaskWrapper}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("addCity")}>
                    <IconPlus
                        name='pluscircle'
                        color={COLORS.primary}
                        size={45}
                    />
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}

export default Home