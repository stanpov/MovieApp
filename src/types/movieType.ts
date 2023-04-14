export type Movie = {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: Number;
  riginal_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
  original_language: String;
};

export type MovieInfoType = {
  adult: Boolean;
  backdrop_path: String;
  belongs_to_collection: Boolean | null;
  budget: Number;
  genres: Genres[];
  homepage: String;
  id: Number;
  imdb_id: String;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String | null;
  production_companies: productionCompanies[];
  production_countries: productionCountries[];
  release_date: String;
  revenue: Number;
  runtime: Number;
  spoken_languages: spokenLanguages[];
  status: String;
  tagline: String;
  title: String;
  video: false;
  vote_average: Number;
  vote_count: Number;
  videos: videoMovie[];
  images: videoImages;
  credits: castProps;
};

export type Genres = {
  id: Number;
  name: String;
};

export type productionCompanies = {
  id: Number;
  logo_path: String;
  name: String;
  origin_country: String;
};

export type productionCountries = {
  iso_3166_1: String;
  name: String;
};

export type spokenLanguages = {
  iso_639_1: String;
  name: String;
};

export type videoMovie = {
  id: String;
  iso_639_1: String;
  iso_3166_1: String;
  key: String;
  name: String;
  official: Boolean;
  published_at: String;
  site: String;
  size: Number;
  type: String;
};

export type videoImages = {
  backdrops: imageProps[];
  logos: imageProps[];
  posters: imageProps[];
};

export type imageProps = {
  aspect_ratio: Number;
  file_path: String;
  height: Number;
  iso_639_1: String | null;
  vote_average: Number;
  vote_count: Number;
  width: Number;
};

export type peopleCast = {
  adult: Boolean;
  cast_id: Number;
  character: String;
  credit_id: String;
  gender: Number;
  id: Number;
  known_for_department: String;
  name: String;
  order: Number;
  original_name: String;
  popularity: Number;
  profile_path: String;
};
export type castProps = {
  cast: peopleCast[];
  crew: peopleCast[];
};

export type MediaType = "movie" | "tv";
