import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PropperWrapper } from '~/components/Layouts/components/Propper'
import AccountItem from '~/components/AccountItem'
import styles from './Search.module.scss'
import { ClearSearchValueIcon, SearchIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)

  const searchInputEl = useRef()

  const clearSearchValue = () => {
    setSearchValue('')
    searchInputEl.current.focus()
    setSearchResult([])
  }

  const handleShowResult = () => {
    setShowResult(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3, 4])
    }, 0)
  }, [])

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PropperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </PropperWrapper>
          </div>
        )}
        onClickOutside={handleShowResult}
      >
        <div className={cx('search')}>
          <input
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            ref={searchInputEl}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />

          {searchValue && (
            <button className={cx('clear')} onClick={clearSearchValue}>
              <ClearSearchValueIcon />
            </button>
          )}

          {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

          <button className={cx('search-btn')}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
