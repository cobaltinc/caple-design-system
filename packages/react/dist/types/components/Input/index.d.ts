declare const _default: {
    Text: (props: import("./Text").InputTextProps) => JSX.Element;
    Number: ({ group, ...props }: import("./Number").InputNumberProps) => JSX.Element;
    Password: ({ toggle, ...props }: import("./Password").InputPasswordProps) => JSX.Element;
    PhoneNumber: ({ regionCode, delimiter, ...props }: import("./PhoneNumber").InputPhoneNumberProps) => JSX.Element;
    Textarea: ({ value, placeholder, label, name, borderType, autoFocus, disabled, align, resizeType, rows, autoSize, loading, onInput, onFocus, onBlur, onKeyDown, onKeyUp, onKeyPress, onChange, onPressEnter, className, style, labelClassName, labelStyle, textareaClassName, textareaStyle }: import("./Textarea").TextareaProps) => JSX.Element;
};
export default _default;
