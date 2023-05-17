export const config = {
  clientId: "bd56554b-8d5b-4e7d-8a6e-7da73e647d0b",
  redirectUrl: "https://localhost:3000",
  authority : "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a"
}



export const msalConfig = {
  auth: {
    clientId: 'bd56554b-8d5b-4e7d-8a6e-7da73e647d0b',
    authority: 'https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a',
    redirectUri: "https://localhost:3000",
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};