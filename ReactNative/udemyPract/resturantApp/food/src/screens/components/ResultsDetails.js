import React from 'react';
import { View,Image, Text, StyleSheet} from 'react-native';

const ResultsDetails = ({result}) => {
    return <View styles={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}}/>
        <Text>{result.name}</Text>
        <Text>{result.rating} Starts, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }

});

export default ResultsDetails;