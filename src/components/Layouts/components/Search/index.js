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
  const [loading, setLoading] = useState(false)

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
    if (!searchValue.trim()) {
      setSearchResult([])
      return
    }

    setLoading(true)

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [searchValue])

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PropperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
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

          {searchValue && !loading && (
            <button className={cx('clear')} onClick={clearSearchValue}>
              <ClearSearchValueIcon />
            </button>
          )}

          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
