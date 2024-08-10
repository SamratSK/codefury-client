export interface Chat {
  message: string;
  sender: 'me' | 'govt';
}

export interface Action {
  message: string;
  action: Function;
}