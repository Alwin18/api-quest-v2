import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IBaseResponse, ICreateTeamRequest } from './type';

const fetchTeams = async (id: number): Promise<IBaseResponse> => {
    const { data } = await axios.get('http://localhost:9000/api/v1/teams?user_id=' + id);
    return data;
};

export const postTeams = async (payload: ICreateTeamRequest): Promise<IBaseResponse> => {
    const { data } = await axios.post('http://localhost:9000/api/v1/team', payload);
    return data;
}

export const GetTeams = (id: number) => {
    return useQuery({
        queryKey: ['teams', id],
        queryFn: () => fetchTeams(id),
        enabled: !!id
    });
};