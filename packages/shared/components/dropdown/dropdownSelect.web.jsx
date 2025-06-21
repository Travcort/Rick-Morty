import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useColorScheme, StyleSheet } from 'react-native';
import { Flex, Input, Button, useBreakpointValue, Select, IconButton, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { IoFilterSharp, IoSearch } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import useStore from '../../store/stateStore';
import { Theme } from '../../store/colours';

const Dropdown =  ({ data }) => {
    const theme = Theme[useColorScheme()];
    const isMobile = useBreakpointValue({ base: true, md: false });

    const [selectedValues, setSelectedValues] = useState({});
    const fetchFiltered = useStore((state) => state.fetchFilteredData);
    const setSearchQuery = useStore((state) => state.setSearchQuery);
    const query = useStore((state) => state.searchQuery);

    const navigate = useNavigate();
    const handleSearch = (page, endpoint, filter, value) => {
        const url = `https://rickandmortyapi.com/api/${endpoint}/?${filter}=${value}`;
        fetchFiltered(url); 
        setSearchQuery('');
        navigate(page);
    }

    const handleSelectChange = (key, value) => {
        setSelectedValues(prev => ({
            ...prev,
            [key]: value,
        }));
        setSearchQuery(value);
        handleSearch(data[0].page, data[0].endpoint, key, value);
    }

    const displayOptions = () => (
        data.slice(1).map((item) => (
            item?.options &&
            <Select key={item.key} placeholder={item.value} width="20%" onChange={(e) => handleSelectChange(item.key, e.target.value)} value={selectedValues[item.key] || ""}>
                {item?.options.map((opt) => (
                    <option key={opt.key} value={opt.value.toLowerCase()}>{opt.value}</option>
                ))}
            </Select>
        ))
    )

    return (
        <Flex style={styles.dropdownBox} width={{base: "80%", md: "50%"}} flexDirection={isMobile ? 'column' : 'row'} gap="2vh">
            <Flex align="center" width={{ base: '100%', md: '50%' }}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <IoSearch />
                    </InputLeftElement>
                    <Input
                        placeholder="Filter by name..."
                        variant="filled"
                        borderRadius="md"
                        value={query}
                        onChange={(e) => handleSelectChange('1', e.target.value)}
                    />
                    <InputRightElement>
                        <IconButton 
                            aria-label='Search' icon={<TiTick />} 
                            onClick={handleSearch}
                        />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            {
                isMobile
                ? (
                    <Button leftIcon={<IoFilterSharp />} variant='solid' onClick={displayOptions}>Advanced Filters</Button>
                )
                : (
                    displayOptions()
                )
            }
        </Flex>
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