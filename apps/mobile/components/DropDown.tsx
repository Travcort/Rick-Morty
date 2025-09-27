import { Dispatch, SetStateAction } from "react";
import { Checkbox, List, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { CharactersDropdownTypes, EpisodesDropdownTypes, LocationsDropdownTypes } from 'shared/store/dropdownStore';

type DropDownProps = {
    selectedOptions: Record<string, string[]>;

    dropDownData: Array<CharactersDropdownTypes|LocationsDropdownTypes|EpisodesDropdownTypes>;

    dropDownQuery: string;
    setDropDownQuery: Dispatch<SetStateAction<string>>;

    toggleExpand: (key: string) => void;

    toggleOption: (groupKey: string, optionKey: string) => void
};

const DropDown =  ({ selectedOptions, dropDownData, dropDownQuery, setDropDownQuery, toggleExpand, toggleOption }: DropDownProps) => {

    return (
        <List.Section>
            {dropDownData.slice(1).map((item )=> {
                if ("options" in item) {
                    return (
                        <List.Accordion
                            key={item.key}
                            title={item.value}
                            left={props => 
                                <List.Icon {...props} 
                                    icon={item.key === "gender"
                                    ? "gender-male-female" 
                                    : "folder"
                                    }
                                />
                            }
                            onPress={() => {
                                toggleExpand(item.key);
                            }}
                        >
                            {
                                item.options.map(option => (
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
                                    icon={item.key === "gender"
                                    ? "gender-male-female" 
                                    : "folder"
                                    }
                                />
                            }
                            onPress={() => {
                                toggleExpand(item.key);
                            }}
                        >
                            <TextInput
                                key={item.key}
                                label={item.value}
                                value={dropDownQuery}
                                onEndEditing={() => toggleOption(item.key, dropDownQuery)}
                                onChangeText={text => setDropDownQuery(text)}
                            />
                        </List.Accordion>
                    );
                }
            })}
        </List.Section>
    );
}

export default DropDown;