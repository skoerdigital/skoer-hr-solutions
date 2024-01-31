export interface AuthorizationInterceptorProviderConfig {
    storage: Storage;
    aliases: Record<'tokenKey' | 'refreshTokenKey', string>,
}
