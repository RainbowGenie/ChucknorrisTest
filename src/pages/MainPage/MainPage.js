import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import cn from "classnames";

import s from "./MainPage.module.css";
import { useState } from "react";
import { useAppState } from "../../redux/useAppState";
import { useFetchJokes } from "hooks";
import Loading from "components/Loading";
import { setChuckData, setError } from "../../redux/main/reference";
import { formatDate } from "helper";

function MainPage() {
  const { chuckData, isLoading } = useAppState();
  const [searchValue, setSearchValue] = useState("");
  const { fetchJokesData } = useFetchJokes();

  const dispatch = useDispatch();

  const onChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.length > 2) {
      fetchJokesData(value);
    } else {
      dispatch(setChuckData({ total: 0, result: [] }));
      dispatch(setError({}));
    }
  };

  function decodeEntities(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div className="relative min-h-[100vh] p-[20px] lg:p-[40px]">
      <div className={s.root}>
        <TextField
          id="joke-search"
          label="Search jokes..."
          type="search"
          variant="filled"
          onChange={onChange}
          value={searchValue}
          className={s.searchField}
          // autoFocus
          inputRef={(input) => {
            input && (!isLoading ? input.focus() : input.blur());
          }}
          // disabled={isLoading}
        />
        <div className={s.jokeCount}>Found jokes: {chuckData.total}</div>
        <div className={s.contentWrapper}>
          {chuckData.result.map((joke, index) => (
            <div
              className={cn(
                s.joke,
                index === 0 || index === 1
                  ? "w-full md:w-[48%] h-[560px] sm:h-[360px]"
                  : "w-full md:w-[48%] 2xl:w-[31%] h-[560px] sm:h-[360px] 2xl:h-[400px]"
              )}
              key={joke.id}
            >
              <p
                className={cn(
                  s.content,
                  index === 0 || index === 1
                    ? "h-[400px] sm:h-[220px]"
                    : "h-[400px] sm:h-[250px]"
                )}
              >
                {decodeEntities(joke.value)}
              </p>
              <div className={s.bottomWrapper}>
                <div className={s.bottomContent}>{joke.id}</div>
                <div className={s.bottomContent}>
                  {formatDate(joke.created_at)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loading />
    </div>
  );
}

export default MainPage;
