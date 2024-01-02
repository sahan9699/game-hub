import noImage from   '../assets/no-image-placeholder-6f3882e0.webp'

export const cropImageUrl = (url: string) => {
    if(!url) return noImage;

    const index = url.indexOf('media/');
    return url.slice(0,index) + 'media/crop/600/400/' + url.slice(url.indexOf('games/'))  
    
}