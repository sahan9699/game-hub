import { useQuery } from "@tanstack/react-query";
import platforms from "../data/Platforms";
import APIClient from "../services/apiClient";
import ms from "ms";
import { PlatForm } from "../entities/PlatForm";

const apiClient = new APIClient<PlatForm>('/platforms/lists/parents')

const usePlatForms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('1d'),
    initialData: platforms
    
})

export default usePlatForms;

