export interface IRegisterBody {
    name: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    email: string,
    country_id: number | null,
    password: string
}