const  MOCK_API_ENDPOINT = 'https://623af4fff8827fbe47abd9ce.mockapi.io/Employee';
const LOCAL_DOTNET_SERVER_ENDPOINT = 'https://localhost:5001/employees'

const getParameterizedUrl = (endpoint: string, employeeId: string) => {
    return `${endpoint}/${employeeId}`;
}

export const constants = Object.freeze({
    MOCK_API_ENDPOINTS: {
        GET_EMPLOYEES_LIST: MOCK_API_ENDPOINT,
        GET_SINGLE_EMPLOYEE: (employeeId: string) => getParameterizedUrl(MOCK_API_ENDPOINT, employeeId),
        CREATE_NEW_EMPLOYEE: MOCK_API_ENDPOINT,
        UPDATE_EMPLOYEE: (employeeId: string) => getParameterizedUrl(MOCK_API_ENDPOINT, employeeId),
        DELETE_EMPLOYEE: (employeeId: string) => getParameterizedUrl(MOCK_API_ENDPOINT, employeeId),
    },
    MYSQL_SERVER_ENDPOINT: {
        GET_EMPLOYEES_LIST: LOCAL_DOTNET_SERVER_ENDPOINT,
        GET_SINGLE_EMPLOYEE: (employeeId: string) => getParameterizedUrl(LOCAL_DOTNET_SERVER_ENDPOINT, employeeId),
        CREATE_NEW_EMPLOYEE: LOCAL_DOTNET_SERVER_ENDPOINT,
        UPDATE_EMPLOYEE: (employeeId: string) => getParameterizedUrl(LOCAL_DOTNET_SERVER_ENDPOINT, employeeId),
        DELETE_EMPLOYEE: (employeeId: string) => getParameterizedUrl(LOCAL_DOTNET_SERVER_ENDPOINT, employeeId),
    }
});