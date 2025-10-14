import TippyHeadless from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem/AccountItem.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<number[]>([]);
  const [showResult, setShowResult] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchValue("");
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
              <AccountItem />
              <AccountItem />
              <AccountItem />
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
          {!!searchValue && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
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
