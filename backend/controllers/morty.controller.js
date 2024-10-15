const baseUrl = 'https://rickandmortyapi.com/api';

export const base = (req,res) => {
    res.json({success: true, message: "Working Backend"});
}

export const getLocation = (req,res) => {
    const id = req.params.id

    fetch(`${baseUrl}/location/${id}`)
    .then((response) => response.json())
    .then((data) => {
        return res.status(200).json({success: true, message: data});
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    })
}

export const getCharacter = (req,res) => {
    const id = req.params.id

    fetch(`${baseUrl}/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        return res.status(200).json({success: true, message: data});
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    })
}

export const getEpisode = (req,res) => {
    const id = req.params.id

    fetch(`${baseUrl}/episode/${id}`)
    .then((response) => response.json())
    .then((data) => {
        return res.status(200).json({success: true, message: data});
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    })
}