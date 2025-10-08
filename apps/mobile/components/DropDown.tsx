import { Dispatch, SetStateAction } from "react";
import { Checkbox, List, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { 
    type CharactersDropdownTypes, type EpisodesDropdownTypes, type LocationsDropdownTypes, 
    type FilterItem, type DropdownOptions 
} from 'shared/store/dropdownStore';

type DropDownProps = {
    selectedOptions: Record<string, string[]>;

    dropDownData: Array<CharactersDropdownTypes|LocationsDropdownTypes|EpisodesDropdownTypes>;

    dropDownQuery: { key: string; value: string; };
    setDropDownQuery: Dispatch<SetStateAction<{ key: string; value: string; }>>;

    toggleExpand: (key: string) => void;

    toggleOption: (groupKey: string, optionKey: string) => void
};

const DropDown =  ({ selectedOptions, dropDownData, dropDownQuery, setDropDownQuery, toggleExpand, toggleOption }: DropDownProps) => {

    const optionIcon = (key: string): string => {
        if (key === "gender") {
            return "gender-male-female"
        } else if (key === "species") {
            return "dna"
        } else if (key === "status") {
            return "heart-pulse"
        } else {
            return "label"
        }
    }

    return (
        <List.Section>
            {dropDownData
            .filter((item): item is DropdownOptions | FilterItem => !('endpoint' in item))
            .map((item)=> {
                if ("options" in item) {
                    return (
                        <List.Accordion
                            key={item.key}
                            title={item.value}
                            left={props => 
                                <List.Icon {...props} 
                                    icon={optionIcon(item.key)}
                                />
                            }
                            onPress={() => {
                                toggleExpand(item.key);
                            }}
                        >
                            {
                                item.options
                                .map((option) => (
                                    <View key={option.key} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <List.Item title={option.value} />
                                        <Checkbox
                                            key={item.key}
                                            status={
                                                (selectedOptions[item.key]?.includes(option.value.toLowerCase()))
                                                ? 'checked'
                                                : 'unchecked'
                                            }
                                            onPress={() => {
                                                toggleOption(item.key, option.value.toLowerCase())
                                            }}
                                        />
                                    </View>
                                ))
                            }
                        </List.Accordion>
                    );
                } else {
                    return (
                        <List.Accordion
                            key={item.key}
                            title={item.value}
                            left={props => 
                                <List.Icon {...props} 
                                    icon={optionIcon(item.key)}
                                />
                            }
                            onPress={() => {
                                toggleExpand(item.key);
                            }}
                        >
                            <TextInput
                                label={item.value}
                                value={dropDownQuery.value}
                                onChangeText={text => setDropDownQuery({ key: item.key, value: text })}
                            />
                        </List.Accordion>
                    );
                }
            })}
        </List.Section>
    );
}

export default DropDown;