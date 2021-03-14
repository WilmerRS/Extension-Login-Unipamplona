export interface UserCreential {
    $key?: string;
    username: string;
    password: string;
    date: Date;
    defaultUser: boolean;
}