const types = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
}
    
export const actionCreators = {
    loading: () => ({ type: types.LOADING }),
    failure: () => ({ type: types.FAILURE }),
    success: (photos, page) => ({
    type: types.SUCCESS,
    payload: { photos, page },
    }),
}

export const initialState = {
    loading: false,
    error: false,
    newspost: [],
    nextPage: 1,
}

export function reducerNewsPost(state, action) {
    switch (action.type) {
        case types.LOADING:
            return { ...state, loading: true, error: false }
        case types.SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                newspost: [...state.newspost, ...action.payload.newspost],
                nextPage: state.nextPage + 1,
            }
        case types.FAILURE:
            return { ...state, loading: false, error: true }
    }
}
  