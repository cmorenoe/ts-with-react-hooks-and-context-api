import { Dispatch } from './../types/Dispatch'
import { IEpisode, IAction, IState } from '.'

export interface IEpisodeProps {
	episodes: Array<IEpisode>
	store: { state: IState; dispatch: Dispatch }
	toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction
	favourites: Array<IEpisode>
}
