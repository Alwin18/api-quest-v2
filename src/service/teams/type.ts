import { ICreateTeamRequest } from "@/api/type"

export interface IPSidebar {
    listTeams: IMenu[]
    teamLoading: boolean
    handleClickTeamMenu: (id: number, name: string) => void
    handleClickAddTeam: () => void,
    handleCreateTeam: (icons: string, teamName: string) => void
    isShowCreateTeam: boolean
}

export interface ITeam {
    id: number
    icon: string,
    team_name: string
}

export interface IMenu {
    id: number,
    name: string,
    click: boolean
}