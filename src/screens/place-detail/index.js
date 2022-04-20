import React, {useEffect} from 'react';
import { View, Text, Button, Image } from 'react-native';
import { colors } from '../../constants/themes';
import { styles } from './styles';

import {useSelector, useDispatch} from 'react-redux';
import PlaceItem from '../../components/molecules/place-item';
import {placeActions} from '../../store/action';

const PlaceDetail = ({ route }) => {
    const { id } = route.params;
    const place = useSelector(state => state.places.places.find(place => place.id === id))
    return (
        <View style={styles.details}>
            <Text style={styles.name}>{place.name}</Text>
            <Image source={{uri: place.image}} style={styles.image} />          
            <Text style={styles.address}>Dirección:     {place.address}</Text>
            <Text style={styles.address}>Latitud:          {place.latitude}</Text>
            <Text style={styles.address}>Longitud:       {place.longitude}</Text>
        </View>
    )
}

export default PlaceDetail;