import { RouteVisibility } from "./RouteVisibility";

export interface RouteDefaultProps{
    path: string
    component: JSX.Element
    visibility?: RouteVisibility 
    exact?: boolean
}