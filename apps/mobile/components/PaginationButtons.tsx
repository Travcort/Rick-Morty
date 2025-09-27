import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

type PrevButtonProps = {
    getData: (url: string) => Promise<void>;
    prevPage: string;
};

type NextButtonProps = {
    getData: (url: string) => Promise<void>;
    nextPage: string;
};

type PaginationButtonProps = {
    getData: (url: string) => Promise<void>;
    prevPage: string;
    nextPage: string;
};

const NextButton = ({ getData, nextPage }: NextButtonProps) => {
    return (
        <Button mode="contained" style={{ marginVertical: '5%' }} onPress={() => (getData(nextPage))}>
            Next Page
        </Button>
    );
}

const PrevButton = ({ getData, prevPage }: PrevButtonProps) => {
    return (
        <Button mode="contained" style={{ marginVertical: '5%' }} onPress={() => (getData(prevPage))}>
            Previous Page
        </Button>
    );
}

const PaginationButtons = ({ getData, prevPage, nextPage }: PaginationButtonProps) => {
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
        width: "80%",
        marginHorizontal: "auto"
    }
})