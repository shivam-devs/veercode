import { BsCheckLg, BsChevronDown } from "react-icons/bs";
import { ISettings } from "../Workspace/Playground/Playground";
import useLocalStorage from "@/hooks/useLocalStorage";

const EDITOR_LANG = ["C++", "Java", "Python", "Javascript"];

interface LanguageModalProps {
  settings: ISettings;
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
}

const LanguageModal: React.FC<LanguageModalProps> = ({
    settings,
    setSettings,
}) => {
  const [language, setLanguage] = useLocalStorage("vc-lang", "Javascript");

  const handleClickDropdown = (
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setSettings({
      ...settings,
      dropdownLangIsOpen: !settings.dropdownLangIsOpen
    });
  };
  const handleLangChange = (lang:string) =>{
    setLanguage(lang);
    setSettings({
        ...settings,
        dropdownLangIsOpen: !settings.dropdownLangIsOpen,lang
      });
}
  return (
    <div className="text-white z-40">
      <div className="w-[170px]">
        <div className="relative">
          <button
            onClick={handleClickDropdown}
            className="flex cursor-pointer h-auto items-center rounded px-2 py-1.5 text-left focus:outline-none whitespace-nowrap bg bg-dark-fill-3 hover:bg-dark-fill-2 active:bg-dark-fill-3 w-auto gap-2 justify-between"
            type="button"
          >
            {language}
            <span className="pt-1"><BsChevronDown /></span>
          </button>
          {/* Show dropdown for fontsizes */}
          {settings.dropdownLangIsOpen && (
            <ul
              className="absolute mt-1 max-h-56 overflow-auto rounded-lg p-2 z-50 focus:outline-none shadow-lg   w-full bg-dark-layer-1"
              style={{
                filter:
                  "drop-shadow(rgba(0, 0, 0, 0.04) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 16px)",
              }}
            >
              {EDITOR_LANG.map((lang, idx) => (
                <SettingsLangItem
                  key={idx}
                  lang={lang}
                  selectedOption={language}
                  handleLangChange ={handleLangChange}
                    />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default LanguageModal;

interface SettingsLangItemProps {
  lang: string;
  selectedOption: string;
  handleLangChange:(lang:string)=>void
}

const SettingsLangItem: React.FC<SettingsLangItemProps> = ({
  lang,
  selectedOption,
  handleLangChange
}) => {
  return (
    <li className="relative flex h-8 cursor-pointer select-none py-1.5 pl-2 text-label-2 dark:text-dark-label-2 hover:bg-dark-fill-3 rounded-lg">
        <span
        className={`text-blue dark:text-dark-blue flex items-center pr-2 ${
          selectedOption === lang ? "visible" : "invisible"
        }`}
      >
        <BsCheckLg />
      </span>
      <div
        className={`flex h-5 flex-1 items-center pr-2 ${
          selectedOption === lang ? "font-medium" : ""
        }`}
        onClick={() => handleLangChange(lang)}
      >
        <div className="whitespace-nowrap">{lang}</div>
      </div>
    </li>
  );
};
