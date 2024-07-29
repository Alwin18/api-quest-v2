export interface IBaseResponse {
    status: boolean
    code: number
    messages: string
    data: any
}

export interface ICreateTeamRequest {
    team_name: string
    icon: string
    user_id: number
}