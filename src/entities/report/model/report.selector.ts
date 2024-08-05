import useStore from "./store";

export const useUserActions = () => {
  const setData = useStore((state) => state.setData);
  const setLoading = useStore((state) => state.setLoading);
  const setError = useStore((state) => state.setError);

  return { setData, setLoading, setError };
};
