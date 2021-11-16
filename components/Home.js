import React, { useState, useEffect } from 'react';
import apiParams from '../config'
import axios from 'axios';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Card from './Card';

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { ts, apikey, hash, baseURL } = apiParams;
  
    useEffect(() => {
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    //console.log('Data en Home: ', data)
    return (
      <View>
        {isLoading 
          ? <ActivityIndicator size="large" color="#00ff00" /> 
          : (
            <FlatList
              data={data}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <Card 
                  image={`${item?.thumbnail?.path}/portrait_small.${item?.thumbnail?.extension}`} 
                  name={item.name} />
              )}
            />
          )
        }
      </View>
    );
  }


// import { data } from '../data/data';

// export default function Home() {
//     return (
//         <FlatList 
//             data={data}
//             renderItem={({item}) => <Card name={item.key} img={item.img}/>}
//             keyExtractor={item => item.key}
//         />
//     )
// }