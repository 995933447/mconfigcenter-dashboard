import * as $protobuf from "protobufjs";
import * as Long from "long";
/** Namespace dashboard. */
export namespace dashboard {

    /** ErrCode enum. */
    enum ErrCode {
        ErrCodeNil = 0,
        ErrCodeRSAKeysGenerating = 30001,
        ErrCodeUserNotFound = 30002,
        ErrCodePasswordIncorrect = 30003
    }

    /** Represents a Dashboard */
    class Dashboard extends $protobuf.rpc.Service {

        /**
         * Constructs a new Dashboard service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Dashboard service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Dashboard;

        /**
         * Calls GetRSAPubKey.
         * @param request GetRSAPubKeyReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRSAPubKeyResp
         */
        public getRSAPubKey(request: dashboard.IGetRSAPubKeyReq, callback: dashboard.Dashboard.GetRSAPubKeyCallback): void;

        /**
         * Calls GetRSAPubKey.
         * @param request GetRSAPubKeyReq message or plain object
         * @returns Promise
         */
        public getRSAPubKey(request: dashboard.IGetRSAPubKeyReq): Promise<dashboard.GetRSAPubKeyResp>;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResp
         */
        public login(request: dashboard.ILoginReq, callback: dashboard.Dashboard.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         * @returns Promise
         */
        public login(request: dashboard.ILoginReq): Promise<dashboard.LoginResp>;

        /**
         * Calls GetUserInfo.
         * @param request GetUserInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserInfoResp
         */
        public getUserInfo(request: dashboard.IGetUserInfoReq, callback: dashboard.Dashboard.GetUserInfoCallback): void;

        /**
         * Calls GetUserInfo.
         * @param request GetUserInfoReq message or plain object
         * @returns Promise
         */
        public getUserInfo(request: dashboard.IGetUserInfoReq): Promise<dashboard.GetUserInfoResp>;

        /**
         * Calls DisabledRBAC.
         * @param request DisabledRBACReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DisabledRBACResp
         */
        public disabledRBAC(request: dashboard.IDisabledRBACReq, callback: dashboard.Dashboard.DisabledRBACCallback): void;

        /**
         * Calls DisabledRBAC.
         * @param request DisabledRBACReq message or plain object
         * @returns Promise
         */
        public disabledRBAC(request: dashboard.IDisabledRBACReq): Promise<dashboard.DisabledRBACResp>;

        /**
         * Calls AuthUser.
         * @param request AuthUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AuthUserResp
         */
        public authUser(request: dashboard.IAuthUserReq, callback: dashboard.Dashboard.AuthUserCallback): void;

        /**
         * Calls AuthUser.
         * @param request AuthUserReq message or plain object
         * @returns Promise
         */
        public authUser(request: dashboard.IAuthUserReq): Promise<dashboard.AuthUserResp>;

        /**
         * Calls ChangeUserPassword.
         * @param request ChangeUserPasswordReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ChangeUserPasswordResp
         */
        public changeUserPassword(request: dashboard.IChangeUserPasswordReq, callback: dashboard.Dashboard.ChangeUserPasswordCallback): void;

        /**
         * Calls ChangeUserPassword.
         * @param request ChangeUserPasswordReq message or plain object
         * @returns Promise
         */
        public changeUserPassword(request: dashboard.IChangeUserPasswordReq): Promise<dashboard.ChangeUserPasswordResp>;

        /**
         * Calls ListMenuConf.
         * @param request ListMenuConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListMenuConfResp
         */
        public listMenuConf(request: dashboard.IListMenuConfReq, callback: dashboard.Dashboard.ListMenuConfCallback): void;

        /**
         * Calls ListMenuConf.
         * @param request ListMenuConfReq message or plain object
         * @returns Promise
         */
        public listMenuConf(request: dashboard.IListMenuConfReq): Promise<dashboard.ListMenuConfResp>;

        /**
         * Calls AddMenuConf.
         * @param request AddMenuConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AddMenuConfResp
         */
        public addMenuConf(request: dashboard.IAddMenuConfReq, callback: dashboard.Dashboard.AddMenuConfCallback): void;

        /**
         * Calls AddMenuConf.
         * @param request AddMenuConfReq message or plain object
         * @returns Promise
         */
        public addMenuConf(request: dashboard.IAddMenuConfReq): Promise<dashboard.AddMenuConfResp>;

        /**
         * Calls UpdateMenuConf.
         * @param request UpdateMenuConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateMenuConfResp
         */
        public updateMenuConf(request: dashboard.IUpdateMenuConfReq, callback: dashboard.Dashboard.UpdateMenuConfCallback): void;

        /**
         * Calls UpdateMenuConf.
         * @param request UpdateMenuConfReq message or plain object
         * @returns Promise
         */
        public updateMenuConf(request: dashboard.IUpdateMenuConfReq): Promise<dashboard.UpdateMenuConfResp>;

        /**
         * Calls DeleteMenuConf.
         * @param request DeleteMenuConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteMenuConfResp
         */
        public deleteMenuConf(request: dashboard.IDeleteMenuConfReq, callback: dashboard.Dashboard.DeleteMenuConfCallback): void;

        /**
         * Calls DeleteMenuConf.
         * @param request DeleteMenuConfReq message or plain object
         * @returns Promise
         */
        public deleteMenuConf(request: dashboard.IDeleteMenuConfReq): Promise<dashboard.DeleteMenuConfResp>;

        /**
         * Calls ListRoleConf.
         * @param request ListRoleConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListRoleConfResp
         */
        public listRoleConf(request: dashboard.IListRoleConfReq, callback: dashboard.Dashboard.ListRoleConfCallback): void;

        /**
         * Calls ListRoleConf.
         * @param request ListRoleConfReq message or plain object
         * @returns Promise
         */
        public listRoleConf(request: dashboard.IListRoleConfReq): Promise<dashboard.ListRoleConfResp>;

        /**
         * Calls AddRoleConf.
         * @param request AddRoleConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AddRoleConfResp
         */
        public addRoleConf(request: dashboard.IAddRoleConfReq, callback: dashboard.Dashboard.AddRoleConfCallback): void;

        /**
         * Calls AddRoleConf.
         * @param request AddRoleConfReq message or plain object
         * @returns Promise
         */
        public addRoleConf(request: dashboard.IAddRoleConfReq): Promise<dashboard.AddRoleConfResp>;

        /**
         * Calls UpdateRoleConf.
         * @param request UpdateRoleConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateRoleConfResp
         */
        public updateRoleConf(request: dashboard.IUpdateRoleConfReq, callback: dashboard.Dashboard.UpdateRoleConfCallback): void;

        /**
         * Calls UpdateRoleConf.
         * @param request UpdateRoleConfReq message or plain object
         * @returns Promise
         */
        public updateRoleConf(request: dashboard.IUpdateRoleConfReq): Promise<dashboard.UpdateRoleConfResp>;

        /**
         * Calls DeleteRoleConf.
         * @param request DeleteRoleConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteRoleConfResp
         */
        public deleteRoleConf(request: dashboard.IDeleteRoleConfReq, callback: dashboard.Dashboard.DeleteRoleConfCallback): void;

        /**
         * Calls DeleteRoleConf.
         * @param request DeleteRoleConfReq message or plain object
         * @returns Promise
         */
        public deleteRoleConf(request: dashboard.IDeleteRoleConfReq): Promise<dashboard.DeleteRoleConfResp>;

        /**
         * Calls ListUser.
         * @param request ListUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListUserResp
         */
        public listUser(request: dashboard.IListUserReq, callback: dashboard.Dashboard.ListUserCallback): void;

        /**
         * Calls ListUser.
         * @param request ListUserReq message or plain object
         * @returns Promise
         */
        public listUser(request: dashboard.IListUserReq): Promise<dashboard.ListUserResp>;

        /**
         * Calls AddUser.
         * @param request AddUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AddUserResp
         */
        public addUser(request: dashboard.IAddUserReq, callback: dashboard.Dashboard.AddUserCallback): void;

        /**
         * Calls AddUser.
         * @param request AddUserReq message or plain object
         * @returns Promise
         */
        public addUser(request: dashboard.IAddUserReq): Promise<dashboard.AddUserResp>;

        /**
         * Calls UpdateUser.
         * @param request UpdateUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateUserResp
         */
        public updateUser(request: dashboard.IUpdateUserReq, callback: dashboard.Dashboard.UpdateUserCallback): void;

        /**
         * Calls UpdateUser.
         * @param request UpdateUserReq message or plain object
         * @returns Promise
         */
        public updateUser(request: dashboard.IUpdateUserReq): Promise<dashboard.UpdateUserResp>;

        /**
         * Calls DeleteUser.
         * @param request DeleteUserReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteUserResp
         */
        public deleteUser(request: dashboard.IDeleteUserReq, callback: dashboard.Dashboard.DeleteUserCallback): void;

        /**
         * Calls DeleteUser.
         * @param request DeleteUserReq message or plain object
         * @returns Promise
         */
        public deleteUser(request: dashboard.IDeleteUserReq): Promise<dashboard.DeleteUserResp>;

        /**
         * Calls ListGeneralConf.
         * @param request ListGeneralConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListGeneralConfResp
         */
        public listGeneralConf(request: dashboard.IListGeneralConfReq, callback: dashboard.Dashboard.ListGeneralConfCallback): void;

        /**
         * Calls ListGeneralConf.
         * @param request ListGeneralConfReq message or plain object
         * @returns Promise
         */
        public listGeneralConf(request: dashboard.IListGeneralConfReq): Promise<dashboard.ListGeneralConfResp>;

        /**
         * Calls ListConfSchema.
         * @param request ListConfSchemaReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListConfSchemaResp
         */
        public listConfSchema(request: dashboard.IListConfSchemaReq, callback: dashboard.Dashboard.ListConfSchemaCallback): void;

        /**
         * Calls ListConfSchema.
         * @param request ListConfSchemaReq message or plain object
         * @returns Promise
         */
        public listConfSchema(request: dashboard.IListConfSchemaReq): Promise<dashboard.ListConfSchemaResp>;

        /**
         * Calls SetConfigSchema.
         * @param request SetConfSchemaReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SetConfSchemaResp
         */
        public setConfigSchema(request: dashboard.ISetConfSchemaReq, callback: dashboard.Dashboard.SetConfigSchemaCallback): void;

        /**
         * Calls SetConfigSchema.
         * @param request SetConfSchemaReq message or plain object
         * @returns Promise
         */
        public setConfigSchema(request: dashboard.ISetConfSchemaReq): Promise<dashboard.SetConfSchemaResp>;

        /**
         * Calls AddGeneralConf.
         * @param request AddGeneralConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and AddGeneralConfResp
         */
        public addGeneralConf(request: dashboard.IAddGeneralConfReq, callback: dashboard.Dashboard.AddGeneralConfCallback): void;

        /**
         * Calls AddGeneralConf.
         * @param request AddGeneralConfReq message or plain object
         * @returns Promise
         */
        public addGeneralConf(request: dashboard.IAddGeneralConfReq): Promise<dashboard.AddGeneralConfResp>;

        /**
         * Calls UpdateGeneralConf.
         * @param request UpdateGeneralConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateGeneralConfResp
         */
        public updateGeneralConf(request: dashboard.IUpdateGeneralConfReq, callback: dashboard.Dashboard.UpdateGeneralConfCallback): void;

        /**
         * Calls UpdateGeneralConf.
         * @param request UpdateGeneralConfReq message or plain object
         * @returns Promise
         */
        public updateGeneralConf(request: dashboard.IUpdateGeneralConfReq): Promise<dashboard.UpdateGeneralConfResp>;

        /**
         * Calls DeleteGeneralConf.
         * @param request DeleteGeneralConfReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteGeneralConfResp
         */
        public deleteGeneralConf(request: dashboard.IDeleteGeneralConfReq, callback: dashboard.Dashboard.DeleteGeneralConfCallback): void;

        /**
         * Calls DeleteGeneralConf.
         * @param request DeleteGeneralConfReq message or plain object
         * @returns Promise
         */
        public deleteGeneralConf(request: dashboard.IDeleteGeneralConfReq): Promise<dashboard.DeleteGeneralConfResp>;

        /**
         * Calls ListUserPerm.
         * @param request ListUserPermReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListUserPermResp
         */
        public listUserPerm(request: dashboard.IListUserPermReq, callback: dashboard.Dashboard.ListUserPermCallback): void;

        /**
         * Calls ListUserPerm.
         * @param request ListUserPermReq message or plain object
         * @returns Promise
         */
        public listUserPerm(request: dashboard.IListUserPermReq): Promise<dashboard.ListUserPermResp>;

        /**
         * Calls SyncGeneralConfigsToApp.
         * @param request SyncGeneralConfigsToAppReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SyncGeneralConfigsToAppResp
         */
        public syncGeneralConfigsToApp(request: dashboard.ISyncGeneralConfigsToAppReq, callback: dashboard.Dashboard.SyncGeneralConfigsToAppCallback): void;

        /**
         * Calls SyncGeneralConfigsToApp.
         * @param request SyncGeneralConfigsToAppReq message or plain object
         * @returns Promise
         */
        public syncGeneralConfigsToApp(request: dashboard.ISyncGeneralConfigsToAppReq): Promise<dashboard.SyncGeneralConfigsToAppResp>;
    }

    namespace Dashboard {

