import { useSelector } from "react-redux";

export const useAppState = () => {
  const {
    reference: { isLoading, chuckData, error },
  } = useSelector((state) => state.main);

  return {
    isLoading,
    chuckData,
    error,
  };
};
