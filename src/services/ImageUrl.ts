
export const cropImageUrl = (url: string) => {
    if(!url) return '';

    const index = url.indexOf('media/');
    return url.slice(0,index) + 'media/crop/600/400/' + url.slice(url.indexOf('games/'))  
    
}

