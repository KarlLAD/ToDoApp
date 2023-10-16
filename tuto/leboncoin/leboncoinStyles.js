import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        backgroundColor: 'yellow',
        padding: 10,
    },
    cardImage: {
        width: width - 20,
        height: ((width - 20) / 3) * 1.5,
        backgroundColor: '#ccc',
        borderRadius: 15,
        alignItems: 'flex-end',
    },
    favIcon: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(250,250,250,250.5)',
        margin: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitlePrice: {
        flexDirection: 'row',
        height: 30,
        width: width - 20,
        marginTop: 10,
        backgroundColor: '#ccc',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },

    price: {
        fontSize: 18,
        fontWeight: '700',
        color: 'orange',
    },

    containerBrand: {
        flexDirection: 'row',
        height: 50,
        width: width - 20,
        marginTop: 10,
        backgroundColor: '#ccc',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    brand: {
        color: 'orange',
        backgroundColor: '#f9eee8',
        padding: 5,
        fontWeight: '600',
        margin: 5,
        borderRadius: 5,
    }
});