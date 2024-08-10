import { User } from "./auth.interface";

export interface ResponseData {
  type: string;
  features: Feature[];
  bbox: number[] | null;
}

export interface Feature {
  type: string;  // This was missing in the previous version
  bbox: number[];
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  eventtype: string;
  eventid: number;
  episodeid: number;
  eventname: string;
  glide: string;
  name: string;
  description: string;
  htmldescription: string;
  icon: string;
  iconoverall: string;
  url: Url;
  alertlevel: string;
  alertscore: number;
  episodealertlevel: string;
  episodealertscore: number;
  istemporary: string;
  iscurrent: string;
  country: string;
  fromdate: string;
  todate: string;
  datemodified: string;
  iso3: string;
  source: string;
  sourceid: string;
  polygonlabel: string;
  Class: string;
  affectedcountries: AffectedCountry[];
  severitydata: SeverityData;
}

export interface Url {
  geometry: string;
  report: string;
  details: string;
}

export interface AffectedCountry {
  iso3: string;
  countryname: string;
}

export interface SeverityData {
  severity: number;
  severitytext: string;
  severityunit: string;
}

export interface SOS {
  location: {lat: number; lon: number};
  user: User | null
}