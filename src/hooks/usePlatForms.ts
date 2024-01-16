import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponce } from "../services/apiClient";
import platforms from "../data/Platforms";

interface PlatForm {
    id: number;
    name: string;
    slug: string
}


const usePlatForms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponce<PlatForm>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 1000*60*60*24, // 24h,
    initialData: {count: platforms.length, results: platforms}
    
})

export default usePlatForms;

