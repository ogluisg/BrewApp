export type Beer = {
  abv: number;
  attenuation_level: number;
  boil_volume: {
    unit: string;
    value: number;
  };
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: Array<string>;
  ibu: number;
  id: number;
  image_url: string;
  ingredients: {
    hops: any[];
    malt: any[];
    yeast: string;
  };
  method: {
    fermentation: { temp: [Object] };
    mash_temp: [[Object]];
    twist: null;
  };
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: {
    unit: string;
    value: number;
  };
};
