import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../BackButton'
import axios from 'axios'
import { CountryPopulationResponse } from '../../Modal/City'
import { postApiData ,getApiData  } from '../apiService'

const Home = () => {

    const headers = {
        Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqcGFya2FyQHNjYW4taXQuY29tLnNnfDEiLCJpYXQiOjE3NDE2ODkzNDUsImV4cCI6MTc0Mjk4NTM0NX0.qRhK6F9-Verw325C0PhNNESNsZagKyUkKkVE3aFhYBjwXg7Ca_UzvkycTTHAnr3PmMmgYZv6DXlNORugzuQxxw'
    };

    const params = {
        
    };
    const emptyheaders = {
        
    };
    const param = {
        country: "nigeria"
    };

    const pcConfigureData = {
        "name": "iphone 17 pro max",
        "data": {
            "year": 2022,
            "price": 9.99,
            "CPU model": "Intel Core M3",
            "Hard disk size": "1 TB"
        }
    };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [unmatchedCCstatementsCount, setunmatchedCount] = useState(null);
    const [cities, setCities] = useState([]);
    const [country, setCountry] = useState([]);

    const [pcInfo, setpcData] = useState([]);

    useEffect(() => {
        setLoading(false);
        setError(null);
        setData(null); 
       

    }, [])


    const handleloginData = () => {
        setLoading(true);
        fetchData()
    }

    const fetchData = async () => {
        const result = await getApiData('https://jsonplaceholder.typicode.com/posts/1');

        if (result.error) {
            setError(result.error);
        } else {
            setData(result);
        }

        setLoading(false);
    };


    const fetchDataWithHeader = async () => {
        setLoading(true);
        console.log('fetchDataWithHeader')
        const result = await getApiData('https://staging.myreceipts.phxcloud.io/MROMobileApplication/api/expense/creditcardstatement/unmatchedCount/1', params ,headers);

        if (result.error) {
            setError(result.error);
        } else {
            console.log(" api call of unmatched count is", result.unmatchedCCstatementsCount)
            setunmatchedCount(result.unmatchedCCstatementsCount);
        }

        setLoading(false);
    };

    const fetchCityList = async () => {
        setLoading(true);
        const result = await getApiData('https://countriesnow.space/api/v0.1/countries/population');

        if (result.error) {
            console.log('error is', result.error)
            setError(result.error);
        } else {
            const countryResponse = CountryPopulationResponse.fromJson(result);
            setCities(result.msg);
            console.log("Converted Data:", countryResponse);

        }
        setLoading(false);
    };

    const fetchCityListWithParam = async () => {
        setLoading(true);
        const result = await getApiData('https://countriesnow.space/api/v0.1/countries/positions', { param });
        if (result.error) {
            console.log('error is', result.error)
            setError(result.error);

        } else {
            setCountry(result.msg)
            console.log("Converted Data:", result);
        }
        setLoading(false);
    };


    const postApiWithParam = async () => {
        setLoading(true);
        const result = await postApiData('https://api.restful-api.dev/objects', pcConfigureData , emptyheaders);
        if (result.error) {
            console.log('error is', result.error)
            setError(result.error);
        } else {
            setpcData(result.data.name)
            console.log("Converted Data:", result.data);
        }
        setLoading(false);
    };
    if (loading) return <ActivityIndicator size="large" color="blue"/>;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <BackButton ></BackButton>
                <View style={{ flex: 1 }} >
                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'red', padding: 10, margin: 10 }} onPress={() => handleloginData()}>
                        <Text>Get api without headres</Text>
                    </TouchableOpacity>

                    <Text style={{ fontWeight: 'bold', margin: 5 }}>Title: {data?.title || "No Data"}</Text>

                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'red', padding: 10, margin: 10 }} onPress={() => fetchDataWithHeader()}>
                        <Text>Get api with headres</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 5 }}>unmatchedCCstatementsCount is : {unmatchedCCstatementsCount}</Text>


                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'red', padding: 10, margin: 10 }} onPress={() => fetchCityList()}>
                        <Text>Get api with Modal Class</Text>
                    </TouchableOpacity>

                    <Text style={{ margin: 5 }}>city list is : {cities}</Text>

                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'red', padding: 10, margin: 10 }} onPress={() => fetchCityListWithParam()}>
                        <Text>Get api with parameter</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 5 }}>country list is : {country}</Text>


                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'red', padding: 10, margin: 10 }} onPress={() => postApiWithParam()}>
                        <Text>Post api with parameter</Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 5 }}>selected device is : {pcInfo}</Text>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }], // Adjust to perfectly center
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
})