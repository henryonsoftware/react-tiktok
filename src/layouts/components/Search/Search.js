import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import * as searchService from '~/services/searchService'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'
import AccountItem from '~/components/AccountItem'
import styles from './Search.module.scss'
import { ClearSearchValueIcon, SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/components/hooks'

const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  const debounceValue = useDebounce(searchValue, 700)

  const searchInputEl = useRef()

  const clearSearchValue = () => {
    setSearchValue('')
    searchInputEl.current.focus()
    setSearchResult([])
  }

  const handleShowResult = () => {
    setShowResult(false)
  }

  const handleChange = (e) => {
    const searchValue = e.target.value

    if (searchValue.startsWith(' ')) {
      return
    }
    setSearchValue(searchValue)
  }

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([])
      return
    }

    const fetchApi = async () => {
      setLoading(true)

      const result = await searchService.search(debounceValue)
      setSearchResult(result)

      setLoading(false)
    }

    fetchApi()
  }, [debounceValue])

  return (
    // Interactive tippy element may not be accessible via keyboard navigation because it is not directly after the reference element in the DOM source order.
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          {searchValue && !loading && (
            <button className={cx('clear')} onClick={clearSearchValue}>
              <ClearSearchValueIcon />
            </button>
          )}

          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
