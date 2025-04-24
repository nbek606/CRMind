type errorCodes = 400 | 401 | 500 | 404
type registerErrorCodes = 400 | 500 | 409
export const AUTH_ERROR_MESSAGE: Record<errorCodes, string> = {
    401: 'Неверный логин или пароль.',
    400: 'Ошибка при обработке запроса',
    500: 'Произошла ошибка на сервере',
    404: 'Запрашиваемый ресурс не был найден'
}

export const REGISTER_ERROR_MESSAGE: Record<registerErrorCodes, string> = {
    400: 'Ошибка при обработке запроса',
    500: 'Произошла ошибка на сервере',
    409: ''
}