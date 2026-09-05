import { useLocalStorage } from "./useLocalStorage";

/**
 * Wraps useLocalStorage with the specific logic for saving/un-saving
 * a mission, so components don't need to know it's backed by
 * localStorage at all — they just call toggleSaved(id).
 */
export function useSavedMissions() {
    const [savedIds, setSavedIds] = useLocalStorage("orbitlog_saved_missions", []);

    function toggleSaved(missionId) {
        setSavedIds((current) =>
            current.includes(missionId)
                ? current.filter((id) => id !== missionId)
                : [...current, missionId]
        );
    }

    function isSaved(missionId) {
        return savedIds.includes(missionId);
    }

    return { savedIds, toggleSaved, isSaved };
}
