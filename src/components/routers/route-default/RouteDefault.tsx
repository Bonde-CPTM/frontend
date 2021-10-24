import { useTokenService } from "hooks/tolen-service"
import { useEffect } from "react"
import { Route, useHistory } from "react-router-dom"
import { RouteDefaultProps } from "./types/RouteDefaultProps"

export const RouteDefault = (props: RouteDefaultProps) => {
    const { getToken } = useTokenService()
    const history = useHistory()
    useEffect(()=>{
        const token = getToken()
        console.log(token)
        if(token){
            if(props.visibility === 'not-auth'){
                history.push('/')
            }   
        } else {
            if(props.visibility === 'auth'){
                history.push('/login')
            }
        }
    }, [getToken, props.visibility, history])
    return (
        <>
            <Route
                path={props.path}
                exact={props.exact ? props.exact : false}>
                {props.component}
            </Route>
        </>
    )
}
