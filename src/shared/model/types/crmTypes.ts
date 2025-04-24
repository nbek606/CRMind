export interface ICrm {
    id: number,
    name: string
}

export interface ICRMGroup {
    id: number,
    name: string,
    order: 0,
    color: string | null,
    users_count: number
}

export interface ICrmUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
}