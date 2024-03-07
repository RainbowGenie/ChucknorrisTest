import { useDispatch } from "react-redux";
import axios from "axios";

import { setChuckData, setError, setIsLoading } from "../redux/main/reference";
import { API_URL } from "../constants";

const useFetchJokes = () => {
  const dispatch = useDispatch();

  const fetchJokesData = async (searchValue) => {
    dispatch(setIsLoading(true));
    axios
      .get(API_URL + `/search?query=${searchValue}`)
      .then(function (response) {
        // handle success
        dispatch(setChuckData(response.data));
      })
      .catch(function (error) {
        dispatch(setError(error));
      })
      .finally(function () {
        dispatch(setIsLoading(false));
      });
  };
  return { fetchJokesData };
};

export default useFetchJokes;
