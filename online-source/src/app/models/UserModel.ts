export interface UserModel {
    id?: number;
    email?: string;
    password?: string;
    phone_number?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    balance?: number;
    role?: 'ADMIN'|'USER'|'POINT'|'SHOP';
}