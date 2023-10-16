import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Gbox: {
        width: 350,
        height: 400,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    box: {
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'blue',
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
    },
});