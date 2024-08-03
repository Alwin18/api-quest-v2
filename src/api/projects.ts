import { useQuery } from '@tanstack/react-query';
import { IBaseResponse } from '../types/base-response';
import axiosInstance from '@/lib/axiosInstance';

const fetchProjects = async (id: number): Promise<IBaseResponse> => {
  const { data } = await axiosInstance.get(`projects?team_id=${id}`);
  return data;
};

export const GetProjects = (id: number) => {
  return useQuery({
    queryKey: ['projects', id],
    queryFn: () => fetchProjects(id),
    enabled: !!id
  });
};