import { loadingActions } from '@/store/reducers/loading.reducer'

export const loadingControl = (state: boolean, message = '') => {
    loadingActions.setLoading(state)
    if (message) loadingActions.setMessage(message)
}
