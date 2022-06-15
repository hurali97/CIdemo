import React, { ReactElement, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (): ReactElement => {
    const [name, setName] = useState<string>('');

    const navigation = useNavigation();

    const onClick = (): void => {
        navigation.navigate('DetailScreen', { name });
    };

    return (
        <View style={styles.container}>
            <Text>Welcome to CI Demo</Text>
            <TextInput
                testID="nameInput"
                value={name}
                placeholder="Enter your name"
                onChangeText={setName}
                style={styles.input}
            />
            <Button testID="clickMe" title="Click Me" onPress={onClick} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginVertical: 20,
        borderBottomWidth: 1,
        padding: 5,
        width: '40%',
    },
});