        /**
         * Callback as used by {@link dashboard.Dashboard#getRSAPubKey}.
         * @param error Error, if any
         * @param [response] GetRSAPubKeyResp
         */
        type GetRSAPubKeyCallback = (error: (Error|null), response?: dashboard.GetRSAPubKeyResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#login}.
         * @param error Error, if any
         * @param [response] LoginResp
         */
        type LoginCallback = (error: (Error|null), response?: dashboard.LoginResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#getUserInfo}.
         * @param error Error, if any
         * @param [response] GetUserInfoResp
         */
        type GetUserInfoCallback = (error: (Error|null), response?: dashboard.GetUserInfoResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#disabledRBAC}.
         * @param error Error, if any
         * @param [response] DisabledRBACResp
         */
        type DisabledRBACCallback = (error: (Error|null), response?: dashboard.DisabledRBACResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#authUser}.
         * @param error Error, if any
         * @param [response] AuthUserResp
         */
        type AuthUserCallback = (error: (Error|null), response?: dashboard.AuthUserResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#changeUserPassword}.
         * @param error Error, if any
         * @param [response] ChangeUserPasswordResp
         */
        type ChangeUserPasswordCallback = (error: (Error|null), response?: dashboard.ChangeUserPasswordResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#listMenuConf}.
         * @param error Error, if any
         * @param [response] ListMenuConfResp
         */
        type ListMenuConfCallback = (error: (Error|null), response?: dashboard.ListMenuConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#addMenuConf}.
         * @param error Error, if any
         * @param [response] AddMenuConfResp
         */
        type AddMenuConfCallback = (error: (Error|null), response?: dashboard.AddMenuConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#updateMenuConf}.
         * @param error Error, if any
         * @param [response] UpdateMenuConfResp
         */
        type UpdateMenuConfCallback = (error: (Error|null), response?: dashboard.UpdateMenuConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#deleteMenuConf}.
         * @param error Error, if any
         * @param [response] DeleteMenuConfResp
         */
        type DeleteMenuConfCallback = (error: (Error|null), response?: dashboard.DeleteMenuConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#listRoleConf}.
         * @param error Error, if any
         * @param [response] ListRoleConfResp
         */
        type ListRoleConfCallback = (error: (Error|null), response?: dashboard.ListRoleConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#addRoleConf}.
         * @param error Error, if any
         * @param [response] AddRoleConfResp
         */
        type AddRoleConfCallback = (error: (Error|null), response?: dashboard.AddRoleConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#updateRoleConf}.
         * @param error Error, if any
         * @param [response] UpdateRoleConfResp
         */
        type UpdateRoleConfCallback = (error: (Error|null), response?: dashboard.UpdateRoleConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#deleteRoleConf}.
         * @param error Error, if any
         * @param [response] DeleteRoleConfResp
         */
        type DeleteRoleConfCallback = (error: (Error|null), response?: dashboard.DeleteRoleConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#listUser}.
         * @param error Error, if any
         * @param [response] ListUserResp
         */
        type ListUserCallback = (error: (Error|null), response?: dashboard.ListUserResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#addUser}.
         * @param error Error, if any
         * @param [response] AddUserResp
         */
        type AddUserCallback = (error: (Error|null), response?: dashboard.AddUserResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#updateUser}.
         * @param error Error, if any
         * @param [response] UpdateUserResp
         */
        type UpdateUserCallback = (error: (Error|null), response?: dashboard.UpdateUserResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#deleteUser}.
         * @param error Error, if any
         * @param [response] DeleteUserResp
         */
        type DeleteUserCallback = (error: (Error|null), response?: dashboard.DeleteUserResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#listGeneralConf}.
         * @param error Error, if any
         * @param [response] ListGeneralConfResp
         */
        type ListGeneralConfCallback = (error: (Error|null), response?: dashboard.ListGeneralConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#listConfSchema}.
         * @param error Error, if any
         * @param [response] ListConfSchemaResp
         */
        type ListConfSchemaCallback = (error: (Error|null), response?: dashboard.ListConfSchemaResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#setConfigSchema}.
         * @param error Error, if any
         * @param [response] SetConfSchemaResp
         */
        type SetConfigSchemaCallback = (error: (Error|null), response?: dashboard.SetConfSchemaResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#addGeneralConf}.
         * @param error Error, if any
         * @param [response] AddGeneralConfResp
         */
        type AddGeneralConfCallback = (error: (Error|null), response?: dashboard.AddGeneralConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#updateGeneralConf}.
         * @param error Error, if any
         * @param [response] UpdateGeneralConfResp
         */
        type UpdateGeneralConfCallback = (error: (Error|null), response?: dashboard.UpdateGeneralConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#deleteGeneralConf}.
         * @param error Error, if any
         * @param [response] DeleteGeneralConfResp
         */
        type DeleteGeneralConfCallback = (error: (Error|null), response?: dashboard.DeleteGeneralConfResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#listUserPerm}.
         * @param error Error, if any
         * @param [response] ListUserPermResp
         */
        type ListUserPermCallback = (error: (Error|null), response?: dashboard.ListUserPermResp) => void;

        /**
         * Callback as used by {@link dashboard.Dashboard#syncGeneralConfigsToApp}.
         * @param error Error, if any
         * @param [response] SyncGeneralConfigsToAppResp
         */
        type SyncGeneralConfigsToAppCallback = (error: (Error|null), response?: dashboard.SyncGeneralConfigsToAppResp) => void;
    }

    /** Properties of a SyncGeneralConfigsToAppReq. */
    interface ISyncGeneralConfigsToAppReq {

        /** SyncGeneralConfigsToAppReq listener_groups */
        listener_groups?: (string[]|null);

        /** SyncGeneralConfigsToAppReq coll_names */
        coll_names?: (string[]|null);
    }

    /** Represents a SyncGeneralConfigsToAppReq. */
    class SyncGeneralConfigsToAppReq implements ISyncGeneralConfigsToAppReq {

        /**
         * Constructs a new SyncGeneralConfigsToAppReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.ISyncGeneralConfigsToAppReq);

        /** SyncGeneralConfigsToAppReq listener_groups. */
        public listener_groups: string[];

        /** SyncGeneralConfigsToAppReq coll_names. */
        public coll_names: string[];

        /**
         * Creates a new SyncGeneralConfigsToAppReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncGeneralConfigsToAppReq instance
         */
        public static create(properties?: dashboard.ISyncGeneralConfigsToAppReq): dashboard.SyncGeneralConfigsToAppReq;

        /**
         * Encodes the specified SyncGeneralConfigsToAppReq message. Does not implicitly {@link dashboard.SyncGeneralConfigsToAppReq.verify|verify} messages.
         * @param message SyncGeneralConfigsToAppReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.ISyncGeneralConfigsToAppReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncGeneralConfigsToAppReq message, length delimited. Does not implicitly {@link dashboard.SyncGeneralConfigsToAppReq.verify|verify} messages.
         * @param message SyncGeneralConfigsToAppReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.ISyncGeneralConfigsToAppReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncGeneralConfigsToAppReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncGeneralConfigsToAppReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.SyncGeneralConfigsToAppReq;

        /**
         * Decodes a SyncGeneralConfigsToAppReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncGeneralConfigsToAppReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.SyncGeneralConfigsToAppReq;

        /**
         * Verifies a SyncGeneralConfigsToAppReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncGeneralConfigsToAppReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncGeneralConfigsToAppReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.SyncGeneralConfigsToAppReq;

        /**
         * Creates a plain object from a SyncGeneralConfigsToAppReq message. Also converts values to other types if specified.
         * @param message SyncGeneralConfigsToAppReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.SyncGeneralConfigsToAppReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncGeneralConfigsToAppReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncGeneralConfigsToAppReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncGeneralConfigsToAppResp. */
    interface ISyncGeneralConfigsToAppResp {
    }

    /** Represents a SyncGeneralConfigsToAppResp. */
    class SyncGeneralConfigsToAppResp implements ISyncGeneralConfigsToAppResp {

        /**
         * Constructs a new SyncGeneralConfigsToAppResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.ISyncGeneralConfigsToAppResp);

        /**
         * Creates a new SyncGeneralConfigsToAppResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncGeneralConfigsToAppResp instance
         */
        public static create(properties?: dashboard.ISyncGeneralConfigsToAppResp): dashboard.SyncGeneralConfigsToAppResp;

        /**
         * Encodes the specified SyncGeneralConfigsToAppResp message. Does not implicitly {@link dashboard.SyncGeneralConfigsToAppResp.verify|verify} messages.
         * @param message SyncGeneralConfigsToAppResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.ISyncGeneralConfigsToAppResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncGeneralConfigsToAppResp message, length delimited. Does not implicitly {@link dashboard.SyncGeneralConfigsToAppResp.verify|verify} messages.
         * @param message SyncGeneralConfigsToAppResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.ISyncGeneralConfigsToAppResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncGeneralConfigsToAppResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncGeneralConfigsToAppResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.SyncGeneralConfigsToAppResp;

        /**
         * Decodes a SyncGeneralConfigsToAppResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncGeneralConfigsToAppResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.SyncGeneralConfigsToAppResp;

        /**
         * Verifies a SyncGeneralConfigsToAppResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncGeneralConfigsToAppResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncGeneralConfigsToAppResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.SyncGeneralConfigsToAppResp;

        /**
         * Creates a plain object from a SyncGeneralConfigsToAppResp message. Also converts values to other types if specified.
         * @param message SyncGeneralConfigsToAppResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.SyncGeneralConfigsToAppResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncGeneralConfigsToAppResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncGeneralConfigsToAppResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListUserPermReq. */
    interface IListUserPermReq {
    }

    /** Represents a ListUserPermReq. */
    class ListUserPermReq implements IListUserPermReq {

        /**
         * Constructs a new ListUserPermReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListUserPermReq);

        /**
         * Creates a new ListUserPermReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListUserPermReq instance
         */
        public static create(properties?: dashboard.IListUserPermReq): dashboard.ListUserPermReq;

        /**
         * Encodes the specified ListUserPermReq message. Does not implicitly {@link dashboard.ListUserPermReq.verify|verify} messages.
         * @param message ListUserPermReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListUserPermReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListUserPermReq message, length delimited. Does not implicitly {@link dashboard.ListUserPermReq.verify|verify} messages.
         * @param message ListUserPermReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListUserPermReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListUserPermReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListUserPermReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListUserPermReq;

        /**
         * Decodes a ListUserPermReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListUserPermReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListUserPermReq;

        /**
         * Verifies a ListUserPermReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListUserPermReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListUserPermReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListUserPermReq;

        /**
         * Creates a plain object from a ListUserPermReq message. Also converts values to other types if specified.
         * @param message ListUserPermReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListUserPermReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListUserPermReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListUserPermReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListUserPermResp. */
    interface IListUserPermResp {

        /** ListUserPermResp perm_ids */
        perm_ids?: ((number|Long)[]|null);

        /** ListUserPermResp is_super_admin */
        is_super_admin?: (boolean|null);
    }

    /** Represents a ListUserPermResp. */
    class ListUserPermResp implements IListUserPermResp {

        /**
         * Constructs a new ListUserPermResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListUserPermResp);

        /** ListUserPermResp perm_ids. */
        public perm_ids: (number|Long)[];

        /** ListUserPermResp is_super_admin. */
        public is_super_admin: boolean;

        /**
         * Creates a new ListUserPermResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListUserPermResp instance
         */
        public static create(properties?: dashboard.IListUserPermResp): dashboard.ListUserPermResp;

        /**
         * Encodes the specified ListUserPermResp message. Does not implicitly {@link dashboard.ListUserPermResp.verify|verify} messages.
         * @param message ListUserPermResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListUserPermResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListUserPermResp message, length delimited. Does not implicitly {@link dashboard.ListUserPermResp.verify|verify} messages.
         * @param message ListUserPermResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListUserPermResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListUserPermResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListUserPermResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListUserPermResp;

        /**
         * Decodes a ListUserPermResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListUserPermResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListUserPermResp;

        /**
         * Verifies a ListUserPermResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListUserPermResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListUserPermResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListUserPermResp;

        /**
         * Creates a plain object from a ListUserPermResp message. Also converts values to other types if specified.
         * @param message ListUserPermResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListUserPermResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListUserPermResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListUserPermResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetConfSchemaReq. */
    interface ISetConfSchemaReq {

        /** SetConfSchemaReq config_schema */
        config_schema?: (dashboard.IConfigSchema|null);
    }

    /** Represents a SetConfSchemaReq. */
    class SetConfSchemaReq implements ISetConfSchemaReq {

        /**
         * Constructs a new SetConfSchemaReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.ISetConfSchemaReq);

        /** SetConfSchemaReq config_schema. */
        public config_schema?: (dashboard.IConfigSchema|null);

        /**
         * Creates a new SetConfSchemaReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetConfSchemaReq instance
         */
        public static create(properties?: dashboard.ISetConfSchemaReq): dashboard.SetConfSchemaReq;

        /**
         * Encodes the specified SetConfSchemaReq message. Does not implicitly {@link dashboard.SetConfSchemaReq.verify|verify} messages.
         * @param message SetConfSchemaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.ISetConfSchemaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetConfSchemaReq message, length delimited. Does not implicitly {@link dashboard.SetConfSchemaReq.verify|verify} messages.
         * @param message SetConfSchemaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.ISetConfSchemaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetConfSchemaReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetConfSchemaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.SetConfSchemaReq;

        /**
         * Decodes a SetConfSchemaReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetConfSchemaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.SetConfSchemaReq;

        /**
         * Verifies a SetConfSchemaReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetConfSchemaReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetConfSchemaReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.SetConfSchemaReq;

        /**
         * Creates a plain object from a SetConfSchemaReq message. Also converts values to other types if specified.
         * @param message SetConfSchemaReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.SetConfSchemaReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetConfSchemaReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetConfSchemaReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetConfSchemaResp. */
    interface ISetConfSchemaResp {
    }

    /** Represents a SetConfSchemaResp. */
    class SetConfSchemaResp implements ISetConfSchemaResp {

        /**
         * Constructs a new SetConfSchemaResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.ISetConfSchemaResp);

        /**
         * Creates a new SetConfSchemaResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetConfSchemaResp instance
         */
        public static create(properties?: dashboard.ISetConfSchemaResp): dashboard.SetConfSchemaResp;

        /**
         * Encodes the specified SetConfSchemaResp message. Does not implicitly {@link dashboard.SetConfSchemaResp.verify|verify} messages.
         * @param message SetConfSchemaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.ISetConfSchemaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetConfSchemaResp message, length delimited. Does not implicitly {@link dashboard.SetConfSchemaResp.verify|verify} messages.
         * @param message SetConfSchemaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.ISetConfSchemaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetConfSchemaResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetConfSchemaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.SetConfSchemaResp;

        /**
         * Decodes a SetConfSchemaResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetConfSchemaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.SetConfSchemaResp;

        /**
         * Verifies a SetConfSchemaResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetConfSchemaResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetConfSchemaResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.SetConfSchemaResp;

        /**
         * Creates a plain object from a SetConfSchemaResp message. Also converts values to other types if specified.
         * @param message SetConfSchemaResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.SetConfSchemaResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetConfSchemaResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetConfSchemaResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListConfSchemaReq. */
    interface IListConfSchemaReq {
    }

    /** Represents a ListConfSchemaReq. */
    class ListConfSchemaReq implements IListConfSchemaReq {

        /**
         * Constructs a new ListConfSchemaReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListConfSchemaReq);

        /**
         * Creates a new ListConfSchemaReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListConfSchemaReq instance
         */
        public static create(properties?: dashboard.IListConfSchemaReq): dashboard.ListConfSchemaReq;

        /**
         * Encodes the specified ListConfSchemaReq message. Does not implicitly {@link dashboard.ListConfSchemaReq.verify|verify} messages.
         * @param message ListConfSchemaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListConfSchemaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListConfSchemaReq message, length delimited. Does not implicitly {@link dashboard.ListConfSchemaReq.verify|verify} messages.
         * @param message ListConfSchemaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListConfSchemaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListConfSchemaReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListConfSchemaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListConfSchemaReq;

        /**
         * Decodes a ListConfSchemaReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListConfSchemaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListConfSchemaReq;

        /**
         * Verifies a ListConfSchemaReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListConfSchemaReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListConfSchemaReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListConfSchemaReq;

        /**
         * Creates a plain object from a ListConfSchemaReq message. Also converts values to other types if specified.
         * @param message ListConfSchemaReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListConfSchemaReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListConfSchemaReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListConfSchemaReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConfigSchema. */
    interface IConfigSchema {

        /** ConfigSchema coll_name */
        coll_name?: (string|null);

        /** ConfigSchema index_keys */
        index_keys?: (string[]|null);

        /** ConfigSchema uniq_index_keys */
        uniq_index_keys?: (string[]|null);

        /** ConfigSchema json_schema */
        json_schema?: (string|null);

        /** ConfigSchema desc */
        desc?: (string|null);
    }

    /** Represents a ConfigSchema. */
    class ConfigSchema implements IConfigSchema {

        /**
         * Constructs a new ConfigSchema.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IConfigSchema);

        /** ConfigSchema coll_name. */
        public coll_name: string;

        /** ConfigSchema index_keys. */
        public index_keys: string[];

        /** ConfigSchema uniq_index_keys. */
        public uniq_index_keys: string[];

        /** ConfigSchema json_schema. */
        public json_schema: string;

        /** ConfigSchema desc. */
        public desc: string;

        /**
         * Creates a new ConfigSchema instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigSchema instance
         */
        public static create(properties?: dashboard.IConfigSchema): dashboard.ConfigSchema;

        /**
         * Encodes the specified ConfigSchema message. Does not implicitly {@link dashboard.ConfigSchema.verify|verify} messages.
         * @param message ConfigSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IConfigSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigSchema message, length delimited. Does not implicitly {@link dashboard.ConfigSchema.verify|verify} messages.
         * @param message ConfigSchema message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IConfigSchema, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigSchema message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfigSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ConfigSchema;

        /**
         * Decodes a ConfigSchema message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfigSchema
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ConfigSchema;

        /**
         * Verifies a ConfigSchema message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigSchema message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigSchema
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ConfigSchema;

        /**
         * Creates a plain object from a ConfigSchema message. Also converts values to other types if specified.
         * @param message ConfigSchema
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ConfigSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigSchema to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConfigSchema
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListConfSchemaResp. */
    interface IListConfSchemaResp {

        /** ListConfSchemaResp list */
        list?: (dashboard.IConfigSchema[]|null);
    }

    /** Represents a ListConfSchemaResp. */
    class ListConfSchemaResp implements IListConfSchemaResp {

        /**
         * Constructs a new ListConfSchemaResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListConfSchemaResp);

        /** ListConfSchemaResp list. */
        public list: dashboard.IConfigSchema[];

        /**
         * Creates a new ListConfSchemaResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListConfSchemaResp instance
         */
        public static create(properties?: dashboard.IListConfSchemaResp): dashboard.ListConfSchemaResp;

        /**
         * Encodes the specified ListConfSchemaResp message. Does not implicitly {@link dashboard.ListConfSchemaResp.verify|verify} messages.
         * @param message ListConfSchemaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListConfSchemaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListConfSchemaResp message, length delimited. Does not implicitly {@link dashboard.ListConfSchemaResp.verify|verify} messages.
         * @param message ListConfSchemaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListConfSchemaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListConfSchemaResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListConfSchemaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListConfSchemaResp;

        /**
         * Decodes a ListConfSchemaResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListConfSchemaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListConfSchemaResp;

        /**
         * Verifies a ListConfSchemaResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListConfSchemaResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListConfSchemaResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListConfSchemaResp;

        /**
         * Creates a plain object from a ListConfSchemaResp message. Also converts values to other types if specified.
         * @param message ListConfSchemaResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListConfSchemaResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListConfSchemaResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListConfSchemaResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteGeneralConfReq. */
    interface IDeleteGeneralConfReq {

        /** DeleteGeneralConfReq ids */
        ids?: (string[]|null);

        /** DeleteGeneralConfReq coll_name */
        coll_name?: (string|null);
    }

    /** Represents a DeleteGeneralConfReq. */
    class DeleteGeneralConfReq implements IDeleteGeneralConfReq {

        /**
         * Constructs a new DeleteGeneralConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteGeneralConfReq);

        /** DeleteGeneralConfReq ids. */
        public ids: string[];

        /** DeleteGeneralConfReq coll_name. */
        public coll_name: string;

        /**
         * Creates a new DeleteGeneralConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteGeneralConfReq instance
         */
        public static create(properties?: dashboard.IDeleteGeneralConfReq): dashboard.DeleteGeneralConfReq;

        /**
         * Encodes the specified DeleteGeneralConfReq message. Does not implicitly {@link dashboard.DeleteGeneralConfReq.verify|verify} messages.
         * @param message DeleteGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteGeneralConfReq message, length delimited. Does not implicitly {@link dashboard.DeleteGeneralConfReq.verify|verify} messages.
         * @param message DeleteGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteGeneralConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteGeneralConfReq;

        /**
         * Decodes a DeleteGeneralConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteGeneralConfReq;

        /**
         * Verifies a DeleteGeneralConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteGeneralConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteGeneralConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteGeneralConfReq;

        /**
         * Creates a plain object from a DeleteGeneralConfReq message. Also converts values to other types if specified.
         * @param message DeleteGeneralConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteGeneralConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteGeneralConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteGeneralConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteGeneralConfResp. */
    interface IDeleteGeneralConfResp {
    }

    /** Represents a DeleteGeneralConfResp. */
    class DeleteGeneralConfResp implements IDeleteGeneralConfResp {

        /**
         * Constructs a new DeleteGeneralConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteGeneralConfResp);

        /**
         * Creates a new DeleteGeneralConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteGeneralConfResp instance
         */
        public static create(properties?: dashboard.IDeleteGeneralConfResp): dashboard.DeleteGeneralConfResp;

        /**
         * Encodes the specified DeleteGeneralConfResp message. Does not implicitly {@link dashboard.DeleteGeneralConfResp.verify|verify} messages.
         * @param message DeleteGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteGeneralConfResp message, length delimited. Does not implicitly {@link dashboard.DeleteGeneralConfResp.verify|verify} messages.
         * @param message DeleteGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteGeneralConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteGeneralConfResp;

        /**
         * Decodes a DeleteGeneralConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteGeneralConfResp;

        /**
         * Verifies a DeleteGeneralConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteGeneralConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteGeneralConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteGeneralConfResp;

        /**
         * Creates a plain object from a DeleteGeneralConfResp message. Also converts values to other types if specified.
         * @param message DeleteGeneralConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteGeneralConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteGeneralConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteGeneralConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateGeneralConfReq. */
    interface IUpdateGeneralConfReq {

        /** UpdateGeneralConfReq coll_name */
        coll_name?: (string|null);

        /** UpdateGeneralConfReq value */
        value?: (string|null);

        /** UpdateGeneralConfReq should_notify_listeners */
        should_notify_listeners?: (boolean|null);

        /** UpdateGeneralConfReq listener_group */
        listener_group?: (string|null);

        /** UpdateGeneralConfReq id */
        id?: (string|null);
    }

    /** Represents an UpdateGeneralConfReq. */
    class UpdateGeneralConfReq implements IUpdateGeneralConfReq {

        /**
         * Constructs a new UpdateGeneralConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateGeneralConfReq);

        /** UpdateGeneralConfReq coll_name. */
        public coll_name: string;

        /** UpdateGeneralConfReq value. */
        public value: string;

        /** UpdateGeneralConfReq should_notify_listeners. */
        public should_notify_listeners: boolean;

        /** UpdateGeneralConfReq listener_group. */
        public listener_group: string;

        /** UpdateGeneralConfReq id. */
        public id: string;

        /**
         * Creates a new UpdateGeneralConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGeneralConfReq instance
         */
        public static create(properties?: dashboard.IUpdateGeneralConfReq): dashboard.UpdateGeneralConfReq;

        /**
         * Encodes the specified UpdateGeneralConfReq message. Does not implicitly {@link dashboard.UpdateGeneralConfReq.verify|verify} messages.
         * @param message UpdateGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGeneralConfReq message, length delimited. Does not implicitly {@link dashboard.UpdateGeneralConfReq.verify|verify} messages.
         * @param message UpdateGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGeneralConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateGeneralConfReq;

        /**
         * Decodes an UpdateGeneralConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateGeneralConfReq;

        /**
         * Verifies an UpdateGeneralConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGeneralConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGeneralConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateGeneralConfReq;

        /**
         * Creates a plain object from an UpdateGeneralConfReq message. Also converts values to other types if specified.
         * @param message UpdateGeneralConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateGeneralConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGeneralConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateGeneralConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateGeneralConfResp. */
    interface IUpdateGeneralConfResp {
    }

    /** Represents an UpdateGeneralConfResp. */
    class UpdateGeneralConfResp implements IUpdateGeneralConfResp {

        /**
         * Constructs a new UpdateGeneralConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateGeneralConfResp);

        /**
         * Creates a new UpdateGeneralConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGeneralConfResp instance
         */
        public static create(properties?: dashboard.IUpdateGeneralConfResp): dashboard.UpdateGeneralConfResp;

        /**
         * Encodes the specified UpdateGeneralConfResp message. Does not implicitly {@link dashboard.UpdateGeneralConfResp.verify|verify} messages.
         * @param message UpdateGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGeneralConfResp message, length delimited. Does not implicitly {@link dashboard.UpdateGeneralConfResp.verify|verify} messages.
         * @param message UpdateGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGeneralConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateGeneralConfResp;

        /**
         * Decodes an UpdateGeneralConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateGeneralConfResp;

        /**
         * Verifies an UpdateGeneralConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGeneralConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGeneralConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateGeneralConfResp;

        /**
         * Creates a plain object from an UpdateGeneralConfResp message. Also converts values to other types if specified.
         * @param message UpdateGeneralConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateGeneralConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGeneralConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateGeneralConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddGeneralConfReq. */
    interface IAddGeneralConfReq {

        /** AddGeneralConfReq coll_name */
        coll_name?: (string|null);

        /** AddGeneralConfReq value */
        value?: (string|null);

        /** AddGeneralConfReq should_notify_listeners */
        should_notify_listeners?: (boolean|null);

        /** AddGeneralConfReq listener_group */
        listener_group?: (string|null);
    }

    /** Represents an AddGeneralConfReq. */
    class AddGeneralConfReq implements IAddGeneralConfReq {

        /**
         * Constructs a new AddGeneralConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddGeneralConfReq);

        /** AddGeneralConfReq coll_name. */
        public coll_name: string;

        /** AddGeneralConfReq value. */
        public value: string;

        /** AddGeneralConfReq should_notify_listeners. */
        public should_notify_listeners: boolean;

        /** AddGeneralConfReq listener_group. */
        public listener_group: string;

        /**
         * Creates a new AddGeneralConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddGeneralConfReq instance
         */
        public static create(properties?: dashboard.IAddGeneralConfReq): dashboard.AddGeneralConfReq;

        /**
         * Encodes the specified AddGeneralConfReq message. Does not implicitly {@link dashboard.AddGeneralConfReq.verify|verify} messages.
         * @param message AddGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddGeneralConfReq message, length delimited. Does not implicitly {@link dashboard.AddGeneralConfReq.verify|verify} messages.
         * @param message AddGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddGeneralConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddGeneralConfReq;

        /**
         * Decodes an AddGeneralConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddGeneralConfReq;

        /**
         * Verifies an AddGeneralConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddGeneralConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddGeneralConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddGeneralConfReq;

        /**
         * Creates a plain object from an AddGeneralConfReq message. Also converts values to other types if specified.
         * @param message AddGeneralConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddGeneralConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddGeneralConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddGeneralConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddGeneralConfResp. */
    interface IAddGeneralConfResp {
    }

    /** Represents an AddGeneralConfResp. */
    class AddGeneralConfResp implements IAddGeneralConfResp {

        /**
         * Constructs a new AddGeneralConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddGeneralConfResp);

        /**
         * Creates a new AddGeneralConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddGeneralConfResp instance
         */
        public static create(properties?: dashboard.IAddGeneralConfResp): dashboard.AddGeneralConfResp;

        /**
         * Encodes the specified AddGeneralConfResp message. Does not implicitly {@link dashboard.AddGeneralConfResp.verify|verify} messages.
         * @param message AddGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddGeneralConfResp message, length delimited. Does not implicitly {@link dashboard.AddGeneralConfResp.verify|verify} messages.
         * @param message AddGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddGeneralConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddGeneralConfResp;

        /**
         * Decodes an AddGeneralConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddGeneralConfResp;

        /**
         * Verifies an AddGeneralConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddGeneralConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddGeneralConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddGeneralConfResp;

        /**
         * Creates a plain object from an AddGeneralConfResp message. Also converts values to other types if specified.
         * @param message AddGeneralConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddGeneralConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddGeneralConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddGeneralConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListGeneralConfReq. */
    interface IListGeneralConfReq {

        /** ListGeneralConfReq coll_name */
        coll_name?: (string|null);

        /** ListGeneralConfReq sorts */
        sorts?: (dashboard.ListGeneralConfReq.ISort[]|null);

        /** ListGeneralConfReq filter */
        filter?: (string|null);

        /** ListGeneralConfReq page */
        page?: (dashboard.IPage|null);
    }

    /** Represents a ListGeneralConfReq. */
    class ListGeneralConfReq implements IListGeneralConfReq {

        /**
         * Constructs a new ListGeneralConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListGeneralConfReq);

        /** ListGeneralConfReq coll_name. */
        public coll_name: string;

        /** ListGeneralConfReq sorts. */
        public sorts: dashboard.ListGeneralConfReq.ISort[];

        /** ListGeneralConfReq filter. */
        public filter: string;

        /** ListGeneralConfReq page. */
        public page?: (dashboard.IPage|null);

        /**
         * Creates a new ListGeneralConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListGeneralConfReq instance
         */
        public static create(properties?: dashboard.IListGeneralConfReq): dashboard.ListGeneralConfReq;

        /**
         * Encodes the specified ListGeneralConfReq message. Does not implicitly {@link dashboard.ListGeneralConfReq.verify|verify} messages.
         * @param message ListGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListGeneralConfReq message, length delimited. Does not implicitly {@link dashboard.ListGeneralConfReq.verify|verify} messages.
         * @param message ListGeneralConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListGeneralConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListGeneralConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListGeneralConfReq;

        /**
         * Decodes a ListGeneralConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListGeneralConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListGeneralConfReq;

        /**
         * Verifies a ListGeneralConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListGeneralConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListGeneralConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListGeneralConfReq;

        /**
         * Creates a plain object from a ListGeneralConfReq message. Also converts values to other types if specified.
         * @param message ListGeneralConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListGeneralConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListGeneralConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListGeneralConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ListGeneralConfReq {

        /** Properties of a Sort. */
        interface ISort {

            /** Sort field */
            field?: (string|null);

            /** Sort sort_way */
            sort_way?: (number|null);
        }

        /** Represents a Sort. */
        class Sort implements ISort {

            /**
             * Constructs a new Sort.
             * @param [properties] Properties to set
             */
            constructor(properties?: dashboard.ListGeneralConfReq.ISort);

            /** Sort field. */
            public field: string;

            /** Sort sort_way. */
            public sort_way: number;

            /**
             * Creates a new Sort instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sort instance
             */
            public static create(properties?: dashboard.ListGeneralConfReq.ISort): dashboard.ListGeneralConfReq.Sort;

            /**
             * Encodes the specified Sort message. Does not implicitly {@link dashboard.ListGeneralConfReq.Sort.verify|verify} messages.
             * @param message Sort message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dashboard.ListGeneralConfReq.ISort, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Sort message, length delimited. Does not implicitly {@link dashboard.ListGeneralConfReq.Sort.verify|verify} messages.
             * @param message Sort message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dashboard.ListGeneralConfReq.ISort, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sort message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListGeneralConfReq.Sort;

            /**
             * Decodes a Sort message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Sort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListGeneralConfReq.Sort;

            /**
             * Verifies a Sort message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sort message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sort
             */
            public static fromObject(object: { [k: string]: any }): dashboard.ListGeneralConfReq.Sort;

            /**
             * Creates a plain object from a Sort message. Also converts values to other types if specified.
             * @param message Sort
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dashboard.ListGeneralConfReq.Sort, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sort to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Sort
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ListGeneralConfResp. */
    interface IListGeneralConfResp {

        /** ListGeneralConfResp list */
        list?: (string[]|null);

        /** ListGeneralConfResp total */
        total?: (number|null);
    }

    /** Represents a ListGeneralConfResp. */
    class ListGeneralConfResp implements IListGeneralConfResp {

        /**
         * Constructs a new ListGeneralConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListGeneralConfResp);

        /** ListGeneralConfResp list. */
        public list: string[];

        /** ListGeneralConfResp total. */
        public total: number;

        /**
         * Creates a new ListGeneralConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListGeneralConfResp instance
         */
        public static create(properties?: dashboard.IListGeneralConfResp): dashboard.ListGeneralConfResp;

        /**
         * Encodes the specified ListGeneralConfResp message. Does not implicitly {@link dashboard.ListGeneralConfResp.verify|verify} messages.
         * @param message ListGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListGeneralConfResp message, length delimited. Does not implicitly {@link dashboard.ListGeneralConfResp.verify|verify} messages.
         * @param message ListGeneralConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListGeneralConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListGeneralConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListGeneralConfResp;

        /**
         * Decodes a ListGeneralConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListGeneralConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListGeneralConfResp;

        /**
         * Verifies a ListGeneralConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListGeneralConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListGeneralConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListGeneralConfResp;

        /**
         * Creates a plain object from a ListGeneralConfResp message. Also converts values to other types if specified.
         * @param message ListGeneralConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListGeneralConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListGeneralConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListGeneralConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteUserReq. */
    interface IDeleteUserReq {

        /** DeleteUserReq user_id */
        user_id?: (number|Long|null);
    }

    /** Represents a DeleteUserReq. */
    class DeleteUserReq implements IDeleteUserReq {

        /**
         * Constructs a new DeleteUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteUserReq);

        /** DeleteUserReq user_id. */
        public user_id: (number|Long);

        /**
         * Creates a new DeleteUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteUserReq instance
         */
        public static create(properties?: dashboard.IDeleteUserReq): dashboard.DeleteUserReq;

        /**
         * Encodes the specified DeleteUserReq message. Does not implicitly {@link dashboard.DeleteUserReq.verify|verify} messages.
         * @param message DeleteUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteUserReq message, length delimited. Does not implicitly {@link dashboard.DeleteUserReq.verify|verify} messages.
         * @param message DeleteUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteUserReq;

        /**
         * Decodes a DeleteUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteUserReq;

        /**
         * Verifies a DeleteUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteUserReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteUserReq;

        /**
         * Creates a plain object from a DeleteUserReq message. Also converts values to other types if specified.
         * @param message DeleteUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteUserResp. */
    interface IDeleteUserResp {
    }

    /** Represents a DeleteUserResp. */
    class DeleteUserResp implements IDeleteUserResp {

        /**
         * Constructs a new DeleteUserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteUserResp);

        /**
         * Creates a new DeleteUserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteUserResp instance
         */
        public static create(properties?: dashboard.IDeleteUserResp): dashboard.DeleteUserResp;

        /**
         * Encodes the specified DeleteUserResp message. Does not implicitly {@link dashboard.DeleteUserResp.verify|verify} messages.
         * @param message DeleteUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteUserResp message, length delimited. Does not implicitly {@link dashboard.DeleteUserResp.verify|verify} messages.
         * @param message DeleteUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteUserResp;

        /**
         * Decodes a DeleteUserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteUserResp;

        /**
         * Verifies a DeleteUserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteUserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteUserResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteUserResp;

        /**
         * Creates a plain object from a DeleteUserResp message. Also converts values to other types if specified.
         * @param message DeleteUserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteUserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteUserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateUserReq. */
    interface IUpdateUserReq {

        /** UpdateUserReq name */
        name?: (string|null);

        /** UpdateUserReq status */
        status?: (number|null);

        /** UpdateUserReq role_ids */
        role_ids?: ((number|Long)[]|null);

        /** UpdateUserReq password */
        password?: (string|null);

        /** UpdateUserReq user_id */
        user_id?: (number|Long|null);
    }

    /** Represents an UpdateUserReq. */
    class UpdateUserReq implements IUpdateUserReq {

        /**
         * Constructs a new UpdateUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateUserReq);

        /** UpdateUserReq name. */
        public name: string;

        /** UpdateUserReq status. */
        public status: number;

        /** UpdateUserReq role_ids. */
        public role_ids: (number|Long)[];

        /** UpdateUserReq password. */
        public password: string;

        /** UpdateUserReq user_id. */
        public user_id: (number|Long);

        /**
         * Creates a new UpdateUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserReq instance
         */
        public static create(properties?: dashboard.IUpdateUserReq): dashboard.UpdateUserReq;

        /**
         * Encodes the specified UpdateUserReq message. Does not implicitly {@link dashboard.UpdateUserReq.verify|verify} messages.
         * @param message UpdateUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserReq message, length delimited. Does not implicitly {@link dashboard.UpdateUserReq.verify|verify} messages.
         * @param message UpdateUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateUserReq;

        /**
         * Decodes an UpdateUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateUserReq;

        /**
         * Verifies an UpdateUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateUserReq;

        /**
         * Creates a plain object from an UpdateUserReq message. Also converts values to other types if specified.
         * @param message UpdateUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateUserResp. */
    interface IUpdateUserResp {
    }

    /** Represents an UpdateUserResp. */
    class UpdateUserResp implements IUpdateUserResp {

        /**
         * Constructs a new UpdateUserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateUserResp);

        /**
         * Creates a new UpdateUserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserResp instance
         */
        public static create(properties?: dashboard.IUpdateUserResp): dashboard.UpdateUserResp;

        /**
         * Encodes the specified UpdateUserResp message. Does not implicitly {@link dashboard.UpdateUserResp.verify|verify} messages.
         * @param message UpdateUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserResp message, length delimited. Does not implicitly {@link dashboard.UpdateUserResp.verify|verify} messages.
         * @param message UpdateUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateUserResp;

        /**
         * Decodes an UpdateUserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateUserResp;

        /**
         * Verifies an UpdateUserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateUserResp;

        /**
         * Creates a plain object from an UpdateUserResp message. Also converts values to other types if specified.
         * @param message UpdateUserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateUserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddUserReq. */
    interface IAddUserReq {

        /** AddUserReq name */
        name?: (string|null);

        /** AddUserReq status */
        status?: (number|null);

        /** AddUserReq role_ids */
        role_ids?: ((number|Long)[]|null);

        /** AddUserReq password */
        password?: (string|null);
    }

    /** Represents an AddUserReq. */
    class AddUserReq implements IAddUserReq {

        /**
         * Constructs a new AddUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddUserReq);

        /** AddUserReq name. */
        public name: string;

        /** AddUserReq status. */
        public status: number;

        /** AddUserReq role_ids. */
        public role_ids: (number|Long)[];

        /** AddUserReq password. */
        public password: string;

        /**
         * Creates a new AddUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddUserReq instance
         */
        public static create(properties?: dashboard.IAddUserReq): dashboard.AddUserReq;

        /**
         * Encodes the specified AddUserReq message. Does not implicitly {@link dashboard.AddUserReq.verify|verify} messages.
         * @param message AddUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddUserReq message, length delimited. Does not implicitly {@link dashboard.AddUserReq.verify|verify} messages.
         * @param message AddUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddUserReq;

        /**
         * Decodes an AddUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddUserReq;

        /**
         * Verifies an AddUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddUserReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddUserReq;

        /**
         * Creates a plain object from an AddUserReq message. Also converts values to other types if specified.
         * @param message AddUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddUserResp. */
    interface IAddUserResp {
    }

    /** Represents an AddUserResp. */
    class AddUserResp implements IAddUserResp {

        /**
         * Constructs a new AddUserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddUserResp);

        /**
         * Creates a new AddUserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddUserResp instance
         */
        public static create(properties?: dashboard.IAddUserResp): dashboard.AddUserResp;

        /**
         * Encodes the specified AddUserResp message. Does not implicitly {@link dashboard.AddUserResp.verify|verify} messages.
         * @param message AddUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddUserResp message, length delimited. Does not implicitly {@link dashboard.AddUserResp.verify|verify} messages.
         * @param message AddUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddUserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddUserResp;

        /**
         * Decodes an AddUserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddUserResp;

        /**
         * Verifies an AddUserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddUserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddUserResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddUserResp;

        /**
         * Creates a plain object from an AddUserResp message. Also converts values to other types if specified.
         * @param message AddUserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddUserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddUserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListUserReq. */
    interface IListUserReq {

        /** ListUserReq name */
        name?: (string|null);

        /** ListUserReq user_id */
        user_id?: (number|Long|null);

        /** ListUserReq status */
        status?: (number|null);

        /** ListUserReq role_id */
        role_id?: (number|Long|null);

        /** ListUserReq page */
        page?: (dashboard.IPage|null);
    }

    /** Represents a ListUserReq. */
    class ListUserReq implements IListUserReq {

        /**
         * Constructs a new ListUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListUserReq);

        /** ListUserReq name. */
        public name: string;

        /** ListUserReq user_id. */
        public user_id: (number|Long);

        /** ListUserReq status. */
        public status: number;

        /** ListUserReq role_id. */
        public role_id: (number|Long);

        /** ListUserReq page. */
        public page?: (dashboard.IPage|null);

        /**
         * Creates a new ListUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListUserReq instance
         */
        public static create(properties?: dashboard.IListUserReq): dashboard.ListUserReq;

        /**
         * Encodes the specified ListUserReq message. Does not implicitly {@link dashboard.ListUserReq.verify|verify} messages.
         * @param message ListUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListUserReq message, length delimited. Does not implicitly {@link dashboard.ListUserReq.verify|verify} messages.
         * @param message ListUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListUserReq;

        /**
         * Decodes a ListUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListUserReq;

        /**
         * Verifies a ListUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListUserReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListUserReq;

        /**
         * Creates a plain object from a ListUserReq message. Also converts values to other types if specified.
         * @param message ListUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListUserResp. */
    interface IListUserResp {

        /** ListUserResp list */
        list?: (dashboard.ListUserResp.IItem[]|null);

        /** ListUserResp total */
        total?: (number|null);
    }

    /** Represents a ListUserResp. */
    class ListUserResp implements IListUserResp {

        /**
         * Constructs a new ListUserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListUserResp);

        /** ListUserResp list. */
        public list: dashboard.ListUserResp.IItem[];

        /** ListUserResp total. */
        public total: number;

        /**
         * Creates a new ListUserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListUserResp instance
         */
        public static create(properties?: dashboard.IListUserResp): dashboard.ListUserResp;

        /**
         * Encodes the specified ListUserResp message. Does not implicitly {@link dashboard.ListUserResp.verify|verify} messages.
         * @param message ListUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListUserResp message, length delimited. Does not implicitly {@link dashboard.ListUserResp.verify|verify} messages.
         * @param message ListUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListUserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListUserResp;

        /**
         * Decodes a ListUserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListUserResp;

        /**
         * Verifies a ListUserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListUserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListUserResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListUserResp;

        /**
         * Creates a plain object from a ListUserResp message. Also converts values to other types if specified.
         * @param message ListUserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListUserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListUserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ListUserResp {

        /** Properties of an Item. */
        interface IItem {

            /** Item user */
            user?: (dashboard.IUser|null);

            /** Item roles */
            roles?: (dashboard.IRole[]|null);
        }

        /** Represents an Item. */
        class Item implements IItem {

            /**
             * Constructs a new Item.
             * @param [properties] Properties to set
             */
            constructor(properties?: dashboard.ListUserResp.IItem);

            /** Item user. */
            public user?: (dashboard.IUser|null);

            /** Item roles. */
            public roles: dashboard.IRole[];

            /**
             * Creates a new Item instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Item instance
             */
            public static create(properties?: dashboard.ListUserResp.IItem): dashboard.ListUserResp.Item;

            /**
             * Encodes the specified Item message. Does not implicitly {@link dashboard.ListUserResp.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dashboard.ListUserResp.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link dashboard.ListUserResp.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dashboard.ListUserResp.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListUserResp.Item;

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListUserResp.Item;

            /**
             * Verifies an Item message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Item
             */
            public static fromObject(object: { [k: string]: any }): dashboard.ListUserResp.Item;

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @param message Item
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dashboard.ListUserResp.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Item to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Item
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a DeleteRoleConfReq. */
    interface IDeleteRoleConfReq {

        /** DeleteRoleConfReq role_id */
        role_id?: (number|Long|null);
    }

    /** Represents a DeleteRoleConfReq. */
    class DeleteRoleConfReq implements IDeleteRoleConfReq {

        /**
         * Constructs a new DeleteRoleConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteRoleConfReq);

        /** DeleteRoleConfReq role_id. */
        public role_id: (number|Long);

        /**
         * Creates a new DeleteRoleConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteRoleConfReq instance
         */
        public static create(properties?: dashboard.IDeleteRoleConfReq): dashboard.DeleteRoleConfReq;

        /**
         * Encodes the specified DeleteRoleConfReq message. Does not implicitly {@link dashboard.DeleteRoleConfReq.verify|verify} messages.
         * @param message DeleteRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteRoleConfReq message, length delimited. Does not implicitly {@link dashboard.DeleteRoleConfReq.verify|verify} messages.
         * @param message DeleteRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRoleConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteRoleConfReq;

        /**
         * Decodes a DeleteRoleConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteRoleConfReq;

        /**
         * Verifies a DeleteRoleConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteRoleConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteRoleConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteRoleConfReq;

        /**
         * Creates a plain object from a DeleteRoleConfReq message. Also converts values to other types if specified.
         * @param message DeleteRoleConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteRoleConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteRoleConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteRoleConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteRoleConfResp. */
    interface IDeleteRoleConfResp {
    }

    /** Represents a DeleteRoleConfResp. */
    class DeleteRoleConfResp implements IDeleteRoleConfResp {

        /**
         * Constructs a new DeleteRoleConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteRoleConfResp);

        /**
         * Creates a new DeleteRoleConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteRoleConfResp instance
         */
        public static create(properties?: dashboard.IDeleteRoleConfResp): dashboard.DeleteRoleConfResp;

        /**
         * Encodes the specified DeleteRoleConfResp message. Does not implicitly {@link dashboard.DeleteRoleConfResp.verify|verify} messages.
         * @param message DeleteRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteRoleConfResp message, length delimited. Does not implicitly {@link dashboard.DeleteRoleConfResp.verify|verify} messages.
         * @param message DeleteRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRoleConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteRoleConfResp;

        /**
         * Decodes a DeleteRoleConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteRoleConfResp;

        /**
         * Verifies a DeleteRoleConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteRoleConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteRoleConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteRoleConfResp;

        /**
         * Creates a plain object from a DeleteRoleConfResp message. Also converts values to other types if specified.
         * @param message DeleteRoleConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteRoleConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteRoleConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteRoleConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddRoleConfReq. */
    interface IAddRoleConfReq {

        /** AddRoleConfReq name */
        name?: (string|null);

        /** AddRoleConfReq status */
        status?: (number|null);

        /** AddRoleConfReq is_super_admin */
        is_super_admin?: (boolean|null);

        /** AddRoleConfReq perm_ids */
        perm_ids?: ((number|Long)[]|null);
    }

    /** Represents an AddRoleConfReq. */
    class AddRoleConfReq implements IAddRoleConfReq {

        /**
         * Constructs a new AddRoleConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddRoleConfReq);

        /** AddRoleConfReq name. */
        public name: string;

        /** AddRoleConfReq status. */
        public status: number;

        /** AddRoleConfReq is_super_admin. */
        public is_super_admin: boolean;

        /** AddRoleConfReq perm_ids. */
        public perm_ids: (number|Long)[];

        /**
         * Creates a new AddRoleConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddRoleConfReq instance
         */
        public static create(properties?: dashboard.IAddRoleConfReq): dashboard.AddRoleConfReq;

        /**
         * Encodes the specified AddRoleConfReq message. Does not implicitly {@link dashboard.AddRoleConfReq.verify|verify} messages.
         * @param message AddRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddRoleConfReq message, length delimited. Does not implicitly {@link dashboard.AddRoleConfReq.verify|verify} messages.
         * @param message AddRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddRoleConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddRoleConfReq;

        /**
         * Decodes an AddRoleConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddRoleConfReq;

        /**
         * Verifies an AddRoleConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddRoleConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddRoleConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddRoleConfReq;

        /**
         * Creates a plain object from an AddRoleConfReq message. Also converts values to other types if specified.
         * @param message AddRoleConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddRoleConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddRoleConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddRoleConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddRoleConfResp. */
    interface IAddRoleConfResp {
    }

    /** Represents an AddRoleConfResp. */
    class AddRoleConfResp implements IAddRoleConfResp {

        /**
         * Constructs a new AddRoleConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddRoleConfResp);

        /**
         * Creates a new AddRoleConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddRoleConfResp instance
         */
        public static create(properties?: dashboard.IAddRoleConfResp): dashboard.AddRoleConfResp;

        /**
         * Encodes the specified AddRoleConfResp message. Does not implicitly {@link dashboard.AddRoleConfResp.verify|verify} messages.
         * @param message AddRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddRoleConfResp message, length delimited. Does not implicitly {@link dashboard.AddRoleConfResp.verify|verify} messages.
         * @param message AddRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddRoleConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddRoleConfResp;

        /**
         * Decodes an AddRoleConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddRoleConfResp;

        /**
         * Verifies an AddRoleConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddRoleConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddRoleConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddRoleConfResp;

        /**
         * Creates a plain object from an AddRoleConfResp message. Also converts values to other types if specified.
         * @param message AddRoleConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddRoleConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddRoleConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddRoleConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateRoleConfReq. */
    interface IUpdateRoleConfReq {

        /** UpdateRoleConfReq role_id */
        role_id?: (number|Long|null);

        /** UpdateRoleConfReq name */
        name?: (string|null);

        /** UpdateRoleConfReq status */
        status?: (number|null);

        /** UpdateRoleConfReq is_super_admin */
        is_super_admin?: (boolean|null);

        /** UpdateRoleConfReq perm_ids */
        perm_ids?: ((number|Long)[]|null);
    }

    /** Represents an UpdateRoleConfReq. */
    class UpdateRoleConfReq implements IUpdateRoleConfReq {

        /**
         * Constructs a new UpdateRoleConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateRoleConfReq);

        /** UpdateRoleConfReq role_id. */
        public role_id: (number|Long);

        /** UpdateRoleConfReq name. */
        public name: string;

        /** UpdateRoleConfReq status. */
        public status: number;

        /** UpdateRoleConfReq is_super_admin. */
        public is_super_admin: boolean;

        /** UpdateRoleConfReq perm_ids. */
        public perm_ids: (number|Long)[];

        /**
         * Creates a new UpdateRoleConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRoleConfReq instance
         */
        public static create(properties?: dashboard.IUpdateRoleConfReq): dashboard.UpdateRoleConfReq;

        /**
         * Encodes the specified UpdateRoleConfReq message. Does not implicitly {@link dashboard.UpdateRoleConfReq.verify|verify} messages.
         * @param message UpdateRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRoleConfReq message, length delimited. Does not implicitly {@link dashboard.UpdateRoleConfReq.verify|verify} messages.
         * @param message UpdateRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRoleConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateRoleConfReq;

        /**
         * Decodes an UpdateRoleConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateRoleConfReq;

        /**
         * Verifies an UpdateRoleConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRoleConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRoleConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateRoleConfReq;

        /**
         * Creates a plain object from an UpdateRoleConfReq message. Also converts values to other types if specified.
         * @param message UpdateRoleConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateRoleConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRoleConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateRoleConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateRoleConfResp. */
    interface IUpdateRoleConfResp {
    }

    /** Represents an UpdateRoleConfResp. */
    class UpdateRoleConfResp implements IUpdateRoleConfResp {

        /**
         * Constructs a new UpdateRoleConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateRoleConfResp);

        /**
         * Creates a new UpdateRoleConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRoleConfResp instance
         */
        public static create(properties?: dashboard.IUpdateRoleConfResp): dashboard.UpdateRoleConfResp;

        /**
         * Encodes the specified UpdateRoleConfResp message. Does not implicitly {@link dashboard.UpdateRoleConfResp.verify|verify} messages.
         * @param message UpdateRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRoleConfResp message, length delimited. Does not implicitly {@link dashboard.UpdateRoleConfResp.verify|verify} messages.
         * @param message UpdateRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRoleConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateRoleConfResp;

        /**
         * Decodes an UpdateRoleConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateRoleConfResp;

        /**
         * Verifies an UpdateRoleConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRoleConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRoleConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateRoleConfResp;

        /**
         * Creates a plain object from an UpdateRoleConfResp message. Also converts values to other types if specified.
         * @param message UpdateRoleConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateRoleConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRoleConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateRoleConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListRoleConfReq. */
    interface IListRoleConfReq {

        /** ListRoleConfReq name */
        name?: (string|null);

        /** ListRoleConfReq status */
        status?: (number|null);

        /** ListRoleConfReq only_super_admin */
        only_super_admin?: (boolean|null);

        /** ListRoleConfReq without_super_admin */
        without_super_admin?: (boolean|null);

        /** ListRoleConfReq page */
        page?: (dashboard.IPage|null);
    }

    /** Represents a ListRoleConfReq. */
    class ListRoleConfReq implements IListRoleConfReq {

        /**
         * Constructs a new ListRoleConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListRoleConfReq);

        /** ListRoleConfReq name. */
        public name: string;

        /** ListRoleConfReq status. */
        public status: number;

        /** ListRoleConfReq only_super_admin. */
        public only_super_admin: boolean;

        /** ListRoleConfReq without_super_admin. */
        public without_super_admin: boolean;

        /** ListRoleConfReq page. */
        public page?: (dashboard.IPage|null);

        /**
         * Creates a new ListRoleConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRoleConfReq instance
         */
        public static create(properties?: dashboard.IListRoleConfReq): dashboard.ListRoleConfReq;

        /**
         * Encodes the specified ListRoleConfReq message. Does not implicitly {@link dashboard.ListRoleConfReq.verify|verify} messages.
         * @param message ListRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRoleConfReq message, length delimited. Does not implicitly {@link dashboard.ListRoleConfReq.verify|verify} messages.
         * @param message ListRoleConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListRoleConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRoleConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListRoleConfReq;

        /**
         * Decodes a ListRoleConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListRoleConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListRoleConfReq;

        /**
         * Verifies a ListRoleConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListRoleConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListRoleConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListRoleConfReq;

        /**
         * Creates a plain object from a ListRoleConfReq message. Also converts values to other types if specified.
         * @param message ListRoleConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListRoleConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListRoleConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListRoleConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListRoleConfResp. */
    interface IListRoleConfResp {

        /** ListRoleConfResp list */
        list?: (dashboard.IRole[]|null);

        /** ListRoleConfResp total */
        total?: (number|null);
    }

    /** Represents a ListRoleConfResp. */
    class ListRoleConfResp implements IListRoleConfResp {

        /**
         * Constructs a new ListRoleConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListRoleConfResp);

        /** ListRoleConfResp list. */
        public list: dashboard.IRole[];

        /** ListRoleConfResp total. */
        public total: number;

        /**
         * Creates a new ListRoleConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRoleConfResp instance
         */
        public static create(properties?: dashboard.IListRoleConfResp): dashboard.ListRoleConfResp;

        /**
         * Encodes the specified ListRoleConfResp message. Does not implicitly {@link dashboard.ListRoleConfResp.verify|verify} messages.
         * @param message ListRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRoleConfResp message, length delimited. Does not implicitly {@link dashboard.ListRoleConfResp.verify|verify} messages.
         * @param message ListRoleConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListRoleConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRoleConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListRoleConfResp;

        /**
         * Decodes a ListRoleConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListRoleConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListRoleConfResp;

        /**
         * Verifies a ListRoleConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListRoleConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListRoleConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListRoleConfResp;

        /**
         * Creates a plain object from a ListRoleConfResp message. Also converts values to other types if specified.
         * @param message ListRoleConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListRoleConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListRoleConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListRoleConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Role. */
    interface IRole {

        /** Role role_id */
        role_id?: (number|Long|null);

        /** Role name */
        name?: (string|null);

        /** Role status */
        status?: (number|null);

        /** Role perm_ids */
        perm_ids?: ((number|Long)[]|null);

        /** Role remark */
        remark?: (string|null);

        /** Role is_super_admin */
        is_super_admin?: (boolean|null);
    }

    /** Represents a Role. */
    class Role implements IRole {

        /**
         * Constructs a new Role.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IRole);

        /** Role role_id. */
        public role_id: (number|Long);

        /** Role name. */
        public name: string;

        /** Role status. */
        public status: number;

        /** Role perm_ids. */
        public perm_ids: (number|Long)[];

        /** Role remark. */
        public remark: string;

        /** Role is_super_admin. */
        public is_super_admin: boolean;

        /**
         * Creates a new Role instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Role instance
         */
        public static create(properties?: dashboard.IRole): dashboard.Role;

        /**
         * Encodes the specified Role message. Does not implicitly {@link dashboard.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Role message, length delimited. Does not implicitly {@link dashboard.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Role message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.Role;

        /**
         * Decodes a Role message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.Role;

        /**
         * Verifies a Role message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Role message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Role
         */
        public static fromObject(object: { [k: string]: any }): dashboard.Role;

        /**
         * Creates a plain object from a Role message. Also converts values to other types if specified.
         * @param message Role
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Role to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Role
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteMenuConfReq. */
    interface IDeleteMenuConfReq {

        /** DeleteMenuConfReq perm_id */
        perm_id?: (number|Long|null);
    }

    /** Represents a DeleteMenuConfReq. */
    class DeleteMenuConfReq implements IDeleteMenuConfReq {

        /**
         * Constructs a new DeleteMenuConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteMenuConfReq);

        /** DeleteMenuConfReq perm_id. */
        public perm_id: (number|Long);

        /**
         * Creates a new DeleteMenuConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteMenuConfReq instance
         */
        public static create(properties?: dashboard.IDeleteMenuConfReq): dashboard.DeleteMenuConfReq;

        /**
         * Encodes the specified DeleteMenuConfReq message. Does not implicitly {@link dashboard.DeleteMenuConfReq.verify|verify} messages.
         * @param message DeleteMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMenuConfReq message, length delimited. Does not implicitly {@link dashboard.DeleteMenuConfReq.verify|verify} messages.
         * @param message DeleteMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteMenuConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteMenuConfReq;

        /**
         * Decodes a DeleteMenuConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteMenuConfReq;

        /**
         * Verifies a DeleteMenuConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteMenuConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMenuConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteMenuConfReq;

        /**
         * Creates a plain object from a DeleteMenuConfReq message. Also converts values to other types if specified.
         * @param message DeleteMenuConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteMenuConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteMenuConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteMenuConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteMenuConfResp. */
    interface IDeleteMenuConfResp {
    }

    /** Represents a DeleteMenuConfResp. */
    class DeleteMenuConfResp implements IDeleteMenuConfResp {

        /**
         * Constructs a new DeleteMenuConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDeleteMenuConfResp);

        /**
         * Creates a new DeleteMenuConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteMenuConfResp instance
         */
        public static create(properties?: dashboard.IDeleteMenuConfResp): dashboard.DeleteMenuConfResp;

        /**
         * Encodes the specified DeleteMenuConfResp message. Does not implicitly {@link dashboard.DeleteMenuConfResp.verify|verify} messages.
         * @param message DeleteMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDeleteMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMenuConfResp message, length delimited. Does not implicitly {@link dashboard.DeleteMenuConfResp.verify|verify} messages.
         * @param message DeleteMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDeleteMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteMenuConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DeleteMenuConfResp;

        /**
         * Decodes a DeleteMenuConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DeleteMenuConfResp;

        /**
         * Verifies a DeleteMenuConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteMenuConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMenuConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DeleteMenuConfResp;

        /**
         * Creates a plain object from a DeleteMenuConfResp message. Also converts values to other types if specified.
         * @param message DeleteMenuConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DeleteMenuConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteMenuConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeleteMenuConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateMenuConfReq. */
    interface IUpdateMenuConfReq {

        /** UpdateMenuConfReq name */
        name?: (string|null);

        /** UpdateMenuConfReq path */
        path?: (string|null);

        /** UpdateMenuConfReq services */
        services?: (string[]|null);

        /** UpdateMenuConfReq pid */
        pid?: (number|Long|null);

        /** UpdateMenuConfReq perm_id */
        perm_id?: (number|Long|null);

        /** UpdateMenuConfReq path_type */
        path_type?: (number|null);
    }

    /** Represents an UpdateMenuConfReq. */
    class UpdateMenuConfReq implements IUpdateMenuConfReq {

        /**
         * Constructs a new UpdateMenuConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateMenuConfReq);

        /** UpdateMenuConfReq name. */
        public name: string;

        /** UpdateMenuConfReq path. */
        public path: string;

        /** UpdateMenuConfReq services. */
        public services: string[];

        /** UpdateMenuConfReq pid. */
        public pid: (number|Long);

        /** UpdateMenuConfReq perm_id. */
        public perm_id: (number|Long);

        /** UpdateMenuConfReq path_type. */
        public path_type: number;

        /**
         * Creates a new UpdateMenuConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMenuConfReq instance
         */
        public static create(properties?: dashboard.IUpdateMenuConfReq): dashboard.UpdateMenuConfReq;

        /**
         * Encodes the specified UpdateMenuConfReq message. Does not implicitly {@link dashboard.UpdateMenuConfReq.verify|verify} messages.
         * @param message UpdateMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateMenuConfReq message, length delimited. Does not implicitly {@link dashboard.UpdateMenuConfReq.verify|verify} messages.
         * @param message UpdateMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateMenuConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateMenuConfReq;

        /**
         * Decodes an UpdateMenuConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateMenuConfReq;

        /**
         * Verifies an UpdateMenuConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateMenuConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMenuConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateMenuConfReq;

        /**
         * Creates a plain object from an UpdateMenuConfReq message. Also converts values to other types if specified.
         * @param message UpdateMenuConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateMenuConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateMenuConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateMenuConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateMenuConfResp. */
    interface IUpdateMenuConfResp {
    }

    /** Represents an UpdateMenuConfResp. */
    class UpdateMenuConfResp implements IUpdateMenuConfResp {

        /**
         * Constructs a new UpdateMenuConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUpdateMenuConfResp);

        /**
         * Creates a new UpdateMenuConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMenuConfResp instance
         */
        public static create(properties?: dashboard.IUpdateMenuConfResp): dashboard.UpdateMenuConfResp;

        /**
         * Encodes the specified UpdateMenuConfResp message. Does not implicitly {@link dashboard.UpdateMenuConfResp.verify|verify} messages.
         * @param message UpdateMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUpdateMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateMenuConfResp message, length delimited. Does not implicitly {@link dashboard.UpdateMenuConfResp.verify|verify} messages.
         * @param message UpdateMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUpdateMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateMenuConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.UpdateMenuConfResp;

        /**
         * Decodes an UpdateMenuConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.UpdateMenuConfResp;

        /**
         * Verifies an UpdateMenuConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateMenuConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMenuConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.UpdateMenuConfResp;

        /**
         * Creates a plain object from an UpdateMenuConfResp message. Also converts values to other types if specified.
         * @param message UpdateMenuConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.UpdateMenuConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateMenuConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpdateMenuConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddMenuConfReq. */
    interface IAddMenuConfReq {

        /** AddMenuConfReq name */
        name?: (string|null);

        /** AddMenuConfReq path */
        path?: (string|null);

        /** AddMenuConfReq services */
        services?: (string[]|null);

        /** AddMenuConfReq pid */
        pid?: (number|Long|null);

        /** AddMenuConfReq path_type */
        path_type?: (number|null);
    }

    /** Represents an AddMenuConfReq. */
    class AddMenuConfReq implements IAddMenuConfReq {

        /**
         * Constructs a new AddMenuConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddMenuConfReq);

        /** AddMenuConfReq name. */
        public name: string;

        /** AddMenuConfReq path. */
        public path: string;

        /** AddMenuConfReq services. */
        public services: string[];

        /** AddMenuConfReq pid. */
        public pid: (number|Long);

        /** AddMenuConfReq path_type. */
        public path_type: number;

        /**
         * Creates a new AddMenuConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddMenuConfReq instance
         */
        public static create(properties?: dashboard.IAddMenuConfReq): dashboard.AddMenuConfReq;

        /**
         * Encodes the specified AddMenuConfReq message. Does not implicitly {@link dashboard.AddMenuConfReq.verify|verify} messages.
         * @param message AddMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddMenuConfReq message, length delimited. Does not implicitly {@link dashboard.AddMenuConfReq.verify|verify} messages.
         * @param message AddMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddMenuConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddMenuConfReq;

        /**
         * Decodes an AddMenuConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddMenuConfReq;

        /**
         * Verifies an AddMenuConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddMenuConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMenuConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddMenuConfReq;

        /**
         * Creates a plain object from an AddMenuConfReq message. Also converts values to other types if specified.
         * @param message AddMenuConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddMenuConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddMenuConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddMenuConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddMenuConfResp. */
    interface IAddMenuConfResp {
    }

    /** Represents an AddMenuConfResp. */
    class AddMenuConfResp implements IAddMenuConfResp {

        /**
         * Constructs a new AddMenuConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAddMenuConfResp);

        /**
         * Creates a new AddMenuConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddMenuConfResp instance
         */
        public static create(properties?: dashboard.IAddMenuConfResp): dashboard.AddMenuConfResp;

        /**
         * Encodes the specified AddMenuConfResp message. Does not implicitly {@link dashboard.AddMenuConfResp.verify|verify} messages.
         * @param message AddMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAddMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddMenuConfResp message, length delimited. Does not implicitly {@link dashboard.AddMenuConfResp.verify|verify} messages.
         * @param message AddMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAddMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddMenuConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AddMenuConfResp;

        /**
         * Decodes an AddMenuConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AddMenuConfResp;

        /**
         * Verifies an AddMenuConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddMenuConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMenuConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AddMenuConfResp;

        /**
         * Creates a plain object from an AddMenuConfResp message. Also converts values to other types if specified.
         * @param message AddMenuConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AddMenuConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddMenuConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddMenuConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListMenuConfReq. */
    interface IListMenuConfReq {
    }

    /** Represents a ListMenuConfReq. */
    class ListMenuConfReq implements IListMenuConfReq {

        /**
         * Constructs a new ListMenuConfReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListMenuConfReq);

        /**
         * Creates a new ListMenuConfReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMenuConfReq instance
         */
        public static create(properties?: dashboard.IListMenuConfReq): dashboard.ListMenuConfReq;

        /**
         * Encodes the specified ListMenuConfReq message. Does not implicitly {@link dashboard.ListMenuConfReq.verify|verify} messages.
         * @param message ListMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMenuConfReq message, length delimited. Does not implicitly {@link dashboard.ListMenuConfReq.verify|verify} messages.
         * @param message ListMenuConfReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListMenuConfReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMenuConfReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListMenuConfReq;

        /**
         * Decodes a ListMenuConfReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMenuConfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListMenuConfReq;

        /**
         * Verifies a ListMenuConfReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMenuConfReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMenuConfReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListMenuConfReq;

        /**
         * Creates a plain object from a ListMenuConfReq message. Also converts values to other types if specified.
         * @param message ListMenuConfReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListMenuConfReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMenuConfReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListMenuConfReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListMenuConfResp. */
    interface IListMenuConfResp {

        /** ListMenuConfResp list */
        list?: (dashboard.ListMenuConfResp.IMenuConf[]|null);

        /** ListMenuConfResp total */
        total?: (number|null);
    }

    /** Represents a ListMenuConfResp. */
    class ListMenuConfResp implements IListMenuConfResp {

        /**
         * Constructs a new ListMenuConfResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListMenuConfResp);

        /** ListMenuConfResp list. */
        public list: dashboard.ListMenuConfResp.IMenuConf[];

        /** ListMenuConfResp total. */
        public total: number;

        /**
         * Creates a new ListMenuConfResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMenuConfResp instance
         */
        public static create(properties?: dashboard.IListMenuConfResp): dashboard.ListMenuConfResp;

        /**
         * Encodes the specified ListMenuConfResp message. Does not implicitly {@link dashboard.ListMenuConfResp.verify|verify} messages.
         * @param message ListMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMenuConfResp message, length delimited. Does not implicitly {@link dashboard.ListMenuConfResp.verify|verify} messages.
         * @param message ListMenuConfResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListMenuConfResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMenuConfResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListMenuConfResp;

        /**
         * Decodes a ListMenuConfResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMenuConfResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListMenuConfResp;

        /**
         * Verifies a ListMenuConfResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMenuConfResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMenuConfResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListMenuConfResp;

        /**
         * Creates a plain object from a ListMenuConfResp message. Also converts values to other types if specified.
         * @param message ListMenuConfResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListMenuConfResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMenuConfResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListMenuConfResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ListMenuConfResp {

        /** Properties of a MenuConf. */
        interface IMenuConf {

            /** MenuConf perm_id */
            perm_id?: (number|Long|null);

            /** MenuConf name */
            name?: (string|null);

            /** MenuConf path */
            path?: (string|null);

            /** MenuConf services */
            services?: (string[]|null);

            /** MenuConf pid */
            pid?: (number|Long|null);

            /** MenuConf path_type */
            path_type?: (number|null);
        }

        /** Represents a MenuConf. */
        class MenuConf implements IMenuConf {

            /**
             * Constructs a new MenuConf.
             * @param [properties] Properties to set
             */
            constructor(properties?: dashboard.ListMenuConfResp.IMenuConf);

            /** MenuConf perm_id. */
            public perm_id: (number|Long);

            /** MenuConf name. */
            public name: string;

            /** MenuConf path. */
            public path: string;

            /** MenuConf services. */
            public services: string[];

            /** MenuConf pid. */
            public pid: (number|Long);

            /** MenuConf path_type. */
            public path_type: number;

            /**
             * Creates a new MenuConf instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MenuConf instance
             */
            public static create(properties?: dashboard.ListMenuConfResp.IMenuConf): dashboard.ListMenuConfResp.MenuConf;

            /**
             * Encodes the specified MenuConf message. Does not implicitly {@link dashboard.ListMenuConfResp.MenuConf.verify|verify} messages.
             * @param message MenuConf message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dashboard.ListMenuConfResp.IMenuConf, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MenuConf message, length delimited. Does not implicitly {@link dashboard.ListMenuConfResp.MenuConf.verify|verify} messages.
             * @param message MenuConf message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dashboard.ListMenuConfResp.IMenuConf, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MenuConf message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MenuConf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListMenuConfResp.MenuConf;

            /**
             * Decodes a MenuConf message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MenuConf
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListMenuConfResp.MenuConf;

            /**
             * Verifies a MenuConf message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MenuConf message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MenuConf
             */
            public static fromObject(object: { [k: string]: any }): dashboard.ListMenuConfResp.MenuConf;

            /**
             * Creates a plain object from a MenuConf message. Also converts values to other types if specified.
             * @param message MenuConf
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dashboard.ListMenuConfResp.MenuConf, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MenuConf to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MenuConf
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ChangeUserPasswordReq. */
    interface IChangeUserPasswordReq {

        /** ChangeUserPasswordReq new_password */
        new_password?: (string|null);
    }

    /** Represents a ChangeUserPasswordReq. */
    class ChangeUserPasswordReq implements IChangeUserPasswordReq {

        /**
         * Constructs a new ChangeUserPasswordReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IChangeUserPasswordReq);

        /** ChangeUserPasswordReq new_password. */
        public new_password: string;

        /**
         * Creates a new ChangeUserPasswordReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeUserPasswordReq instance
         */
        public static create(properties?: dashboard.IChangeUserPasswordReq): dashboard.ChangeUserPasswordReq;

        /**
         * Encodes the specified ChangeUserPasswordReq message. Does not implicitly {@link dashboard.ChangeUserPasswordReq.verify|verify} messages.
         * @param message ChangeUserPasswordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IChangeUserPasswordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeUserPasswordReq message, length delimited. Does not implicitly {@link dashboard.ChangeUserPasswordReq.verify|verify} messages.
         * @param message ChangeUserPasswordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IChangeUserPasswordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeUserPasswordReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeUserPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ChangeUserPasswordReq;

        /**
         * Decodes a ChangeUserPasswordReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeUserPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ChangeUserPasswordReq;

        /**
         * Verifies a ChangeUserPasswordReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeUserPasswordReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeUserPasswordReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ChangeUserPasswordReq;

        /**
         * Creates a plain object from a ChangeUserPasswordReq message. Also converts values to other types if specified.
         * @param message ChangeUserPasswordReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ChangeUserPasswordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeUserPasswordReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangeUserPasswordReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChangeUserPasswordResp. */
    interface IChangeUserPasswordResp {
    }

    /** Represents a ChangeUserPasswordResp. */
    class ChangeUserPasswordResp implements IChangeUserPasswordResp {

        /**
         * Constructs a new ChangeUserPasswordResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IChangeUserPasswordResp);

        /**
         * Creates a new ChangeUserPasswordResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeUserPasswordResp instance
         */
        public static create(properties?: dashboard.IChangeUserPasswordResp): dashboard.ChangeUserPasswordResp;

        /**
         * Encodes the specified ChangeUserPasswordResp message. Does not implicitly {@link dashboard.ChangeUserPasswordResp.verify|verify} messages.
         * @param message ChangeUserPasswordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IChangeUserPasswordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeUserPasswordResp message, length delimited. Does not implicitly {@link dashboard.ChangeUserPasswordResp.verify|verify} messages.
         * @param message ChangeUserPasswordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IChangeUserPasswordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeUserPasswordResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeUserPasswordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ChangeUserPasswordResp;

        /**
         * Decodes a ChangeUserPasswordResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeUserPasswordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ChangeUserPasswordResp;

        /**
         * Verifies a ChangeUserPasswordResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeUserPasswordResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeUserPasswordResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ChangeUserPasswordResp;

        /**
         * Creates a plain object from a ChangeUserPasswordResp message. Also converts values to other types if specified.
         * @param message ChangeUserPasswordResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ChangeUserPasswordResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeUserPasswordResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangeUserPasswordResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthUserReq. */
    interface IAuthUserReq {

        /** AuthUserReq token */
        token?: (string|null);
    }

    /** Represents an AuthUserReq. */
    class AuthUserReq implements IAuthUserReq {

        /**
         * Constructs a new AuthUserReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAuthUserReq);

        /** AuthUserReq token. */
        public token: string;

        /**
         * Creates a new AuthUserReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthUserReq instance
         */
        public static create(properties?: dashboard.IAuthUserReq): dashboard.AuthUserReq;

        /**
         * Encodes the specified AuthUserReq message. Does not implicitly {@link dashboard.AuthUserReq.verify|verify} messages.
         * @param message AuthUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAuthUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthUserReq message, length delimited. Does not implicitly {@link dashboard.AuthUserReq.verify|verify} messages.
         * @param message AuthUserReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAuthUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthUserReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AuthUserReq;

        /**
         * Decodes an AuthUserReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthUserReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AuthUserReq;

        /**
         * Verifies an AuthUserReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthUserReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthUserReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AuthUserReq;

        /**
         * Creates a plain object from an AuthUserReq message. Also converts values to other types if specified.
         * @param message AuthUserReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AuthUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthUserReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthUserReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthUserResp. */
    interface IAuthUserResp {

        /** AuthUserResp user_id */
        user_id?: (number|Long|null);
    }

    /** Represents an AuthUserResp. */
    class AuthUserResp implements IAuthUserResp {

        /**
         * Constructs a new AuthUserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IAuthUserResp);

        /** AuthUserResp user_id. */
        public user_id: (number|Long);

        /**
         * Creates a new AuthUserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthUserResp instance
         */
        public static create(properties?: dashboard.IAuthUserResp): dashboard.AuthUserResp;

        /**
         * Encodes the specified AuthUserResp message. Does not implicitly {@link dashboard.AuthUserResp.verify|verify} messages.
         * @param message AuthUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IAuthUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthUserResp message, length delimited. Does not implicitly {@link dashboard.AuthUserResp.verify|verify} messages.
         * @param message AuthUserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IAuthUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthUserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.AuthUserResp;

        /**
         * Decodes an AuthUserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthUserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.AuthUserResp;

        /**
         * Verifies an AuthUserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthUserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthUserResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.AuthUserResp;

        /**
         * Creates a plain object from an AuthUserResp message. Also converts values to other types if specified.
         * @param message AuthUserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.AuthUserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthUserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthUserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisabledRBACReq. */
    interface IDisabledRBACReq {
    }

    /** Represents a DisabledRBACReq. */
    class DisabledRBACReq implements IDisabledRBACReq {

        /**
         * Constructs a new DisabledRBACReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDisabledRBACReq);

        /**
         * Creates a new DisabledRBACReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisabledRBACReq instance
         */
        public static create(properties?: dashboard.IDisabledRBACReq): dashboard.DisabledRBACReq;

        /**
         * Encodes the specified DisabledRBACReq message. Does not implicitly {@link dashboard.DisabledRBACReq.verify|verify} messages.
         * @param message DisabledRBACReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDisabledRBACReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisabledRBACReq message, length delimited. Does not implicitly {@link dashboard.DisabledRBACReq.verify|verify} messages.
         * @param message DisabledRBACReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDisabledRBACReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisabledRBACReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisabledRBACReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DisabledRBACReq;

        /**
         * Decodes a DisabledRBACReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisabledRBACReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DisabledRBACReq;

        /**
         * Verifies a DisabledRBACReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisabledRBACReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisabledRBACReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DisabledRBACReq;

        /**
         * Creates a plain object from a DisabledRBACReq message. Also converts values to other types if specified.
         * @param message DisabledRBACReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DisabledRBACReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisabledRBACReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisabledRBACReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisabledRBACResp. */
    interface IDisabledRBACResp {

        /** DisabledRBACResp disabled */
        disabled?: (boolean|null);
    }

    /** Represents a DisabledRBACResp. */
    class DisabledRBACResp implements IDisabledRBACResp {

        /**
         * Constructs a new DisabledRBACResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IDisabledRBACResp);

        /** DisabledRBACResp disabled. */
        public disabled: boolean;

        /**
         * Creates a new DisabledRBACResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisabledRBACResp instance
         */
        public static create(properties?: dashboard.IDisabledRBACResp): dashboard.DisabledRBACResp;

        /**
         * Encodes the specified DisabledRBACResp message. Does not implicitly {@link dashboard.DisabledRBACResp.verify|verify} messages.
         * @param message DisabledRBACResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IDisabledRBACResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisabledRBACResp message, length delimited. Does not implicitly {@link dashboard.DisabledRBACResp.verify|verify} messages.
         * @param message DisabledRBACResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IDisabledRBACResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisabledRBACResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisabledRBACResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.DisabledRBACResp;

        /**
         * Decodes a DisabledRBACResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisabledRBACResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.DisabledRBACResp;

        /**
         * Verifies a DisabledRBACResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisabledRBACResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisabledRBACResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.DisabledRBACResp;

        /**
         * Creates a plain object from a DisabledRBACResp message. Also converts values to other types if specified.
         * @param message DisabledRBACResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.DisabledRBACResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisabledRBACResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisabledRBACResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserInfoReq. */
    interface IGetUserInfoReq {
    }

    /** Represents a GetUserInfoReq. */
    class GetUserInfoReq implements IGetUserInfoReq {

        /**
         * Constructs a new GetUserInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IGetUserInfoReq);

        /**
         * Creates a new GetUserInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserInfoReq instance
         */
        public static create(properties?: dashboard.IGetUserInfoReq): dashboard.GetUserInfoReq;

        /**
         * Encodes the specified GetUserInfoReq message. Does not implicitly {@link dashboard.GetUserInfoReq.verify|verify} messages.
         * @param message GetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserInfoReq message, length delimited. Does not implicitly {@link dashboard.GetUserInfoReq.verify|verify} messages.
         * @param message GetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.GetUserInfoReq;

        /**
         * Decodes a GetUserInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.GetUserInfoReq;

        /**
         * Verifies a GetUserInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.GetUserInfoReq;

        /**
         * Creates a plain object from a GetUserInfoReq message. Also converts values to other types if specified.
         * @param message GetUserInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.GetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserInfoReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserInfoResp. */
    interface IGetUserInfoResp {

        /** GetUserInfoResp user_id */
        user_id?: (number|Long|null);

        /** GetUserInfoResp username */
        username?: (string|null);

        /** GetUserInfoResp role_names */
        role_names?: (string[]|null);

        /** GetUserInfoResp last_login_at */
        last_login_at?: (number|Long|null);
    }

    /** Represents a GetUserInfoResp. */
    class GetUserInfoResp implements IGetUserInfoResp {

        /**
         * Constructs a new GetUserInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IGetUserInfoResp);

        /** GetUserInfoResp user_id. */
        public user_id: (number|Long);

        /** GetUserInfoResp username. */
        public username: string;

        /** GetUserInfoResp role_names. */
        public role_names: string[];

        /** GetUserInfoResp last_login_at. */
        public last_login_at: (number|Long);

        /**
         * Creates a new GetUserInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserInfoResp instance
         */
        public static create(properties?: dashboard.IGetUserInfoResp): dashboard.GetUserInfoResp;

        /**
         * Encodes the specified GetUserInfoResp message. Does not implicitly {@link dashboard.GetUserInfoResp.verify|verify} messages.
         * @param message GetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserInfoResp message, length delimited. Does not implicitly {@link dashboard.GetUserInfoResp.verify|verify} messages.
         * @param message GetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.GetUserInfoResp;

        /**
         * Decodes a GetUserInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.GetUserInfoResp;

        /**
         * Verifies a GetUserInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.GetUserInfoResp;

        /**
         * Creates a plain object from a GetUserInfoResp message. Also converts values to other types if specified.
         * @param message GetUserInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.GetUserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserInfoResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRSAPubKeyReq. */
    interface IGetRSAPubKeyReq {
    }

    /** Represents a GetRSAPubKeyReq. */
    class GetRSAPubKeyReq implements IGetRSAPubKeyReq {

        /**
         * Constructs a new GetRSAPubKeyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IGetRSAPubKeyReq);

        /**
         * Creates a new GetRSAPubKeyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRSAPubKeyReq instance
         */
        public static create(properties?: dashboard.IGetRSAPubKeyReq): dashboard.GetRSAPubKeyReq;

        /**
         * Encodes the specified GetRSAPubKeyReq message. Does not implicitly {@link dashboard.GetRSAPubKeyReq.verify|verify} messages.
         * @param message GetRSAPubKeyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IGetRSAPubKeyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRSAPubKeyReq message, length delimited. Does not implicitly {@link dashboard.GetRSAPubKeyReq.verify|verify} messages.
         * @param message GetRSAPubKeyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IGetRSAPubKeyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRSAPubKeyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRSAPubKeyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.GetRSAPubKeyReq;

        /**
         * Decodes a GetRSAPubKeyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRSAPubKeyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.GetRSAPubKeyReq;

        /**
         * Verifies a GetRSAPubKeyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRSAPubKeyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRSAPubKeyReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.GetRSAPubKeyReq;

        /**
         * Creates a plain object from a GetRSAPubKeyReq message. Also converts values to other types if specified.
         * @param message GetRSAPubKeyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.GetRSAPubKeyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRSAPubKeyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRSAPubKeyReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRSAPubKeyResp. */
    interface IGetRSAPubKeyResp {

        /** GetRSAPubKeyResp key */
        key?: (string|null);
    }

    /** Represents a GetRSAPubKeyResp. */
    class GetRSAPubKeyResp implements IGetRSAPubKeyResp {

        /**
         * Constructs a new GetRSAPubKeyResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IGetRSAPubKeyResp);

        /** GetRSAPubKeyResp key. */
        public key: string;

        /**
         * Creates a new GetRSAPubKeyResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRSAPubKeyResp instance
         */
        public static create(properties?: dashboard.IGetRSAPubKeyResp): dashboard.GetRSAPubKeyResp;

        /**
         * Encodes the specified GetRSAPubKeyResp message. Does not implicitly {@link dashboard.GetRSAPubKeyResp.verify|verify} messages.
         * @param message GetRSAPubKeyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IGetRSAPubKeyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRSAPubKeyResp message, length delimited. Does not implicitly {@link dashboard.GetRSAPubKeyResp.verify|verify} messages.
         * @param message GetRSAPubKeyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IGetRSAPubKeyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRSAPubKeyResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRSAPubKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.GetRSAPubKeyResp;

        /**
         * Decodes a GetRSAPubKeyResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRSAPubKeyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.GetRSAPubKeyResp;

        /**
         * Verifies a GetRSAPubKeyResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRSAPubKeyResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRSAPubKeyResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.GetRSAPubKeyResp;

        /**
         * Creates a plain object from a GetRSAPubKeyResp message. Also converts values to other types if specified.
         * @param message GetRSAPubKeyResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.GetRSAPubKeyResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRSAPubKeyResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRSAPubKeyResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq username */
        username?: (string|null);

        /** LoginReq password */
        password?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.ILoginReq);

        /** LoginReq username. */
        public username: string;

        /** LoginReq password. */
        public password: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: dashboard.ILoginReq): dashboard.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link dashboard.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link dashboard.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): dashboard.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResp. */
    interface ILoginResp {

        /** LoginResp token */
        token?: (string|null);

        /** LoginResp expire_at */
        expire_at?: (number|Long|null);
    }

    /** Represents a LoginResp. */
    class LoginResp implements ILoginResp {

        /**
         * Constructs a new LoginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.ILoginResp);

        /** LoginResp token. */
        public token: string;

        /** LoginResp expire_at. */
        public expire_at: (number|Long);

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResp instance
         */
        public static create(properties?: dashboard.ILoginResp): dashboard.LoginResp;

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link dashboard.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link dashboard.LoginResp.verify|verify} messages.
         * @param message LoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.LoginResp;

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.LoginResp;

        /**
         * Verifies a LoginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResp
         */
        public static fromObject(object: { [k: string]: any }): dashboard.LoginResp;

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @param message LoginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.LoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** UserStatus enum. */
    enum UserStatus {
        UserStatusNil = 0,
        UserStatusNormal = 1,
        UserStatusFrozen = 2
    }

    /** Properties of a User. */
    interface IUser {

        /** User username */
        username?: (string|null);

        /** User password */
        password?: (string|null);

        /** User status */
        status?: (number|null);

        /** User user_id */
        user_id?: (number|Long|null);

        /** User last_login_at */
        last_login_at?: (number|Long|null);

        /** User role_ids */
        role_ids?: ((number|Long)[]|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IUser);

        /** User username. */
        public username: string;

        /** User password. */
        public password: string;

        /** User status. */
        public status: number;

        /** User user_id. */
        public user_id: (number|Long);

        /** User last_login_at. */
        public last_login_at: (number|Long);

        /** User role_ids. */
        public role_ids: (number|Long)[];

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: dashboard.IUser): dashboard.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link dashboard.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link dashboard.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): dashboard.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Page. */
    interface IPage {

        /** Page page_size */
        page_size?: (number|null);

        /** Page page */
        page?: (number|null);
    }

    /** Represents a Page. */
    class Page implements IPage {

        /**
         * Constructs a new Page.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IPage);

        /** Page page_size. */
        public page_size: number;

        /** Page page. */
        public page: number;

        /**
         * Creates a new Page instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Page instance
         */
        public static create(properties?: dashboard.IPage): dashboard.Page;

        /**
         * Encodes the specified Page message. Does not implicitly {@link dashboard.Page.verify|verify} messages.
         * @param message Page message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Page message, length delimited. Does not implicitly {@link dashboard.Page.verify|verify} messages.
         * @param message Page message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Page message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.Page;

        /**
         * Decodes a Page message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.Page;

        /**
         * Verifies a Page message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Page message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Page
         */
        public static fromObject(object: { [k: string]: any }): dashboard.Page;

        /**
         * Creates a plain object from a Page message. Also converts values to other types if specified.
         * @param message Page
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Page to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Page
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListenerGroup. */
    interface IListenerGroup {

        /** ListenerGroup name */
        name?: (string|null);

        /** ListenerGroup desc */
        desc?: (string|null);
    }

    /** Represents a ListenerGroup. */
    class ListenerGroup implements IListenerGroup {

        /**
         * Constructs a new ListenerGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: dashboard.IListenerGroup);

        /** ListenerGroup name. */
        public name: string;

        /** ListenerGroup desc. */
        public desc: string;

        /**
         * Creates a new ListenerGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListenerGroup instance
         */
        public static create(properties?: dashboard.IListenerGroup): dashboard.ListenerGroup;

        /**
         * Encodes the specified ListenerGroup message. Does not implicitly {@link dashboard.ListenerGroup.verify|verify} messages.
         * @param message ListenerGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dashboard.IListenerGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListenerGroup message, length delimited. Does not implicitly {@link dashboard.ListenerGroup.verify|verify} messages.
         * @param message ListenerGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dashboard.IListenerGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListenerGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListenerGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dashboard.ListenerGroup;

        /**
         * Decodes a ListenerGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListenerGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dashboard.ListenerGroup;

        /**
         * Verifies a ListenerGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListenerGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListenerGroup
         */
        public static fromObject(object: { [k: string]: any }): dashboard.ListenerGroup;

        /**
         * Creates a plain object from a ListenerGroup message. Also converts values to other types if specified.
         * @param message ListenerGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dashboard.ListenerGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListenerGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListenerGroup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace easymicro_ext. */
export namespace easymicro_ext {

    /** Properties of an ErrMessage. */
    interface IErrMessage {

        /** ErrMessage message */
        message?: (string|null);
    }

    /** Represents an ErrMessage. */
    class ErrMessage implements IErrMessage {

        /**
         * Constructs a new ErrMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: easymicro_ext.IErrMessage);

        /** ErrMessage message. */
        public message: string;

        /**
         * Creates a new ErrMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrMessage instance
         */
        public static create(properties?: easymicro_ext.IErrMessage): easymicro_ext.ErrMessage;

        /**
         * Encodes the specified ErrMessage message. Does not implicitly {@link easymicro_ext.ErrMessage.verify|verify} messages.
         * @param message ErrMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: easymicro_ext.IErrMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrMessage message, length delimited. Does not implicitly {@link easymicro_ext.ErrMessage.verify|verify} messages.
         * @param message ErrMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: easymicro_ext.IErrMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): easymicro_ext.ErrMessage;

        /**
         * Decodes an ErrMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): easymicro_ext.ErrMessage;

        /**
         * Verifies an ErrMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrMessage
         */
        public static fromObject(object: { [k: string]: any }): easymicro_ext.ErrMessage;

        /**
         * Creates a plain object from an ErrMessage message. Also converts values to other types if specified.
         * @param message ErrMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: easymicro_ext.ErrMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ErrMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JobOpts. */
    interface IJobOpts {
    }

    /** Represents a JobOpts. */
    class JobOpts implements IJobOpts {

        /**
         * Constructs a new JobOpts.
         * @param [properties] Properties to set
         */
        constructor(properties?: easymicro_ext.IJobOpts);

        /**
         * Creates a new JobOpts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JobOpts instance
         */
        public static create(properties?: easymicro_ext.IJobOpts): easymicro_ext.JobOpts;

        /**
         * Encodes the specified JobOpts message. Does not implicitly {@link easymicro_ext.JobOpts.verify|verify} messages.
         * @param message JobOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: easymicro_ext.IJobOpts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JobOpts message, length delimited. Does not implicitly {@link easymicro_ext.JobOpts.verify|verify} messages.
         * @param message JobOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: easymicro_ext.IJobOpts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JobOpts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JobOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): easymicro_ext.JobOpts;

        /**
         * Decodes a JobOpts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JobOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): easymicro_ext.JobOpts;

        /**
         * Verifies a JobOpts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JobOpts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JobOpts
         */
        public static fromObject(object: { [k: string]: any }): easymicro_ext.JobOpts;

        /**
         * Creates a plain object from a JobOpts message. Also converts values to other types if specified.
         * @param message JobOpts
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: easymicro_ext.JobOpts, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JobOpts to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JobOpts
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JsonSchemaOutputOpts. */
    interface IJsonSchemaOutputOpts {

        /** JsonSchemaOutputOpts enabled_reference */
        enabled_reference?: (boolean|null);

        /** JsonSchemaOutputOpts disabled_additional_properties */
        disabled_additional_properties?: (boolean|null);

        /** JsonSchemaOutputOpts disabled_require_from_json_schema_tags */
        disabled_require_from_json_schema_tags?: (boolean|null);

        /** JsonSchemaOutputOpts field_name_tag */
        field_name_tag?: (string|null);
    }

    /** Represents a JsonSchemaOutputOpts. */
    class JsonSchemaOutputOpts implements IJsonSchemaOutputOpts {

        /**
         * Constructs a new JsonSchemaOutputOpts.
         * @param [properties] Properties to set
         */
        constructor(properties?: easymicro_ext.IJsonSchemaOutputOpts);

        /** JsonSchemaOutputOpts enabled_reference. */
        public enabled_reference: boolean;

        /** JsonSchemaOutputOpts disabled_additional_properties. */
        public disabled_additional_properties: boolean;

        /** JsonSchemaOutputOpts disabled_require_from_json_schema_tags. */
        public disabled_require_from_json_schema_tags: boolean;

        /** JsonSchemaOutputOpts field_name_tag. */
        public field_name_tag: string;

        /**
         * Creates a new JsonSchemaOutputOpts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JsonSchemaOutputOpts instance
         */
        public static create(properties?: easymicro_ext.IJsonSchemaOutputOpts): easymicro_ext.JsonSchemaOutputOpts;

        /**
         * Encodes the specified JsonSchemaOutputOpts message. Does not implicitly {@link easymicro_ext.JsonSchemaOutputOpts.verify|verify} messages.
         * @param message JsonSchemaOutputOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: easymicro_ext.IJsonSchemaOutputOpts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JsonSchemaOutputOpts message, length delimited. Does not implicitly {@link easymicro_ext.JsonSchemaOutputOpts.verify|verify} messages.
         * @param message JsonSchemaOutputOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: easymicro_ext.IJsonSchemaOutputOpts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JsonSchemaOutputOpts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JsonSchemaOutputOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): easymicro_ext.JsonSchemaOutputOpts;

        /**
         * Decodes a JsonSchemaOutputOpts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JsonSchemaOutputOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): easymicro_ext.JsonSchemaOutputOpts;

        /**
         * Verifies a JsonSchemaOutputOpts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JsonSchemaOutputOpts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JsonSchemaOutputOpts
         */
        public static fromObject(object: { [k: string]: any }): easymicro_ext.JsonSchemaOutputOpts;

        /**
         * Creates a plain object from a JsonSchemaOutputOpts message. Also converts values to other types if specified.
         * @param message JsonSchemaOutputOpts
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: easymicro_ext.JsonSchemaOutputOpts, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JsonSchemaOutputOpts to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JsonSchemaOutputOpts
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProtoGenOpts. */
    interface IProtoGenOpts {

        /** ProtoGenOpts server_package */
        server_package?: (string|null);

        /** ProtoGenOpts disabled_load_fastlog */
        disabled_load_fastlog?: (boolean|null);

        /** ProtoGenOpts disabled_load_mongo */
        disabled_load_mongo?: (boolean|null);

        /** ProtoGenOpts disabled_load_redis */
        disabled_load_redis?: (boolean|null);

        /** ProtoGenOpts disabled_load_etcd */
        disabled_load_etcd?: (boolean|null);

        /** ProtoGenOpts disabled_load_discovery */
        disabled_load_discovery?: (boolean|null);

        /** ProtoGenOpts disabled_load_nats */
        disabled_load_nats?: (boolean|null);

        /** ProtoGenOpts disabled_elect */
        disabled_elect?: (boolean|null);

        /** ProtoGenOpts elect_driver_name */
        elect_driver_name?: (string|null);

        /** ProtoGenOpts elect_driver_conn */
        elect_driver_conn?: (string|null);

        /** ProtoGenOpts grpc_schema */
        grpc_schema?: (string|null);

        /** ProtoGenOpts discovery_name */
        discovery_name?: (string|null);

        /** ProtoGenOpts enabled_health */
        enabled_health?: (boolean|null);

        /** ProtoGenOpts auto_go_mod_client */
        auto_go_mod_client?: (boolean|null);

        /** ProtoGenOpts auto_go_mod_server */
        auto_go_mod_server?: (boolean|null);

        /** ProtoGenOpts mgorm_redis_cache_conn */
        mgorm_redis_cache_conn?: (string|null);

        /** ProtoGenOpts disabled_mgorm_redis_cache_conn */
        disabled_mgorm_redis_cache_conn?: (boolean|null);

        /** ProtoGenOpts disabled_fastlog_mgorm_query */
        disabled_fastlog_mgorm_query?: (boolean|null);
    }

    /** Represents a ProtoGenOpts. */
    class ProtoGenOpts implements IProtoGenOpts {

        /**
         * Constructs a new ProtoGenOpts.
         * @param [properties] Properties to set
         */
        constructor(properties?: easymicro_ext.IProtoGenOpts);

        /** ProtoGenOpts server_package. */
        public server_package: string;

        /** ProtoGenOpts disabled_load_fastlog. */
        public disabled_load_fastlog: boolean;

        /** ProtoGenOpts disabled_load_mongo. */
        public disabled_load_mongo: boolean;

        /** ProtoGenOpts disabled_load_redis. */
        public disabled_load_redis: boolean;

        /** ProtoGenOpts disabled_load_etcd. */
        public disabled_load_etcd: boolean;

        /** ProtoGenOpts disabled_load_discovery. */
        public disabled_load_discovery: boolean;

        /** ProtoGenOpts disabled_load_nats. */
        public disabled_load_nats: boolean;

        /** ProtoGenOpts disabled_elect. */
        public disabled_elect: boolean;

        /** ProtoGenOpts elect_driver_name. */
        public elect_driver_name: string;

        /** ProtoGenOpts elect_driver_conn. */
        public elect_driver_conn: string;

        /** ProtoGenOpts grpc_schema. */
        public grpc_schema: string;

        /** ProtoGenOpts discovery_name. */
        public discovery_name: string;

        /** ProtoGenOpts enabled_health. */
        public enabled_health: boolean;

        /** ProtoGenOpts auto_go_mod_client. */
        public auto_go_mod_client: boolean;

        /** ProtoGenOpts auto_go_mod_server. */
        public auto_go_mod_server: boolean;

        /** ProtoGenOpts mgorm_redis_cache_conn. */
        public mgorm_redis_cache_conn: string;

        /** ProtoGenOpts disabled_mgorm_redis_cache_conn. */
        public disabled_mgorm_redis_cache_conn: boolean;

        /** ProtoGenOpts disabled_fastlog_mgorm_query. */
        public disabled_fastlog_mgorm_query: boolean;

        /**
         * Creates a new ProtoGenOpts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtoGenOpts instance
         */
        public static create(properties?: easymicro_ext.IProtoGenOpts): easymicro_ext.ProtoGenOpts;

        /**
         * Encodes the specified ProtoGenOpts message. Does not implicitly {@link easymicro_ext.ProtoGenOpts.verify|verify} messages.
         * @param message ProtoGenOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: easymicro_ext.IProtoGenOpts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtoGenOpts message, length delimited. Does not implicitly {@link easymicro_ext.ProtoGenOpts.verify|verify} messages.
         * @param message ProtoGenOpts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: easymicro_ext.IProtoGenOpts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtoGenOpts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtoGenOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): easymicro_ext.ProtoGenOpts;

        /**
         * Decodes a ProtoGenOpts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtoGenOpts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): easymicro_ext.ProtoGenOpts;

        /**
         * Verifies a ProtoGenOpts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtoGenOpts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtoGenOpts
         */
        public static fromObject(object: { [k: string]: any }): easymicro_ext.ProtoGenOpts;

        /**
         * Creates a plain object from a ProtoGenOpts message. Also converts values to other types if specified.
         * @param message ProtoGenOpts
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: easymicro_ext.ProtoGenOpts, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtoGenOpts to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProtoGenOpts
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto option_dependency */
            option_dependency?: (string[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto option_dependency. */
            public option_dependency: string[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: google.protobuf.Edition;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /** DescriptorProto visibility. */
            public visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: google.protobuf.ExtensionRangeOptions.VerificationState;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration full_name */
                full_name?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration full_name. */
                public full_name: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3_optional */
            proto3_optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3_optional. */
            public proto3_optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reserved_range */
            reserved_range?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reserved_name */
            reserved_name?: (string[]|null);

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reserved_range. */
            public reserved_range: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reserved_name. */
            public reserved_name: string[];

            /** EnumDescriptorProto visibility. */
            public visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions swift_prefix */
            swift_prefix?: (string|null);

            /** FileOptions php_class_prefix */
            php_class_prefix?: (string|null);

            /** FileOptions php_namespace */
            php_namespace?: (string|null);

            /** FileOptions php_metadata_namespace */
            php_metadata_namespace?: (string|null);

            /** FileOptions ruby_package */
            ruby_package?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .easymicro_ext.proto_gen_opts */
            ".easymicro_ext.proto_gen_opts"?: (easymicro_ext.IProtoGenOpts|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions swift_prefix. */
            public swift_prefix: string;

            /** FileOptions php_class_prefix. */
            public php_class_prefix: string;

            /** FileOptions php_namespace. */
            public php_namespace: string;

            /** FileOptions php_metadata_namespace. */
            public php_metadata_namespace: string;

            /** FileOptions ruby_package. */
            public ruby_package: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions deprecated_legacy_json_field_conflicts */
            deprecated_legacy_json_field_conflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .easymicro_ext.json_schema_output_opts */
            ".easymicro_ext.json_schema_output_opts"?: (easymicro_ext.IJsonSchemaOutputOpts|null);

            /** MessageOptions .mgorm_ext.mgorm_opts */
            ".mgorm_ext.mgorm_opts"?: (mgorm_ext.IMgormOptions|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions deprecated_legacy_json_field_conflicts. */
            public deprecated_legacy_json_field_conflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverified_lazy */
            unverified_lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debug_redact */
            debug_redact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions edition_defaults */
            edition_defaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions feature_support */
            feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .mgorm_ext.mgorm_field_opts */
            ".mgorm_ext.mgorm_field_opts"?: (mgorm_ext.IMgormFieldOptions|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverified_lazy. */
            public unverified_lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debug_redact. */
            public debug_redact: boolean;

            /** FieldOptions retention. */
            public retention: google.protobuf.FieldOptions.OptionRetention;

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions edition_defaults. */
            public edition_defaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions feature_support. */
            public feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport edition_introduced */
                edition_introduced?: (google.protobuf.Edition|null);

                /** FeatureSupport edition_deprecated */
                edition_deprecated?: (google.protobuf.Edition|null);

                /** FeatureSupport deprecation_warning */
                deprecation_warning?: (string|null);

                /** FeatureSupport edition_removed */
                edition_removed?: (google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport edition_introduced. */
                public edition_introduced: google.protobuf.Edition;

                /** FeatureSupport edition_deprecated. */
                public edition_deprecated: google.protobuf.Edition;

                /** FeatureSupport deprecation_warning. */
                public deprecation_warning: string;

                /** FeatureSupport edition_removed. */
                public edition_removed: google.protobuf.Edition;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecated_legacy_json_field_conflicts */
            deprecated_legacy_json_field_conflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .easymicro_ext.is_rpc_port */
            ".easymicro_ext.is_rpc_port"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecated_legacy_json_field_conflicts. */
            public deprecated_legacy_json_field_conflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debug_redact */
            debug_redact?: (boolean|null);

            /** EnumValueOptions feature_support */
            feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .easymicro_ext.err_message */
            ".easymicro_ext.err_message"?: (easymicro_ext.IErrMessage|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debug_redact. */
            public debug_redact: boolean;

            /** EnumValueOptions feature_support. */
            public feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotency_level */
            idempotency_level?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .easymicro_ext.job_opts */
            ".easymicro_ext.job_opts"?: (easymicro_ext.IJobOpts|null);

            /** MethodOptions .httpext.http_rule */
            ".httpext.http_rule"?: (httpext.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotency_level. */
            public idempotency_level: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (number|Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (number|Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: (number|Long);

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: (number|Long);

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet field_presence */
            field_presence?: (google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enum_type */
            enum_type?: (google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeated_field_encoding */
            repeated_field_encoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8_validation */
            utf8_validation?: (google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet message_encoding */
            message_encoding?: (google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet json_format */
            json_format?: (google.protobuf.FeatureSet.JsonFormat|null);

            /** FeatureSet enforce_naming_style */
            enforce_naming_style?: (google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet default_symbol_visibility */
            default_symbol_visibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet field_presence. */
            public field_presence: google.protobuf.FeatureSet.FieldPresence;

            /** FeatureSet enum_type. */
            public enum_type: google.protobuf.FeatureSet.EnumType;

            /** FeatureSet repeated_field_encoding. */
            public repeated_field_encoding: google.protobuf.FeatureSet.RepeatedFieldEncoding;

            /** FeatureSet utf8_validation. */
            public utf8_validation: google.protobuf.FeatureSet.Utf8Validation;

            /** FeatureSet message_encoding. */
            public message_encoding: google.protobuf.FeatureSet.MessageEncoding;

            /** FeatureSet json_format. */
            public json_format: google.protobuf.FeatureSet.JsonFormat;

            /** FeatureSet enforce_naming_style. */
            public enforce_naming_style: google.protobuf.FeatureSet.EnforceNamingStyle;

            /** FeatureSet default_symbol_visibility. */
            public default_symbol_visibility: google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility;

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimum_edition */
            minimum_edition?: (google.protobuf.Edition|null);

            /** FeatureSetDefaults maximum_edition */
            maximum_edition?: (google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimum_edition. */
            public minimum_edition: google.protobuf.Edition;

            /** FeatureSetDefaults maximum_edition. */
            public maximum_edition: google.protobuf.Edition;

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** FeatureSetEditionDefault overridable_features */
                overridable_features?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixed_features */
                fixed_features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** FeatureSetEditionDefault overridable_features. */
                public overridable_features?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixed_features. */
                public fixed_features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: google.protobuf.GeneratedCodeInfo.Annotation.Semantic;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
        }
    }
}

/** Namespace mgorm_ext. */
export namespace mgorm_ext {

    /** Properties of a MgormOptions. */
    interface IMgormOptions {

        /** MgormOptions conn */
        conn?: (string|null);

        /** MgormOptions db */
        db?: (string|null);

        /** MgormOptions tb */
        tb?: (string|null);

        /** MgormOptions cached */
        cached?: (boolean|null);

        /** MgormOptions index_keys */
        index_keys?: (string[]|null);

        /** MgormOptions expire_index_keys */
        expire_index_keys?: (string[]|null);

        /** MgormOptions uniq_index_keys */
        uniq_index_keys?: (string[]|null);

        /** MgormOptions disabled_auto_created_at */
        disabled_auto_created_at?: (boolean|null);

        /** MgormOptions disabled_auto_updated_at */
        disabled_auto_updated_at?: (boolean|null);

        /** MgormOptions disabled_auto_expire_at */
        disabled_auto_expire_at?: (boolean|null);

        /** MgormOptions primary_id_field_name */
        primary_id_field_name?: (string|null);

        /** MgormOptions expire_ttl_days */
        expire_ttl_days?: (number|Long|null);

        /** MgormOptions orm_struct_name_suffix */
        orm_struct_name_suffix?: (string|null);

        /** MgormOptions orm_model_name_suffix */
        orm_model_name_suffix?: (string|null);

        /** MgormOptions is_pure_struct */
        is_pure_struct?: (boolean|null);

        /** MgormOptions omitempty_default_bson_tag */
        omitempty_default_bson_tag?: (boolean|null);

        /** MgormOptions omitempty_default_json_tag */
        omitempty_default_json_tag?: (boolean|null);

        /** MgormOptions desc */
        desc?: (string|null);
    }

    /** Represents a MgormOptions. */
    class MgormOptions implements IMgormOptions {

        /**
         * Constructs a new MgormOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: mgorm_ext.IMgormOptions);

        /** MgormOptions conn. */
        public conn: string;

        /** MgormOptions db. */
        public db: string;

        /** MgormOptions tb. */
        public tb: string;

        /** MgormOptions cached. */
        public cached: boolean;

        /** MgormOptions index_keys. */
        public index_keys: string[];

        /** MgormOptions expire_index_keys. */
        public expire_index_keys: string[];

        /** MgormOptions uniq_index_keys. */
        public uniq_index_keys: string[];

        /** MgormOptions disabled_auto_created_at. */
        public disabled_auto_created_at: boolean;

        /** MgormOptions disabled_auto_updated_at. */
        public disabled_auto_updated_at: boolean;

        /** MgormOptions disabled_auto_expire_at. */
        public disabled_auto_expire_at: boolean;

        /** MgormOptions primary_id_field_name. */
        public primary_id_field_name: string;

        /** MgormOptions expire_ttl_days. */
        public expire_ttl_days: (number|Long);

        /** MgormOptions orm_struct_name_suffix. */
        public orm_struct_name_suffix: string;

        /** MgormOptions orm_model_name_suffix. */
        public orm_model_name_suffix: string;

        /** MgormOptions is_pure_struct. */
        public is_pure_struct: boolean;

        /** MgormOptions omitempty_default_bson_tag. */
        public omitempty_default_bson_tag: boolean;

        /** MgormOptions omitempty_default_json_tag. */
        public omitempty_default_json_tag: boolean;

        /** MgormOptions desc. */
        public desc: string;

        /**
         * Creates a new MgormOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MgormOptions instance
         */
        public static create(properties?: mgorm_ext.IMgormOptions): mgorm_ext.MgormOptions;

        /**
         * Encodes the specified MgormOptions message. Does not implicitly {@link mgorm_ext.MgormOptions.verify|verify} messages.
         * @param message MgormOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mgorm_ext.IMgormOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MgormOptions message, length delimited. Does not implicitly {@link mgorm_ext.MgormOptions.verify|verify} messages.
         * @param message MgormOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mgorm_ext.IMgormOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MgormOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MgormOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mgorm_ext.MgormOptions;

        /**
         * Decodes a MgormOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MgormOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mgorm_ext.MgormOptions;

        /**
         * Verifies a MgormOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MgormOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MgormOptions
         */
        public static fromObject(object: { [k: string]: any }): mgorm_ext.MgormOptions;

        /**
         * Creates a plain object from a MgormOptions message. Also converts values to other types if specified.
         * @param message MgormOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mgorm_ext.MgormOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MgormOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MgormOptions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MgormFieldOptions. */
    interface IMgormFieldOptions {

        /** MgormFieldOptions bson_tag */
        bson_tag?: (string|null);

        /** MgormFieldOptions json_tag */
        json_tag?: (string|null);

        /** MgormFieldOptions field_type */
        field_type?: (mgorm_ext.FieldType|null);

        /** MgormFieldOptions tags */
        tags?: (string|null);
    }

    /** Represents a MgormFieldOptions. */
    class MgormFieldOptions implements IMgormFieldOptions {

        /**
         * Constructs a new MgormFieldOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: mgorm_ext.IMgormFieldOptions);

        /** MgormFieldOptions bson_tag. */
        public bson_tag: string;

        /** MgormFieldOptions json_tag. */
        public json_tag: string;

        /** MgormFieldOptions field_type. */
        public field_type: mgorm_ext.FieldType;

        /** MgormFieldOptions tags. */
        public tags: string;

        /**
         * Creates a new MgormFieldOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MgormFieldOptions instance
         */
        public static create(properties?: mgorm_ext.IMgormFieldOptions): mgorm_ext.MgormFieldOptions;

        /**
         * Encodes the specified MgormFieldOptions message. Does not implicitly {@link mgorm_ext.MgormFieldOptions.verify|verify} messages.
         * @param message MgormFieldOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mgorm_ext.IMgormFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MgormFieldOptions message, length delimited. Does not implicitly {@link mgorm_ext.MgormFieldOptions.verify|verify} messages.
         * @param message MgormFieldOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mgorm_ext.IMgormFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MgormFieldOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MgormFieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mgorm_ext.MgormFieldOptions;

        /**
         * Decodes a MgormFieldOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MgormFieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mgorm_ext.MgormFieldOptions;

        /**
         * Verifies a MgormFieldOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MgormFieldOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MgormFieldOptions
         */
        public static fromObject(object: { [k: string]: any }): mgorm_ext.MgormFieldOptions;

        /**
         * Creates a plain object from a MgormFieldOptions message. Also converts values to other types if specified.
         * @param message MgormFieldOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mgorm_ext.MgormFieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MgormFieldOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MgormFieldOptions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** FieldType enum. */
    enum FieldType {
        FieldTypeNil = 0,
        FieldTypeDatetime = 1,
        FieldTypeObjectId = 2
    }
}

/** Namespace httpext. */
export namespace httpext {

    /** Properties of a HttpRule. */
    interface IHttpRule {

        /** HttpRule method */
        method?: (string|null);

        /** HttpRule path */
        path?: (string|null);

        /** HttpRule no_auth */
        no_auth?: (boolean|null);
    }

    /** Represents a HttpRule. */
    class HttpRule implements IHttpRule {

        /**
         * Constructs a new HttpRule.
         * @param [properties] Properties to set
         */
        constructor(properties?: httpext.IHttpRule);

        /** HttpRule method. */
        public method: string;

        /** HttpRule path. */
        public path: string;

        /** HttpRule no_auth. */
        public no_auth: boolean;

        /**
         * Creates a new HttpRule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HttpRule instance
         */
        public static create(properties?: httpext.IHttpRule): httpext.HttpRule;

        /**
         * Encodes the specified HttpRule message. Does not implicitly {@link httpext.HttpRule.verify|verify} messages.
         * @param message HttpRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: httpext.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link httpext.HttpRule.verify|verify} messages.
         * @param message HttpRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: httpext.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HttpRule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HttpRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): httpext.HttpRule;

        /**
         * Decodes a HttpRule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HttpRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): httpext.HttpRule;

        /**
         * Verifies a HttpRule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HttpRule
         */
        public static fromObject(object: { [k: string]: any }): httpext.HttpRule;

        /**
         * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
         * @param message HttpRule
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: httpext.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HttpRule to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HttpRule
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
