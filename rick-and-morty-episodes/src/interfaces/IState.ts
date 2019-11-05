import { IEpisode } from '.'

export interface IState {
	episodes: Array<IEpisode>
	favourites: Array<IEpisode>
}
