import { Pressable, View, Text, StyleSheet } from "react-native";

const NextButton = ({ getData, nextPage }) => {
    return (
        <Pressable style={styles.buttonContainer} onPress={() => (getData(nextPage))}>
            <View style={styles.button}>
                <Text style={styles.text}>Next Page</Text>
            </View>
        </Pressable>
    );
}

const PrevButton = ({ getData, prevPage }) => {
    return (
        <Pressable style={styles.buttonContainer} onPress={() => (getData(prevPage))}>
            <View style={styles.button}>
                <Text style={styles.text}>Previous Page</Text>
            </View>
        </Pressable>
    );
}

const PaginationButtons = ({ getData, prevPage, nextPage }) => {
    if (!nextPage && prevPage) {
        return <PrevButton getData={getData} prevPage={prevPage} />
    }
    else if (!prevPage && nextPage) {
        return <NextButton getData={getData} nextPage={nextPage} />
    }
    else if (!prevPage && !nextPage) {
        return null;
    }
    else {
        return (
            <View style={styles.container}>
                <PrevButton getData={getData} prevPage={prevPage} />
                <NextButton getData={getData} nextPage={nextPage} />
            </View>
        );
    }
}

export default PaginationButtons;

const styles = StyleSheet.create({
    container: {
        width: "75%",
        marginHorizontal: "auto"
    },
    buttonContainer: {
        overflow: "hidden",
        borderRadius: 9999, // Fully rounded
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: "1vh",
        backgroundColor: "rgb(0, 107, 179)",
        borderRadius: 9999,
        paddingVertical: "1vh",
        paddingHorizontal: 20,
        position: "relative",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    text: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 10,
    }
})