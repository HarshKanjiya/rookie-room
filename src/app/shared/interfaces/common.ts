export interface IUser {
    email?: string
    phone?: string
    name: string
    userName: string
    gender?: string
    avatarUrl?: string
}

export interface LoginDTO {
    email: string
    password: string
}

export interface SignUpDTO {
    email: string
    password: string
}

export interface OtpDTO {
    email?: string
    otp?: string
}

export enum NotificationTypes {
    SUCCESS, ERROR, WARNING, INFO
}

export interface IPageObject {
    pageSize?: number;
    currentPage?: number;
    totalCount?: number;
    maxSize?: number;
}

export class PageObject implements IPageObject {
    public pageSize?: number;
    public currentPage?: number;
    public totalCount?: number;
    public maxSize?: number;
}