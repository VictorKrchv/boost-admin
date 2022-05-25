import { API_URL } from '@lib/config';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface TokenResponse extends Tokens {
  accessTokenExp: number;
  refreshTokenExp: number;
}

export class TokenStorage {
  public static readonly LOCAL_STORAGE_ACCESS_TOKEN = 'accessToken';
  public static readonly LOCAL_STORAGE_REFRESH_TOKEN = 'refresh_token';
  public static readonly LOCAL_STORAGE_ACCESS_TOKEN_EXP =
    'access_token_expires_in';
  public static readonly LOCAL_STORAGE_REFRESH_TOKEN_EXP =
    'refresh_token_expires_in';

  public static refreshToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      return fetch(
        `${API_URL}auth/refresh?token=${TokenStorage.getRefreshToken()}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        },
      )
        .then((response) => response.json())
        .then((tokens: Tokens) => {
          if (tokens) {
            TokenStorage.storeToken(tokens);
            resolve(tokens.accessToken);
          } else {
            reject();
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public static storeToken(token: Tokens): void {
    localStorage.setItem(
      TokenStorage.LOCAL_STORAGE_ACCESS_TOKEN,
      token.accessToken,
    );
    localStorage.setItem(
      TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN,
      token.refreshToken,
    );
  }

  public static clear(): null {
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_ACCESS_TOKEN);
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
    return null;
  }

  public static getToken(): string | null {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_ACCESS_TOKEN);
  }

  public static getRefreshToken(): string | null {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
  }

  public static getBearer(): string | null {
    return `Bearer ${TokenStorage.getToken()}`;
  }

  public static getAccessTokenExpires(): string | null {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_ACCESS_TOKEN_EXP);
  }

  public static getRefreshTokenExpires(): string | null {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN_EXP);
  }
}
