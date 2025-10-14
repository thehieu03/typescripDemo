import TippyHeadless from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem/AccountItem.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useEffect, useRef, useState } from "react";
import type { SearchResponse } from "../../../Models/SearchResponse.tsx";

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResponse[]>([]);
  const [showResult, setShowResult] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((response) => response.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");
      setSearchResult([]);
    inputRef.current?.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div>
      <TippyHeadless
        interactive={true}
        visible={searchResult.length > 0 && showResult}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-tittle")}>Accounts</h4>
              {searchResult.map((res) => {
                return <AccountItem key={res.id} data={res} />;
              })}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
        placement="bottom"
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            placeholder="Search account and video..."
            spellCheck={false}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
              <button className={cx("clear")} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark}/>
              </button>
          )}
          {loading && (
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          )}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
};

export default Search;
