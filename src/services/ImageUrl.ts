
export const cropImageUrl = (url: string) => {
    const index = url.indexOf('media/');
    return url.slice(0,index) + 'media/crop/600/400/' + url.slice(url.indexOf('games/'))
}

export const cropImageForIconUrl = (url: string) => {
    const index = url.indexOf('media/');
    return url.slice(0,index) + 'media/crop/60/60/' + url.slice(url.indexOf('games/'))
}
