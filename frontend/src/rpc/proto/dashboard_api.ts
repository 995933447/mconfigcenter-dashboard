/* eslint-disable */
import request from "axios";
import api from './dashboard.d';

export class DashboardService {

  /** no comment **/
  static async GetRSAPubKey(req: api.dashboard.IGetRSAPubKeyReq): Promise<api.dashboard.IGetRSAPubKeyResp> {
    return await request.post('/dashboard/Dashboard/GetRSAPubKey', req)
  };

  /** no comment **/
  static async Login(req: api.dashboard.ILoginReq): Promise<api.dashboard.ILoginResp> {
    return await request.post('/dashboard/Dashboard/Login', req)
  };

  /** no comment **/
  static async GetUserInfo(req: api.dashboard.IGetUserInfoReq): Promise<api.dashboard.IGetUserInfoResp> {
    return await request.get('/dashboard/Dashboard/GetUserInfo', { params: req })
  };

  /** no comment **/
  static async DisabledRBAC(req: api.dashboard.IDisabledRBACReq): Promise<api.dashboard.IDisabledRBACResp> {
    return await request.get('/dashboard/Dashboard/DisabledRBAC', { params: req })
  };

  /** no comment **/
  static async ChangeUserPassword(req: api.dashboard.IChangeUserPasswordReq): Promise<api.dashboard.IChangeUserPasswordResp> {
    return await request.post('/dashboard/Dashboard/ChangeUserPassword', req)
  };

};
