export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResults[];
};

export type PokemonListResults = {
  name: string;
  url: string;
};

export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: PastType[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: TypeElement[];
  weight: number;
};

export type Ability = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type GameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

export type HeldItem = {
  item: NamedAPIResource;
  version_details: VersionDetail[];
};

export type VersionDetail = {
  rarity: number;
  version: NamedAPIResource;
};

export type Move = {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
};

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
};

export type PastType = {
  generation: NamedAPIResource;
  types: TypeElement[];
};

export type Sprites = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: OtherSprites;
  versions: Versions;
};

export type OtherSprites = {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
};

export type DreamWorld = {
  front_default: string;
  front_female: string | null;
};

export type Home = {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
};

export type OfficialArtwork = {
  front_default: string;
};

export type Versions = {
  [key: string]: Generation;
};

export type Generation = {
  [key: string]: {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

export type TypeElement = {
  slot: number;
  type: NamedAPIResource;
};
