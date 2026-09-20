import { useLang, useUpdateUserLang } from "@/context/Language";
import Setting from "./Setting";
import { Select } from "../selects";
import { useRef } from "react";
import { getFinalHeight } from "./settings";
import { getInbox, setLanguage } from "@/scripts/requests";
import { useInbox } from "@/context/User";
import { sortInbox } from "../inbox/mail";

export default function LanguageSetting({ className = "", children, ...props }) {
    const setting = {
        title: "language",
        icon: "language",
        type: "expand",

    }
    const [lang, setLang] = useLang();
    const updateUserLang = useUpdateUserLang()
    const [inbox, setInbox] = useInbox();

    async function updateLang(e) {
        const data = await setLanguage(e.target.value);
        // update inbox to reflect the new language
        const newInbox = await getInbox(e.target.value);
        setInbox(sortInbox(newInbox));

        window.localStorage.setItem("lang", data.language)
        updateUserLang(data.language);
        setLang(data.language);
    }
    const expandRef = useRef();
    return (
        <Setting setting={setting} expandHeight={() => getFinalHeight(expandRef.current)} className={`${className}`} {...props}>
            <div ref={expandRef} className="sm:ms-[1.8rem] sm:w-[10rem] ">
                <Select value={lang} onChange={updateLang}>
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                </Select>

            </div>
            {children}
        </Setting>
    );
}