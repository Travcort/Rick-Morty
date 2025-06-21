import { SelectList } from 'react-native-dropdown-select-list';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useStore from '../data/stateStore';
import { useColorScheme } from 'react-native';
import { Theme } from '../data/colours';

const Dropdown =  ({ showSearch, data }) => {
    const theme = Theme[useColorScheme()];

    const [selected, setSelected] = React.useState('');
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
            data={data}
        />
    );
}

export default Dropdown;