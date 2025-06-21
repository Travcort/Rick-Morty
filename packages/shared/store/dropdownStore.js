export const charactersDropdownData = [
    {
        endpoint: 'character',
        page: '/filteredCharacters'
    },
    {
        key: 'name', 
        value: 'Name'
    },
    {
        key: 'status', 
        value: 'Status',
        options: [
            {key: '1', value: 'Alive'},
            {key: '2', value: 'Dead'},
            {key: '3', value: 'Unknown'}
        ]
    },
    {
        key: 'species', 
        value: 'Species',
        options: [
            {key: '1', value: 'Human'},
            {key: '2', value: 'Humanoid'},
            {key: '3', value: 'Alien'},
        ]

    },
    {
        key: 'gender', 
        value: 'Gender',
        options: [
            {key: 1, value: 'Male'},
            {key: 2, value: 'Female'},
        {   key: 3, value: 'Unknown'}
        ]
    }
]

export const locationsDropdownData = [
    {
        endpoint: 'location',
        page: '/filteredLocations'
    },
    {
        key:'name', 
        value:'Name'
    },
    {
        key:'type', 
        value:'Type'
    },
    {
        key:'dimension', 
        value:'Dimension'
    }
]

export const episodesDropdownData = [
    {
        endpoint: 'episode',
        page: '/filteredEpisodes'
    },
    {
        key:'name', 
        value:'Name'

    },
    {
        key:'episode', 
        value:'Episode'

    },
]