import { IMenu } from "../teams/type"

export interface IPProjects {
    team_name: string
    tabMenus: IMenu[]
    projects: IProject[]
    handleClickTabs: (id: number) => void
    handleClickProjects: (id: number) => void
}

export interface IProject {
    id: number
    project_name: string
    icon: string
    project_type: string
}

