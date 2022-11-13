import { useSearchParams } from 'react-router-dom'
import images from '~/assets/images'

function Footer() {
  let [searchParams, setSearchParams] = useSearchParams()

  const lang = searchParams.get('lang')

  function handleChangeLanguage(e) {
    e.preventDefault()
    searchParams.set('lang', e.target.value)
    setSearchParams(searchParams)
  }

  return (
    <div className="pb-8 bg-black">
      <footer className="pt-10 pl-10 md:pl-72 lg:pl-96 relative flex flex-col md:flex-row md:items-start">
        <div className="flex items-end mb-10 md:mb-0 md:absolute md:top-11 md:left-20 lg:left-40">
          <img src={images.whiteLogoIcon} className="mr-2" alt="Tiktok" />
          <img src={images.whiteLogoText} alt="Tiktok" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col mb-6 md:mb-0 md:w-44 flex-1" style={{ maxWidth: '226px' }}>
            <h4 className="font-semibold text-sm text-white mb-3">Company</h4>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">About</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Newsroom</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Contact</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Careers</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">ByteDance</a>
            </span>
          </div>
          <div className="flex flex-col mb-6 md:mb-0 md:w-44 flex-1" style={{ maxWidth: '226px' }}>
            <h4 className="font-semibold text-sm text-white mb-3">Programs</h4>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Tiktok for Good</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Advertise</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Developers</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Tiktok Rewards</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Tiktok Browse</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Tiktok Embeds</a>
            </span>
          </div>
          <div className="flex flex-col mb-6 md:mb-0 md:w-44 flex-1" style={{ maxWidth: '226px' }}>
            <h4 className="font-semibold text-sm text-white mb-3">Support</h4>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Help Center</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Safety Center</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Creator Portal</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Community Guidelines</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Transparency</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Accessibility</a>
            </span>
          </div>
          <div className="flex flex-col mb-6 md:mb-0 md:w-44 flex-1" style={{ maxWidth: '226px' }}>
            <h4 className="font-semibold text-sm text-white mb-3">Legal</h4>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Terms of Use</a>
            </span>
            <span className="text-sm text-gray-300 mb-3">
              <a href="#">Privacy Policy</a>
            </span>
          </div>
        </div>
      </footer>
      <div className="mt-14 flex items-end justify-around">
        <select
          className="border border-gray-400 bg-inherit text-white h-8 md:h-10 outline-none rounded-sm"
          style={{ paddingInline: '5px' }}
          value={lang ?? 'en'}
          onChange={(e) => handleChangeLanguage(e)}
        >
          <option value="ar">العربية</option>
          <option value="bn-IN">বাঙ্গালি (ভারত)</option>
          <option value="ceb-PH">Cebuano (Pilipinas)</option>
          <option value="cs-CZ">Čeština (Česká republika)</option>
          <option value="de-DE">Deutsch</option>
          <option value="el-GR">Ελληνικά (Ελλάδα)</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fi-FI">Suomi (Suomi)</option>
          <option value="fil-PH">Filipino (Pilipinas)</option>
          <option value="fr">Français</option>
          <option value="he-IL">עברית (ישראל)</option>
          <option value="hi-IN">हिंदी</option>
          <option value="hu-HU">Magyar (Magyarország)</option>
          <option value="id-ID">Bahasa Indonesia (Indonesia)</option>
          <option value="it-IT">Italiano (Italia)</option>
          <option value="ja-JP">日本語（日本）</option>
          <option value="jv-ID">Basa Jawa (Indonesia)</option>
          <option value="km-KH">ខ្មែរ (កម្ពុជា)</option>
          <option value="ko-KR">한국어 (대한민국)</option>
          <option value="ms-MY">Bahasa Melayu (Malaysia)</option>
          <option value="my-MM">မြန်မာ (မြန်မာ)</option>
          <option value="nl-NL">Nederlands (Nederland)</option>
          <option value="pl-PL">Polski (Polska)</option>
          <option value="pt-BR">Português (Brasil)</option>
          <option value="ro-RO">Română (Romania)</option>
          <option value="ru-RU">Русский (Россия)</option>
          <option value="sv-SE">Svenska (Sverige)</option>
          <option value="th-TH">ไทย (ไทย)</option>
          <option value="tr-TR">Türkçe (Türkiye)</option>
          <option value="uk-UA">Українська (Україна)</option>
          <option value="ur">اردو</option>
          <option value="vi-VN">Tiếng Việt (Việt Nam)</option>
          <option value="zh-Hans">简体中文</option>
          <option value="zh-Hant-TW">繁體中文</option>
        </select>
        <div className="text-gray-400">© 2022 TikTok</div>
      </div>
    </div>
  )
}

export default Footer
