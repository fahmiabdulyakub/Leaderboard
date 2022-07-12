export interface DataUserList {
  [key: string]: DataUserType;
}

export interface DataUserType {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}
