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

  /** no comment **/
  static async ListMenuConf(req: api.dashboard.IListMenuConfReq): Promise<api.dashboard.IListMenuConfResp> {
    return await request.get('/dashboard/Dashboard/ListMenuConf', { params: req })
  };

  /** no comment **/
  static async AddMenuConf(req: api.dashboard.IAddMenuConfReq): Promise<api.dashboard.IAddMenuConfResp> {
    return await request.post('/dashboard/Dashboard/AddMenuConf', req)
  };

  /** no comment **/
  static async UpdateMenuConf(req: api.dashboard.IUpdateMenuConfReq): Promise<api.dashboard.IUpdateMenuConfResp> {
    return await request.post('/dashboard/Dashboard/UpdateMenuConf', req)
  };

  /** no comment **/
  static async DeleteMenuConf(req: api.dashboard.IDeleteMenuConfReq): Promise<api.dashboard.IDeleteMenuConfResp> {
    return await request.post('/dashboard/Dashboard/DeleteMenuConf', req)
  };

  /** no comment **/
  static async ListRoleConf(req: api.dashboard.IListRoleConfReq): Promise<api.dashboard.IListRoleConfResp> {
    return await request.get('/dashboard/Dashboard/ListRoleConf', { params: req })
  };

  /** no comment **/
  static async AddRoleConf(req: api.dashboard.IAddRoleConfReq): Promise<api.dashboard.IAddRoleConfResp> {
    return await request.post('/dashboard/Dashboard/AddRoleConf', req)
  };

  /** no comment **/
  static async UpdateRoleConf(req: api.dashboard.IUpdateRoleConfReq): Promise<api.dashboard.IUpdateRoleConfResp> {
    return await request.post('/dashboard/Dashboard/UpdateRoleConf', req)
  };

  /** no comment **/
  static async DeleteRoleConf(req: api.dashboard.IDeleteRoleConfReq): Promise<api.dashboard.IDeleteRoleConfResp> {
    return await request.post('/dashboard/Dashboard/DeleteRoleConf', req)
  };

  /** no comment **/
  static async ListUser(req: api.dashboard.IListUserReq): Promise<api.dashboard.IListUserResp> {
    return await request.get('/dashboard/Dashboard/ListUser', { params: req })
  };

};
