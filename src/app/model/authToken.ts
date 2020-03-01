export interface AuthToken {
  access_token: string;
  token_type: string;
  scope: Array<string>;
  jti: string;
  organization: string;
  name: string;
}
