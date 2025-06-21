import { useState } from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useStore from '../../store/stateStore';
import { Theme } from '../../store/colours';

const Dropdown =  ({ showSearch, data }) => {
    const theme = Theme[useColorScheme()];

    const [selected, setSelected] = useState('');
    const setFilter = useStore((state) => state.setSearchFilter);

    return (
        <SelectList
            placeholder='Search By:'
            boxStyles={{ width: "80%", margin: 'auto', borderColor: theme.inverseText, marginVertical: 10 }}
            inputStyles={{ color: theme.inverseText }}
            arrowicon={<FontAwesome name='chevron-down' size={24} color={theme.inverseText} />}
            dropdownTextStyles={{ color: theme.inverseText }}
            setSelected={(val) => {
                const lower = val.toLowerCase();
                setSelected(lower);
            }}
            save='value'
            search={false}
            onSelect={() => {
                showSearch();
                setFilter(selected);
            }}
            data={data.slice(1)}
        /> 
    );
}

export default Dropdown;

const styles = StyleSheet.create({
    dropdownBox: {
        margin: 'auto',
        marginTop: "1vh",
        marginBottom: "1vh",
    },
    dropdown: {
        width: '50%'
    }
})