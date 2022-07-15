import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RootObjectStates } from './models/statesModel';
import { RootObjectDistrict } from './models/districtModel';
import {RootObjectSession} from './models/sessionModel';
import { RootObjectWeekSlot } from './models/slotDateRangeModel';



const URL = "https://cdn-api.co-vin.in/api";

const URL_FINDBYDISTRICT = "/v2/appointment/sessions/public/findByDistrict";
const URL_FINDBYPINCODE = "/v2/appointment/sessions/public/findByPin";
@Injectable({
  providedIn: 'root'
})


export class VaccineService {

  baseURl:string = "https://cdn-api.co-vin.in/api"

   URL_FINDBYDISTRICT_FINAL = URL + URL_FINDBYDISTRICT;
   URL_FINDBYPINCODE_FINAL = URL + URL_FINDBYPINCODE;

  constructor(private http: HttpClient) { }

  // private headerObj = new HttpHeaders( {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'})


  // headers = {
  //   'accept': 'application/json',
  //   'Accept-Language': 'hi_IN',
  //   'X-Requested-With': 'XMLHttpRequest',
  //   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
  // }


  //States Metadata
  getStates():Observable<HttpResponse<RootObjectStates>>{
    return this.http.get<RootObjectStates>(`${this.baseURl}/v2/admin/location/states`,{observe:'response'});
  }


  //Districts Metadata
  getDistricts(state_id:number):Observable<HttpResponse<RootObjectDistrict>>
  {
    return this.http.get<RootObjectDistrict>(`${this.baseURl}/v2/admin/location/districts/${state_id}`,{observe:'response'});
  }




  //Vaccination Session by Pin
  getSessionByPin(pincode:number,date:string):Observable<HttpResponse<RootObjectSession>>
  {
    return this.http.get<RootObjectSession>(this.URL_FINDBYPINCODE_FINAL + "?pincode=" + pincode + "&date=" +date, {observe:'response'});
  }

  //Vaccination Session by District
  getSessionByDistrict(district_id:number,date:String):Observable<HttpResponse<RootObjectSession>>
  {

    return this.http.get<RootObjectSession>(this.URL_FINDBYDISTRICT_FINAL + "?district_id=" + district_id + "&date=" + date, {observe:'response'});
  }

  // //Vaccination Slot for week by pincode
  // getSlotForWeekByPin(pincode:number,date:Date):Observable<HttpResponse<RootObjectWeekSlot[]>>
  // {
  //   return this.http.get<RootObjectWeekSlot[]>(`${this.baseURl}/V2/appointment/sessions/public/calendarByPin/${pincode}/${date}`, {observe:'response'});
  // }

  // //Vaccination slor for week by district
  // getSlotForWeekByDistrict(district_id:number,date:Date):Observable<HttpResponse<RootObjectWeekSlot[]>>
  // {
  //   return this.http.get<RootObjectWeekSlot[]>(`${this.baseURl}/V2/appointment/sessions/public/calendarByDistrict/${district_id}/${date}`, {observe:'response'});
  // }



}
