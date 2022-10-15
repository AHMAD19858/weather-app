import React, { useEffect, useState, useContext } from 'react';
import { Text, View, Image } from 'react-native'
import styles from './styles'
import weatherServices from '../../services/weatherServices';
import HeaderComponent from '../../Components/Header/index'
import Loader from '../../Components/Loader/loader'
import { WeatherContext } from '../../context/WeatherContext'


const CityDetails = ({ navigation, route }) => {
    const [err, setErr] = useState(false)
    const [data, setData] = useState({})
    const [desc, setdesc] = useState("")
    const [icon, setIcon] = useState("")
    const [showLoader, setShowLoader] = useState(true);
    const [imageLink, setImageLink] = useState('');
    const { state } = useContext(WeatherContext)

    useEffect(() => {

        async function getDetailsHandler(name) {
            await weatherServices.getDetails(name)
                .then((res) => {

                    setShowLoader(true)
                    if (res.data) {
                        setTimeout(() => {
                            setShowLoader(false)
                        }, 170);
                        setdesc(res.data.weather[0].description)
                        setData(res.data) //set the retriving data in one state and call this state in the render
                        setIcon(res.data.weather[0].icon)

                        addHistory(res.data.weather[0].description, res.data.main?.temp)
                    }

                })
                .catch((error) => {
                    console.log("error", error);
                    setShowLoader(false)
                    setErr(true)
                })
        }
        getDetailsHandler(route.params.name)
        let endPoint = 'http://openweathermap.org/img/w/'
        setImageLink(endPoint)

    }, [])



    function addHistory(description, temp) {

        var date = new Date() //To get the Current Date

        /* in this section i can store the city data to my history array */

        state[route.params.index].history.push({
            time: date,
            temp: temp,
            description: description
        })

    }
    return (
        <View style={styles.container}>
            
            <HeaderComponent //calling header component
                navigation={navigation}
                showAdd={true} //sending prop with true value to show add icon
            />

            <View style={styles.card}>
                {
                    showLoader === true ?
                        <Loader />
                        :
                        err === true ?
                            <View>
                                <Text style={styles.empty}>Sorry, No available data for this city!</Text>
                            </View>
                            :
                            <>
                                <Text style={styles.header}>{data?.name},{data.sys?.country}</Text>
                                <View style={styles.imgContainer}>

                                    <Image
                                        source={{
                                            uri: imageLink + icon + `.png`
                                        }}


                                        style={styles.Image} />
                                </View>


                                <View style={styles.row}>

                                    <View>
                                        <Text style={styles.detail}>Description</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.data}>{desc}</Text>
                                    </View>
                                </View>


                                <View style={styles.row}>

                                    <View>
                                        <Text style={styles.detail}>Temp</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.data}>{Math.round(data?.main?.temp - 273.15)}° C</Text>
                                    </View>
                                </View>

                                <View style={styles.row}>

                                    <View>
                                        <Text style={styles.detail}>Humidity</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.data}>{data.main?.humidity}%</Text>
                                    </View>
                                </View>


                                <View style={styles.row}>

                                    <View>
                                        <Text style={styles.detail}>Windspeed</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.data}>{data.wind?.speed} km/h</Text>
                                    </View>
                                </View>
                            </>
                }
            </View>
        </View>
    )
}

export default CityDetails
