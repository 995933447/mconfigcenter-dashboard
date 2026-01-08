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

  /** no comment **/
  static async AddUser(req: api.dashboard.IAddUserReq): Promise<api.dashboard.IAddUserResp> {
    return await request.post('/dashboard/Dashboard/AddUser', req)
  };

  /** no comment **/
  static async UpdateUser(req: api.dashboard.IUpdateUserReq): Promise<api.dashboard.IUpdateUserResp> {
    return await request.post('/dashboard/Dashboard/UpdateUser', req)
  };

  /** no comment **/
  static async DeleteUser(req: api.dashboard.IDeleteUserReq): Promise<api.dashboard.IDeleteUserResp> {
    return await request.post('/dashboard/Dashboard/DeleteUser', req)
  };

  /** no comment **/
  static async ListGeneralConf(req: api.dashboard.IListGeneralConfReq): Promise<api.dashboard.IListGeneralConfResp> {
    return await request.get('/dashboard/Dashboard/ListGeneralConf', { params: req })
  };

  /** no comment **/
  static async ListConfSchema(req: api.dashboard.IListConfSchemaReq): Promise<api.dashboard.IListConfSchemaResp> {
    return await request.get('/dashboard/Dashboard/ListConfSchema', { params: req })
  };

  /** no comment **/
  static async SetConfigSchema(req: api.dashboard.ISetConfSchemaReq): Promise<api.dashboard.ISetConfSchemaResp> {
    return await request.post('/dashboard/Dashboard/SetConfigSchema', req)
  };

  /** no comment **/
  static async AddGeneralConf(req: api.dashboard.IAddGeneralConfReq): Promise<api.dashboard.IAddGeneralConfResp> {
    return await request.post('/dashboard/Dashboard/AddGeneralConf', req)
  };

  /** no comment **/
  static async UpdateGeneralConf(req: api.dashboard.IUpdateGeneralConfReq): Promise<api.dashboard.IUpdateGeneralConfResp> {
    return await request.post('/dashboard/Dashboard/UpdateGeneralConf', req)
  };

  /** no comment **/
  static async DeleteGeneralConf(req: api.dashboard.IDeleteGeneralConfReq): Promise<api.dashboard.IDeleteGeneralConfResp> {
    return await request.post('/dashboard/Dashboard/DeleteGeneralConf', req)
  };

  /** no comment **/
  static async ListUserPerm(req: api.dashboard.IListUserPermReq): Promise<api.dashboard.IListUserPermResp> {
    return await request.post('/dashboard/Dashboard/ListUserPerm', req)
  };

  /** no comment **/
  static async SyncGeneralConfigsToApp(req: api.dashboard.ISyncGeneralConfigsToAppReq): Promise<api.dashboard.ISyncGeneralConfigsToAppResp> {
    return await request.post('/dashboard/Dashboard/SyncGeneralConfigsToApp', req)
  };

};
