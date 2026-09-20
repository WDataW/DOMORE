import { OverlayPage } from "@/Pages";
import { Main, YesNoButtons } from "..";
import TagInit from "./TagInit";
import { useState } from "react";
import { isBuiltInTitle, useEditTag } from "./tasks";
import { useTranslation } from "@/context/Language";
import { createTag, patchTag } from "@/scripts/requests";
export default function EditTag({ yesFunc, setActiveTags, activeTags, close, tagToEdit = { title: "", icon: "" }, yes, no, className = "", children, ...props }) {
    const editTag = useEditTag();
    const [newTag, setNewTag] = useState();
    const t = useTranslation();
    async function save() {
        let response
        if (!tagToEdit?.id) response = await createTag(newTag); // indicates we're creating a tag not editing one
        else response = await patchTag(newTag);
        editTag(response.data);
        if (activeTags && activeTags.length == 0) setActiveTags(newTag.builtIn ? [t(`terms.${isBuiltInTitle(newTag.title, t)}`)] : [newTag.id]);
        if (yesFunc) yesFunc(response.data);
        close();
    }

    return (
        <OverlayPage close={close} className={`${className}`} {...props}>
            <Main className="flex items-center flex-col ">
                <div className="max-w-full  sm:max-w-[22rem]  ">
                    <TagInit setNewTag={setNewTag} tagToEdit={tagToEdit}></TagInit>
                    <YesNoButtons disabled={!newTag?.title || !newTag?.unique} className="justify-center flex mt-[1rem] text-[0.9rem]" yesFunc={save} yes={yes} noFunc={close} no={no} />
                </div>
            </Main>
        </OverlayPage>
    );
}