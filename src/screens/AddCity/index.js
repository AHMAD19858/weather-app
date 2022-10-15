import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, TextInput, Modal, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { WeatherContext } from '../../context/WeatherContext'
import LottieView from 'lottie-react-native';
import { COLORS } from '../../constants';
const AddCity = ({ navigation }) => {
    const [cityName, setCityName] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const { dispatch } = useContext(WeatherContext)


    async function addCityHandler() {
        dispatch({ type: "addCity", payload: { cityName } }) //call the dispatch and stor city name in the context
        setModalVisible(true) // set modal state with true to show modal after sending data
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-100}>
                    <View style={styles.backbtn}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}>
                            <Icon
                                name='arrow-back'
                                color={COLORS.primary}
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.addCityText}>City name</Text>

                    <View style={styles.inputView}>
                        <TextInput
                            underlineColorAndroid="transparent"
                            autoCorrect={true}
                            keyboardType="default"
                            style={styles.text_input}
                            spellCheck={false}
                            placeholder={"Enter city name"}
                            placeholderTextColor={"#989898"}
                            returnKeyType="next"
                            onChangeText={cityName => setCityName(cityName)} //set the value of the city name
                        />
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <LottieView
                                    source={require('../../assets/lottie/new_check.json')}
                                    autoPlay loop={false}
                                    style={styles.check}
                                    onAnimationFinish={() => { navigation.navigate('home'); setModalVisible(false) }}
                                />
                                <Text style={styles.modalText}>Done!</Text>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity style={styles.addTouch}
                        onPress={() => addCityHandler()}>
                        <Text style={styles.addText}>Add City</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default AddCity
