import { IEpisode, IAction, IState } from './interfaces'

export const fetchDataAction = async (dispatch: any) => {
	const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
	const dataJSON = await data.json()
	return dispatch({
		type: 'FETCH_DATA',
		payload: dataJSON._embedded.episodes,
	})
}

export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode): IAction => {
	const episodeInFav = state.favourites.includes(episode)
	console.log(episodeInFav)
	let dispatchObj: IAction = {
		type: 'ADD_FAV',
		payload: episode,
	}
	if (episodeInFav) {
		const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id)
		dispatchObj = { type: 'REMOVE_FAV', payload: favWithoutEpisode }
	}
	return dispatch(dispatchObj)
}
