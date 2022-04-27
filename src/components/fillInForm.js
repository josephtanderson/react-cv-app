let inputType = (item) => {
    if ( item !== "phone" && item !== "email") {return "text"};
    if (item === "phone") {return "tel"};
    return item
}

export default function fillInForm(item, list, setMethod) {
    return <form onSubmit={(e) => { 
    e.preventDefault();
    setMethod({ ...list, [item]: e.target[0].value })
    }}>
    <input
    name={item}
    type={inputType(item)} 
    placeholder={item.split('').map((x, i) => i === 0 ? x.toUpperCase() : x).join('')}
    onChange={(e) => {
        e.preventDefault();
    }}
    onBlur={(e) => {e.target.parentElement.requestSubmit()}}
    />
    <button hidden/>
</form>
}

export function resetForm(item, list, setMethod) {
    setMethod({ ...list, [item]: '' })
}
