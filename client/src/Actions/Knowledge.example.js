import xhr from 'xhr';
import conf from '../conf';

export const setSomething = (data) => {
    return {
        type: 'FETCH_SOMETING',
        knowledgeData: data
    };
}
export const setError = (error) => {
    return {
        type: 'FETCH_ERROR',
        error: error,
    };
}

export const fetchSomething = () => {
    return (dispatch) => {//thunk
        xhr({
            url: `${conf.apibaseurl}somewhere`
        }, (err, resp, body) => {
            if (err) {
                console.log('err', err);
            } else {
                var data = JSON.parse(body);
                return dispatch(setSomething(data));
            }
        });
    }
};
