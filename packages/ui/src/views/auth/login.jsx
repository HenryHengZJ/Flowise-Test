import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// material-ui
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'

// project imports
import MainCard from '@/ui-component/cards/MainCard'

// API
import authApi from '@/api/auth'

// Hooks
import useApi from '@/hooks/useApi'

// store
import { loginSuccess } from '@/store/reducers/authSlice'
import { store } from '@/store'

// ==============================|| ResolveLoginPage ||============================== //

const ResolveLoginPage = () => {
    const resolveLogin = useApi(authApi.resolveLogin)
    const adminAutoLogin = useApi(authApi.adminAutoLogin)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(false)
    }, [resolveLogin.error])

    useEffect(() => {
        resolveLogin.request({})
        setLoading(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (resolveLogin.data) {
            if (resolveLogin.data.autoLogin) {
                adminAutoLogin.request()
            } else {
                setLoading(false)
                window.location.href = resolveLogin.data.redirectUrl
            }
        }
    }, [resolveLogin.data]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (adminAutoLogin.data) {
            setLoading(false)
            store.dispatch(loginSuccess(adminAutoLogin.data))
            navigate('/')
        }
    }, [adminAutoLogin.data, navigate])

    useEffect(() => {
        if (adminAutoLogin.error) {
            setLoading(false)
            window.location.href = '/signin'
        }
    }, [adminAutoLogin.error])

    return (
        <>
            <MainCard maxWidth='md'>{loading && <BackdropLoader open={loading} />}</MainCard>
        </>
    )
}

export default ResolveLoginPage
