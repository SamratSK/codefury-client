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
    // const url = this.DISASTER_URL.replace(
    //   this.FROM_TEMPLATE,
    //   from.toISOString().split('T')[0]
    // ).replace(this.TO_TEMPLATE, to.toISOString().split('T')[0]);

    // try {
    //   return await lastValueFrom(this.http.get<ResponseData>(url));
    // } catch (error) {
    //   console.error('Error disaster data');
    //   return null;
    // }
    return new Promise((resolve, reject) =>
      resolve({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            bbox: [101.989, 13.65, 101.989, 13.65],
            geometry: { type: 'Point', coordinates: [101.989, 13.65] },
            properties: {
              eventtype: 'DR',
              eventid: 1017005,
              episodeid: 10,
              eventname: 'Southeast Asia-2024',
              glide: 'DR-2024-000057-VNM',
              name: 'Drought in Bhutan, China, India, Cambodia, Myanmar, Malaysia, Philippines, Thailand, Vietnam',
              description:
                'Drought in Bhutan, China, India, Cambodia, Myanmar, Malaysia, Philippines, Thailand, Vietnam',
              htmldescription:
                'Green Drought in Bhutan, China, India, Cambodia, Myanmar, Malaysia, Philippines, Thailand, Vietnam from: 21 Feb 2024  to: 10 Aug 2024 .',
              icon: 'https://www.gdacs.org/images/gdacs_icons/maps/Green/DR.png',
              iconoverall:
                'https://www.gdacs.org/images/gdacs_icons/maps/Green/DR.png',
              url: {
                geometry:
                  'https://www.gdacs.org/gdacsapi/api/polygons/getgeometry?eventtype=DR&eventid=1017005&episodeid=10',
                report:
                  'https://www.gdacs.org/report.aspx?eventid=1017005&episodeid=10&eventtype=DR',
                details:
                  'https://www.gdacs.org/gdacsapi/api/events/geteventdata?eventtype=DR&eventid=1017005',
              },
              alertlevel: 'Green',
              alertscore: 1,
              episodealertlevel: 'Green',
              episodealertscore: 0.75,
              istemporary: 'false',
              iscurrent: 'false',
              country:
                'Bhutan, China, India, Cambodia, Myanmar, Malaysia, Philippines, Thailand, Vietnam',
              fromdate: '2024-02-21T00:00:00',
              todate: '2024-08-10T00:00:00',
              datemodified: '2024-08-10T05:58:07',
              iso3: 'BTN',
              source: 'GDO',
              sourceid: '',
              polygonlabel: 'Centroid',
              Class: 'Point_Centroid',
              affectedcountries: [
                { iso3: 'BTN', countryname: 'Bhutan' },
                { iso3: 'CHN', countryname: 'China' },
                { iso3: 'IND', countryname: 'India' },
                { iso3: 'KHM', countryname: 'Cambodia' },
                { iso3: 'MMR', countryname: 'Myanmar' },
                { iso3: 'MYS', countryname: 'Malaysia' },
                { iso3: 'PHL', countryname: 'Philippines' },
                { iso3: 'THA', countryname: 'Thailand' },
                { iso3: 'VNM', countryname: 'Vietnam' },
              ],
              severitydata: {
                severity: 190811,
                severitytext:
                  'Minor impact for agricultural drought in 190811 km2',
                severityunit: 'km2',
              },
            },
          },
          {
            type: 'Feature',
            bbox: [86.978, 23.919, 86.978, 23.919],
            geometry: { type: 'Point', coordinates: [86.978, 23.919] },
            properties: {
              eventtype: 'DR',
              eventid: 1017217,
              episodeid: 1,
              eventname: 'Bangladesh-India-2024',
              glide: '',
              name: 'Drought in Bangladesh, India',
              description: 'Drought in Bangladesh, India',
              htmldescription:
                'Green Drought in Bangladesh, India from: 21 Jun 2024  to: 10 Aug 2024 .',
              icon: 'https://www.gdacs.org/images/gdacs_icons/maps/Green/DR.png',
              iconoverall:
                'https://www.gdacs.org/images/gdacs_icons/maps/Green/DR.png',
              url: {
                geometry:
                  'https://www.gdacs.org/gdacsapi/api/polygons/getgeometry?eventtype=DR&eventid=1017217&episodeid=1',
                report:
                  'https://www.gdacs.org/report.aspx?eventid=1017217&episodeid=1&eventtype=DR',
                details:
                  'https://www.gdacs.org/gdacsapi/api/events/geteventdata?eventtype=DR&eventid=1017217',
              },
              alertlevel: 'Green',
              alertscore: 1,
              episodealertlevel: 'Green',
              episodealertscore: 0.5,
              istemporary: 'false',
              iscurrent: 'true',
              country: 'Bangladesh, India',
              fromdate: '2024-06-21T00:00:00',
              todate: '2024-08-10T00:00:00',
              datemodified: '2024-08-10T05:58:34',
              iso3: 'BGD',
              source: 'GDO',
              sourceid: '',
              polygonlabel: 'Centroid',
              Class: 'Point_Centroid',
              affectedcountries: [
                { iso3: 'BGD', countryname: 'Bangladesh' },
                { iso3: 'IND', countryname: 'India' },
              ],
              severitydata: {
                severity: 172783,
                severitytext:
                  'Minor impact for agricultural drought in 172783 km2',
                severityunit: 'km2',
              },
            },
          },
          {
            type: 'Feature',
            bbox: [88.2101, 27.1877, 88.2101, 27.1877],
            geometry: { type: 'Point', coordinates: [88.2101, 27.1877] },
            properties: {
              eventtype: 'EQ',
              eventid: 1441107,
              episodeid: 1587161,
              eventname: '',
              glide: '',
              name: 'Earthquake in India',
              description: 'Earthquake in India',
              htmldescription:
                'Green M 4.5 Earthquake in India at: 09 Aug 2024 01:27:12.',
              icon: 'https://www.gdacs.org/images/gdacs_icons/maps/Green/EQ.png',
              iconoverall:
                'https://www.gdacs.org/images/gdacs_icons/maps/Green/EQ.png',
              url: {
                geometry:
                  'https://www.gdacs.org/gdacsapi/api/polygons/getgeometry?eventtype=EQ&eventid=1441107&episodeid=1587161',
                report:
                  'https://www.gdacs.org/report.aspx?eventid=1441107&episodeid=1587161&eventtype=EQ',
                details:
                  'https://www.gdacs.org/gdacsapi/api/events/geteventdata?eventtype=EQ&eventid=1441107',
              },
              alertlevel: 'Green',
              alertscore: 1,
              episodealertlevel: 'Green',
              episodealertscore: 0,
              istemporary: 'false',
              iscurrent: 'true',
              country: 'India',
              fromdate: '2024-08-09T01:27:12',
              todate: '2024-08-09T01:27:12',
              datemodified: '2024-08-09T02:07:23',
              iso3: 'IND',
              source: 'NEIC',
              sourceid: '',
              polygonlabel: 'Centroid',
              Class: 'Point_Centroid',
              affectedcountries: [{ iso3: 'IND', countryname: 'India' }],
              severitydata: {
                severity: 4.5,
                severitytext: 'Magnitude 4.5M, Depth:44.269km',
                severityunit: 'M',
              },
            },
          },
          {
            type: 'Feature',
            bbox: [75.6741579, 18.9068356, 75.6741579, 18.9068356],
            geometry: { type: 'Point', coordinates: [75.6741579, 18.9068356] },
            properties: {
              eventtype: 'FL',
              eventid: 1102678,
              episodeid: 24,
              eventname: '',
              glide: 'FL-2024-000108-NPL',
              name: 'Flood in India',
              description: 'Flood in India',
              htmldescription:
                'Orange Flood in India from: 10 Jun 2024 01 to: 05 Aug 2024 01.',
              icon: 'https://www.gdacs.org/images/gdacs_icons/maps/Green/FL.png',
              iconoverall:
                'https://www.gdacs.org/images/gdacs_icons/maps/Orange/FL.png',
              url: {
                geometry:
                  'https://www.gdacs.org/gdacsapi/api/polygons/getgeometry?eventtype=FL&eventid=1102678&episodeid=24',
                report:
                  'https://www.gdacs.org/report.aspx?eventid=1102678&episodeid=24&eventtype=FL',
                details:
                  'https://www.gdacs.org/gdacsapi/api/events/geteventdata?eventtype=FL&eventid=1102678',
              },
              alertlevel: 'Orange',
              alertscore: 2,
              episodealertlevel: 'Green',
              episodealertscore: 0.5,
              istemporary: 'false',
              iscurrent: 'false',
              country: 'India',
              fromdate: '2024-06-10T01:00:00',
              todate: '2024-08-05T01:00:00',
              datemodified: '2024-08-06T05:34:09',
              iso3: 'IND',
              source: 'GLOFAS',
              sourceid: '',
              polygonlabel: 'Centroid',
              Class: 'Point_Centroid',
              affectedcountries: [{ iso3: 'IND', countryname: 'India' }],
              severitydata: {
                severity: 0,
                severitytext: 'Magnitude 0 ',
                severityunit: '',
              },
            },
          },
          {
            type: 'Feature',
            bbox: [74.3502, 34.146, 74.3502, 34.146],
            geometry: { type: 'Point', coordinates: [74.3502, 34.146] },
            properties: {
              eventtype: 'EQ',
              eventid: 1437062,
              episodeid: 1581824,
              eventname: '',
              glide: '',
              name: 'Earthquake in India',
              description: 'Earthquake in India',
              htmldescription:
                'Green M 4.5 Earthquake in India at: 12 Jul 2024 06:56:23.',
              icon: 'https://www.gdacs.org/images/gdacs_icons/maps/Green/EQ.png',
              iconoverall:
                'https://www.gdacs.org/images/gdacs_icons/maps/Green/EQ.png',
              url: {
                geometry:
                  'https://www.gdacs.org/gdacsapi/api/polygons/getgeometry?eventtype=EQ&eventid=1437062&episodeid=1581824',
                report:
                  'https://www.gdacs.org/report.aspx?eventid=1437062&episodeid=1581824&eventtype=EQ',
                details:
                  'https://www.gdacs.org/gdacsapi/api/events/geteventdata?eventtype=EQ&eventid=1437062',
              },
              alertlevel: 'Green',
              alertscore: 1,
              episodealertlevel: 'Green',
              episodealertscore: 0,
              istemporary: 'false',
              iscurrent: 'false',
              country: 'India',
              fromdate: '2024-07-12T06:56:23',
              todate: '2024-07-12T06:56:23',
              datemodified: '2024-07-12T09:02:02',
              iso3: 'IND',
              source: 'NEIC',
              sourceid: '',
              polygonlabel: 'Centroid',
              Class: 'Point_Centroid',
              affectedcountries: [{ iso3: 'IND', countryname: 'India' }],
              severitydata: {
                severity: 4.5,
                severitytext: 'Magnitude 4.5M, Depth:14.846km',
                severityunit: 'M',
              },
            },
          },
        ],
        bbox: null,
      })
    );
  }

  private async sos(sos: SOS): Promise<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const response = await firstValueFrom(
      this.http.post<any>(this.SOS_URL, JSON.stringify(sos), { headers })
    );
    return (response && response.status === 'success') ? response.message : ' Unable to perform SOS!';
  }

  getReponse() {
    return this.currentResponseData;
  }
}
