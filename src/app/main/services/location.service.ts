import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppService } from './app.service';
import { Place, PlacesReponse } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient, private app: AppService) {}

  private readonly LAT = '<LAT>';
  private readonly LON = '<LON>';
  private readonly HERE_API_KEY_TEMPLATE = '<API_KEY>';

  private readonly GEO_URL = 'https://get.geojs.io/v1/ip/geo.json';
  private readonly SEARCH_API = `https://discover.search.hereapi.com/v1/discover?at=${this.LAT},${this.LON}&q=emergency%20hospital&limit=10&apikey=${this.HERE_API_KEY_TEMPLATE}`;

  private location: { lat: number; lon: number } | null = null;
  private emergency_hospitals: Place[] = [];

  async init() {
    await this._getCurrentLocation();
    if (this.location) await this._getEmergencyHospitals(this.location);
  }

  getCurrent(): { lat: number; lon: number } {
    if (this.location) return this.location;
    else throw new Error('Location service not initialized');
  }

  getEmergencyHospitals(): Place[] {
    return this.emergency_hospitals;
  }
  

  private async _getCurrentLocation() {
    // try {
    //   const data = await lastValueFrom(this.http.get<any>(this.GEO_URL));
    //   this.location = {
    //     lat: Number(data.latitude),
    //     lon: Number(data.longitude),
    //   };
    // } catch (error) {
    //   console.error('Error fetching geolocation data:', error);
    // }
    this.location = { lat: 12.9634, lon: 77.5855 };
  }

  private async _getEmergencyHospitals(loc: { lat: number; lon: number }) {
    try {
      const data = await lastValueFrom(
        this.http.get<PlacesReponse>(
          this.SEARCH_API.replace(this.LAT, loc.lat.toString())
            .replace(this.LON, loc.lon.toString())
            .replace(this.HERE_API_KEY_TEMPLATE, this.app.HERE_API_KEY)
        )
      );
      this.emergency_hospitals = data.items;

      console.log('LOADED');
      
    } catch (error) {
      console.error('Error fetching geolocation data:', error);
    }
  }
}
