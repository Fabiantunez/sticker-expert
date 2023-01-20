
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/stickers/search?api_key=VUC8Nx2Yb6zwGGKOmqx7sJ4PrMBk0yc7&q=${ category }&limit=20`;
    // peticion http
    const resp = await fetch( url );
    const { data } = await resp.json()

    //tomo lo que necesito de la data
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    
    return gifs;
}