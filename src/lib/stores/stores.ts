import { writable } from "svelte/store";
import { browser } from '$app/environment';

export const NAME_STORE = writable<string>( browser ? window.localStorage.getItem('name') ?? undefined: undefined);
export const EMAIL_STORE = writable<string>( browser ? window.localStorage.getItem('email') ?? undefined: undefined);
export const TOKEN_STORE = writable<string>( browser ? window.localStorage.getItem('token') ?? undefined: undefined);

NAME_STORE.subscribe((value) => {
  if (browser && value != undefined) {
    window.localStorage.setItem('name', value);
  }
});

EMAIL_STORE.subscribe((value) => {
  if (browser && value != undefined) {
    window.localStorage.setItem('email', value);
  }
});

TOKEN_STORE.subscribe((value) => {
  if (browser && value != undefined) {
    window.localStorage.setItem('token', value);
  }
});

export function logout(){
  window.localStorage.clear();
}
