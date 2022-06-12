import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../../navigation/navigation-types';

interface DetailScreen {
    route: RootStackScreenProps<'DetailScreen'>['route'];
}

const DetailScreen = (props: DetailScreen): ReactElement => {
    return (
        <View style={styles.container}>
            <Text>Hi {props.route?.params?.name}</Text>
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
