import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance';
import { IBaseResponse } from '../types/base-response';
import { ICreateTeamRequest } from '../types/team';

const fetchTeams = async (id: number): Promise<IBaseResponse> => {
  const { data } = await axiosInstance.get(`teams?user_id=${id}`);
  return data.json();
};

export const postTeams = async (payload: ICreateTeamRequest): Promise<IBaseResponse> => {
  const { data } = await axiosInstance.post('team', payload);
  return data;
}

export const GetTeams = (id: number) => {
  return useQuery({
    queryKey: ['teams', id],
    queryFn: () => fetchTeams(id),
    enabled: !!id
  });
};
