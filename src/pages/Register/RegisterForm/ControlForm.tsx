import { FC } from "react";
import { ControlFormStyled } from "../../../components/styles/Form.styles";
import ControlFormItem from "./ControlFormItem";
import ControlFormArrow from "./ControlFormArrow";
import { handleSections, sections } from "../../../types";


interface props {
    section: sections,
    handles:handleSections
}

const ControlForm: FC<props> = ({ section,handles}) => {
    return (
        <ControlFormStyled>
            <ControlFormArrow onClick={handles.prev} active={section !== sections.first} left/>

            <ControlFormItem active={section === sections.first} />
            <ControlFormItem active={section === sections.second} />
            <ControlFormItem active={section === sections.third} />

            <ControlFormArrow onClick={handles.next} active={section !== sections.third} />
        </ControlFormStyled>
    );
};

export default ControlForm;