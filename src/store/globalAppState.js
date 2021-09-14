// Global App State

const appStorageName = 'movie';
function getFavs(){
    let favsFromStorage = localStorage.getItem(appStorageName);
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
}

const actions = {
    addFav: (objMovie) => {
        const favs = getFavs();
        if(favs.find(fav => fav.id === objMovie.id)) return;
        favs.push(objMovie);
        const newFavsForStorage = JSON.stringify(Array.from(new Set(favs)));
        localStorage.setItem(appStorageName, newFavsForStorage);
        return favs;
    },
    removeFav: (objMovie) => {
        let favs = getFavs();
        favs = favs.filter(fav => fav.id !== objMovie.id);
        let favsForStorage = JSON.stringify(favs);
        localStorage.setItem(appStorageName, favsForStorage);
        return favs;
    }
}

export default {
    getFavs,
    actions
};