import {IEpisode, ILocation, IUser} from '../../type/types';

export interface ISchemaUsers {
  characters: {
    info: {
      next: number;
    };
    results: Array<IUser>;
  };
};

export interface ISchemaUser {
  character: IUser;
};

export interface ISchemaLocations {
  locations: {
    info: {
      next: number;
    };
    results: Array<ILocation>;
  };
};

export interface ISchemaLocation {
  location: ILocation;
};

export interface ISchemaEpisodes {
  episodes: {
    info: {
      next: number;
    };
    results: Array<IEpisode>;
  };
};

export interface ISchemaEpisode {
  episode: IEpisode;
};
