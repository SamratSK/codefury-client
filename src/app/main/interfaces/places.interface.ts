export interface PlacesReponse {
  items: Place[];
}

export interface Place {
  title: string;
  position: Position;
}

export interface Position {
  lat: number;
  lng: number;
}