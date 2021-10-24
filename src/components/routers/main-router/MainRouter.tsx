import { HashRouter as Router, Switch } from 'react-router-dom'
import { RouteDefault } from '../route-default'
import { lazy, Suspense } from 'react'
import { InputDefault } from 'components/inputs/input-default'

const LazyLoginPage = lazy(() => import('pages/not-auth/login-page'))
const LazySignupPage = lazy(() => import('pages/not-auth/signup-page'))
const LazyNewEventPage = lazy(() => import('pages/auth/adm/event/new-event'))
const LazyEventEditPage = lazy(() => import('pages/auth/adm/event/event-edit'))
const LazyEventListPage = lazy(() => import('pages/auth/adm/event/event-list'))


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
                            <LazyNewEventPage />
                        )} />
                        <RouteDefault exact path="/adm/event/:id" visibility="auth" component={(
                            <LazyEventEditPage />
                        )} />
                          <RouteDefault exact path="/adm/event" visibility="auth" component={(
                            <LazyEventListPage />
                        )} />
                        
                        <RouteDefault exact path="/" visibility="auth"  component={<div>
                            <InputDefault type="date" onChange={(e)=>{
                                console.log(e)
                            }} />
                        </div>} />

                    </Switch>
                </Router>
            </Suspense>
        </>
    )
}
