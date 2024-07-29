import { GetTeams, postTeams } from "@/api/teams"
import { useCallback, useMemo, useState } from "react"
import { IMenu, ITeam } from "./type"
import { GetProjects } from "@/api/projects";
import { IProject } from "../projects/type";
import { useRouter } from "next/navigation";


const listTabs = [
    {
        id: 1,
        name: "Project",
        click: true,
    },
    {
        id: 2,
        name: "Resources",
        click: false,
    },
    {
        id: 3,
        name: "Activities",
        click: false,
    },
    {
        id: 4,
        name: "Members",
        click: false,
    },
    {
        id: 5,
        name: "Plans",
        click: false,
    },
    {
        id: 6,
        name: "Settings",
        click: false,
    },
];

export function UseTeams() {
    const route = useRouter()

    const [tabs, setTabs] = useState(listTabs);
    const [teamMenu, setTeamMenu] = useState<IMenu[]>([]);
    const [teamsId, setteamsId] = useState<number>(0);
    const [teamName, setTeamName] = useState<string>("");
    const [isShowCreateTeam, setIsShowCreateTeam] = useState<boolean>(false);

    // TODO: Implement Login
    const id = 8
    const { data: dataTeams, isLoading: teamLoading, refetch: refetchTeams } = GetTeams(id)
    const { data: dataProjects } = GetProjects(teamsId)

    console.log("HAHA", dataTeams);
    useMemo(() => {
        if (dataTeams?.data) {
            setTeamMenu(dataTeams.data.map((item: ITeam, index: number) => {
                return {
                    id: item.id,
                    name: item.team_name,
                    click: index === 0,
                }
            }))

            setteamsId(dataTeams.data[0].id)
            setTeamName(dataTeams.data[0].team_name)
        }

        return []
    }, [dataTeams])


    const listProjects: IProject[] = useMemo(() => {
        if (dataProjects) {
            return dataProjects.data
        }
        return []
    }, [dataProjects])

    const handleClickTabs = useCallback((id: number) => {
        const update = listTabs.map((item) => {
            if (item.id === id) {
                return { ...item, click: true };
            } else {
                return { ...item, click: false };
            }
        });
        setTabs(update);
    }, []);

    const handleClickTeamMenu = useCallback((id: number, name: string) => {
        const update = teamMenu.map((item) => {
            if (item.id === id) {
                return { ...item, click: true };
            } else {
                return { ...item, click: false };
            }
        })

        setTeamMenu(update)
        setteamsId(id)
        setTeamName(name)
    }, [teamMenu])

    const handleClickAddTeam = useCallback(() => {
        setIsShowCreateTeam(true)
    }, [])

    const handleCreateTeam = useCallback((icons: string, teamName: string) => {
        postTeams({
            icon: icons,
            team_name: teamName,
            user_id: 8
        }).then(() => {
            refetchTeams()
        })

        setIsShowCreateTeam(false)
    }, [])

    const handleClickProjects = useCallback((id: number) => {
        console.log(id)
        route.push("/project/" + id)
    }, [])

    return {
        data: {
            listProjects,
            teamLoading,
            tabs,
            teamMenu,
            teamName,
            isShowCreateTeam
        },
        method: {
            handleClickTabs,
            handleClickTeamMenu,
            handleClickAddTeam,
            handleCreateTeam,
            handleClickProjects
        }
    }
}