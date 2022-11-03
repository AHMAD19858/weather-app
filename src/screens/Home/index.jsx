import React, { useContext, useRef } from 'react';
import { Text, View, FlatList, TouchableOpacity, KeyboardAvoidingView, StatusBar, Animated } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import IconCity from 'react-native-vector-icons/FontAwesome5';
import { WeatherContext } from '../../context/WeatherContext'
import IconPlus from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../constants';
import { EventRegister } from 'react-native-event-listeners';
const SPACING = 10; //20
const AVATAR_SIZE = 170;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

const Home = ({ navigation }) => {
    const { state } = useContext(WeatherContext)
    const scrollY = useRef(new Animated.Value(0)).current;

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
                        <Animated.FlatList
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                                { useNativeDriver: true }
                            )}
                            contentContainerStyle={{
                                alignItems: 'center',
                                flexGrow: 1,
                                paddingBottom: 250,
                                paddingTop: StatusBar.currentHeight || 42
                            }}
                            keyExtractor={(item) => item.id}
                            scrollEnabled={true}
                            data={state}
                            renderItem={({ item, index }) => {
                                const inputRange = [
                                    -1,
                                    0,
                                    ITEM_SIZE * index,
                                    ITEM_SIZE * (index + 2),
                                ]

                                const scale = scrollY.interpolate({
                                    inputRange,
                                    outputRange: [1, 1, 0.8, 0]
                                })
                                return (
                                    <Animated.View style={{ transform: [{ scale }], ...styles.card }}>

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
                                    </Animated.View>
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