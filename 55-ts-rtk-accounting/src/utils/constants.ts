export const baseUrl = 'https://webaccounting.herokuapp.com/account'

export const createToken = (login: string, password: string) => `Basic ${window.btoa(login + ':' + password)}`;

export const extractPasswordFromToken = (token: string) => {
    const base64String = token.split(' ')[1];
    const decodedString = window.atob(base64String);
    const [login, password] = decodedString.split(':');
    return password;
  };