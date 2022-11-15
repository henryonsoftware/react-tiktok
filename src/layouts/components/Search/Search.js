import { useEffect, useState, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import * as searchService from '~/services/searchService'
import { Wrapper as PropperWrapper } from '~/layouts/components/Propper'
import AccountItem from '~/components/AccountItem'
import { ClearSearchValueIcon, SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/components/hooks'

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)
  const [cursor, setCursor] = useState(-1)
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

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && cursor >= 0) {
      // press Arrow Up on keyboard
      setCursor((prev) => prev - 1)
    } else if (e.keyCode === 40 && cursor < searchResult.length - 1) {
      // press Arrow Down on keyboard
      setCursor((prev) => prev + 1)
    } else if (e.keyCode === 13 && cursor >= 0 && cursor <= searchResult.length - 1) {
      // press Enter on keyboard
      window.location.href = `/@${searchResult[cursor].nickname}`
    }
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
    <div className="hidden md:block md:w-72 lg:w-80">
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div style={{ width: '361px' }} tabIndex="-1" {...attrs}>
            <PropperWrapper>
              <h4 className="h-8 py-1 px-3 text-sm font-semibold text-black/50">Accounts</h4>
              {searchResult.map((account, index) => (
                <AccountItem
                  key={account.id}
                  data={account}
                  className={`flex items-center py-2 px-4 cursor-pointer hover:bg-black/5 ${
                    cursor === index ? 'bg-black/5' : ''
                  }`}
                />
              ))}
            </PropperWrapper>
          </div>
        )}
        onClickOutside={handleShowResult}
      >
        <div className="relative  h-12 bg-black/5 rounded-full pl-4 flex border border-solid border-transparent focus-within:border-black/20 after:content-[''] after:absolute after:top-2.5 after:right-14 after:h-6 after:w-px after:bg-black/10">
          <input
            className="peer font-primary caret-primary h-full text-black/80 text-base bg-transparent flex-1 pr-10"
            value={searchValue}
            placeholder="Search..."
            spellCheck={false}
            ref={searchInputEl}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          {searchValue && !loading && (
            <button
              className="absolute top-1/2 -mt-2 text-black/50 text-sm bg-transparent cursor-pointer"
              style={{ right: '67px' }}
              onClick={clearSearchValue}
            >
              <ClearSearchValueIcon />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon
              className="absolute top-1/2 -mt-2 text-black/50 text-sm bg-transparent cursor-pointer animate-spin w-4 h-4"
              style={{ right: '67px' }}
              icon={faSpinner}
            />
          )}

          <button
            className="text-black/60 peer-placeholder-shown:text-black/30 flex items-center justify-center w-14 h-full bg-transparent hover:bg-black/5 hover:cursor-pointer text-xl"
            style={{ borderTopRightRadius: '92px', borderBottomRightRadius: '92px' }}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
