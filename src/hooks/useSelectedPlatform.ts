import usePlatForms from "./usePlatForms";

const useSelectedPlatForm = (selectedParentPlatformId?: number) => {
    const {data} =  usePlatForms();
    return data?.results.find((platform) => platform.id === selectedParentPlatformId);
}

export default useSelectedPlatForm