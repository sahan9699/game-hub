import { useQuery } from "@tanstack/react-query";
import platforms from "../data/Platforms";
import APIClient from "../services/apiClient";

export interface PlatForm {
    id: number;
    name: string;
    slug: string
}

const apiClient = new APIClient<PlatForm>('/platforms/lists/parents')

const usePlatForms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24h,
    initialData: platforms
    
})

export default usePlatForms;

