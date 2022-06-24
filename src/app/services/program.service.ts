import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService, HandleError } from "./http-error-handler.service";
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private handleError: HandleError;
  public token: any;
  public headers: any;
  public options: any;


  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    private storage: Storage) {
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }
  getApiHeaders(extraHeader = {}, checkAuth = false) {

    if (checkAuth) {
      this.token = localStorage.getItem('userToken');
      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    return this.options = { headers: this.headers };
  }
  // ---------------------------- program -------------------------------

  insertProgram(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/insertProgram', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('insertProgram', data)));
  }
  editProgram(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/editProgram', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('editProgram', data)));
  }

  fetchAllProgram(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/fetchAllProgram', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('fetchAllProgram')));
  }

  fetchMusic(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/fetchMusic', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('fetchMusic')));
  }

  updateProgramMusic(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateProgramMusic', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateProgramMusic', data)));
  }

  searchMusic(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/searchMusic', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('searchMusic', data)));
  }

  getProgramById(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getProgramById', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getProgramById', data)));
  }

  updateEquipment(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateEquipment', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateEquipment', data)));
  }
  updateNutrition(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateNutrition', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateNutrition', data)));
  }

  updateVideo(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateVideo', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateVideo', data)));
  }

  updateDescription(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateDescription', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateDescription', data)));
  }
  getUpcomingPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getUpcomingPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getUpcomingPrograms', formData)));
  }

  getHostedPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getHostedPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getHostedPrograms', formData)));
  }
  getSchedulePrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getSchedulePrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getSchedulePrograms', formData)));
  }

  getRequestedPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getRequestedPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getRequestedPrograms', formData)));
  }

  getAllRequestedPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAllRequestedPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAllRequestedPrograms', formData)));
  }

  acceptProgramRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/acceptProgramRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('acceptProgramRequest', formData)));
  }

  getAcceptedPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAcceptedPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAcceptedPrograms', formData)));
  }

  advertiseRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/advertiseRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('advertiseRequest', formData)));
  }

  getAdDetail(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAdDetail', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAdDetail', formData)));
  }

  getAdCompanyDetails(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAdCompanyDetails', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAdCompanyDetails', formData)));
  }

  acceptSponsers(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/acceptSponsers', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('acceptSponsers', formData)));
  }

  checkStreaming(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/checkStreaming', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('checkStreaming', formData)));
  }

  joinRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/joinProgramRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('joinRequest', formData)));
  }

  acceptJoinRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/acceptJoinRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('acceptJoinRequest', formData)));
  }
  deleteJoinRequest(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/deleteJoinRequest', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('deleteJoinRequest', formData)));
  }
  deleteProgram(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/deleteProgram', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('deleteProgram', formData)));
  }

  getConsultPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getConsultPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getConsultPrograms', formData)));
  }

  getAllUpcomingPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAllUpcomingProgram', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAllUpcomingPrograms', formData)));
  }
  getAllSelectedUpcomingPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAllSelectedUpcomingPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAllSelectedUpcomingPrograms', formData)));
  }

  getSponserComment(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getSponserComment', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getSponserComment', formData)));
  }
  addSponserComment(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/addSponserComment', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('addSponserComment', formData)));
  }

  getSponserList(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getSponserList', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getSponserList', formData)));
  }

  openTokSessionCreate(data) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/openTokSessionCreate', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('openTokSessionCreate', data)));
  }
  setEnxData(data) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/set_enx_data', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('setEnxData', data)));
  }
  getEnxData(data) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/get_enx_data', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getEnxData', data)));
  }
  fetchEquipmentList(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/fetchEquipmentList', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('fetchEquipmentList')));
  }
  fetchSelectedEquipmentList(data): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/fetchSelectedEquipmentList', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('fetchSelectedEquipmentList', data)));
  }
  fetchAllSelectedEquipmentList(data): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/fetchAllSelectedEquipmentList', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('fetchAllSelectedEquipmentList', data)));
  }
  updateProgramFees(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateProgramFees', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateProgramFees', data)));
  }
  updateEquipmentList(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateEquipmentList', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateEquipmentList', data)));
  }

  insertProgPaymentDetail(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/insertProgPaymentDetail', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('insertProgPaymentDetail', data)));
  }

  insertIntoactivePaymentDetail(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/insertIntoactivePaymentDetail', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('insertIntoactivePaymentDetail', data)));
  }

  insertEquipmentPaymentDetail(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/insertEquipmentPaymentDetail', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('insertEquipmentPaymentDetail', data)));
  }

  getPaymentStatus(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getPaymentStatus', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getPaymentStatus')));
  }

  getPendingPaymentStatus(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getPendingPaymentStatus', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getPendingPaymentStatus', data)));
  }

  getIntoActivePendingPaymentStatus(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getIntoActivePendingPaymentStatus', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getIntoActivePendingPaymentStatus', data)));
  }

  getEachUserData(id: any) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getEachUserData', id, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getEachUserData', id)));
  }

  updateWatchCounter(id: any) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/updateWatchCounter', id, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('updateWatchCounter', id)));
  }

  createStripeCustomerId(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/createStripeCustomerId', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('createStripeCustomerId', data)));
  }

  createStripeConnectAccount(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/createStripeConnectAccount', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('createStripeConnectAccount', data)));
  }

  getAllNutritionPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAllNutritionPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAllNutritionPrograms', formData)));
  }

  getAllVideoPrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAllVideoPrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAllVideoPrograms', formData)));
  }

  getAllLivePrograms(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getAllLivePrograms', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getAllLivePrograms', formData)));
  }

  getPricing() {
    return this.http.get<any>(Config.ApiUrl + 'api/auth/getPricing', this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getPricing')));
  }

}
