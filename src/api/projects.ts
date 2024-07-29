import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IBaseResponse } from './type';

const fetchProjects = async (id: number): Promise<IBaseResponse> => {
    const { data } = await axios.get('http://localhost:9000/api/v1/projects?team_id=' + id);
    return data;
};

export const GetProjects = (id: number) => {
    return useQuery({
        queryKey: ['projects', id],
        queryFn: () => fetchProjects(id),
        enabled: !!id
    });
};