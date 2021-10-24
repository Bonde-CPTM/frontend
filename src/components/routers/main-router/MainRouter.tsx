import { HashRouter as Router, Switch } from 'react-router-dom'
import { RouteDefault } from '../route-default'
import { lazy, Suspense } from 'react'
import { InputDefault } from 'components/inputs/input-default'

const LazyLoginPage = lazy(() => import('pages/not-auth/login-page'))
const LazySignupPage = lazy(() => import('pages/not-auth/signup-page'))
const LazyAdmNewEventPage = lazy(() => import('pages/auth/adm/event/new-event'))
const LazyAdmEventEditPage = lazy(() => import('pages/auth/adm/event/event-edit'))
const LazyAdmEventListPage = lazy(() => import('pages/auth/adm/event/event-list'))
const LazyMainPage = lazy(() => import('pages/auth/main-page'))
const LazyEventPage = lazy(() => import('pages/auth/event-page'))


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
                         <RouteDefault exact path="/adm/event/new-event" visibility="auth" component={(
                            <LazyAdmNewEventPage />
                        )} />
                        <RouteDefault exact path="/adm/event/:id" visibility="auth" component={(
                            <LazyAdmEventEditPage />
                        )} />
                          <RouteDefault exact path="/adm/event" visibility="auth" component={(
                            <LazyAdmEventListPage />
                        )} />
                          <RouteDefault exact path="/event" visibility="auth" component={(
                            <LazyEventPage />
                        )} />
                        <RouteDefault exact path="/" visibility="auth"  component={(
                            <LazyMainPage />
                        )} />

                    </Switch>
                </Router>
            </Suspense>
        </>
    )
}
