import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ResponseData, SOS } from '../interfaces/disaster.interface';

@Injectable({
  providedIn: 'root',
})
export class DisasterService {
  private BASE = '.';

  private SOS_URL = `${this.BASE}/api/sos`;

  private readonly DAYS_BUFFER = 30;
  private readonly FROM_TEMPLATE = '<FROM>';
  private readonly TO_TEMPLATE = '<TO>';

  private readonly DISASTER_URL = `http://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH?fromDate=${this.FROM_TEMPLATE}&toDate=${this.TO_TEMPLATE}&alertlevel=Green;Orange;Red&eventlist=&country=India`;

  private currentResponseData: ResponseData | null = null;

  constructor(private http: HttpClient) {}

  async init() {
    const current = new Date();
    this.currentResponseData = await this.getDisasters(
      this.subtractDays(current, this.DAYS_BUFFER),
      current
    );
  }

  private subtractDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  private async getDisasters(
    from: Date,
    to: Date = new Date()
  ): Promise<ResponseData | null> {
    const url = this.DISASTER_URL.replace(
      this.FROM_TEMPLATE,
      from.toISOString().split('T')[0]
    ).replace(this.TO_TEMPLATE, to.toISOString().split('T')[0]);

    try {
      return await lastValueFrom(this.http.get<ResponseData>(url));
    } catch (error) {
      console.error('Error disaster data');
      return null;
    }
  }

  async sos(sos: SOS): Promise<[boolean, string]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const response = await firstValueFrom(
      this.http.post<any>(this.SOS_URL, JSON.stringify(sos), { headers })
    );
    
    return (response && response.success) ? [true, response.message] : [false,'Unable to perform SOS!'];
  }

  getReponse() {
    return this.currentResponseData;
  }
}
