import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { RouteDefault } from '../route-default'
import { lazy, Suspense } from 'react'

const LazyLoginPage = lazy(() => import('pages/not-auth/login-page'))
const LazySignupPage = lazy(() => import('pages/not-auth/signup-page'))

export const MainRouter = () => {
    
    return (
        <>
            <Suspense fallback={<div>loading...</div>}>
                <Router>
                    <Switch>
                        <RouteDefault exact path="/login" visibility="not-auth" component={(
                            <LazyLoginPage />
                        )} />

                        <RouteDefault exact path="/signup/login" visibility="not-auth" component={(
                            <LazySignupPage />
                        )} />

                        <RouteDefault exact path="/" visibility="auth"  component={<div>Teste</div>} />

                    </Switch>
                </Router>
            </Suspense>
        </>
    )
}
