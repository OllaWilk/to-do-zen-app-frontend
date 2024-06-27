import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token: string): boolean => {
  try {
    // Decode the Token:
    const decoded: { exp: number } = jwtDecode(token);
    // Get Current Time:
    const currentTime = Date.now() / 1000;
    // Compare Expiration Time:
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Failed to decode token:', error);
    // Return true, assuming the token is expired or invalid
    return true;
  }
};
