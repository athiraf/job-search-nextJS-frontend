const ApiBaseUrlSandbox : string = 'http://127.0.0.1:8000';
const ApiBaseUrlProd : string = 'http://workclass-job-search-task.herokuapp.com/';

const ApiBaseUrl = process.env.NODE_ENV == 'production'? ApiBaseUrlProd : ApiBaseUrlSandbox;

export const ApiURL = {
    GetJobs : ApiBaseUrl + '/jobs',
}