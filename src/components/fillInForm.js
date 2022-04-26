let inputType = (item) => {
    if ( item !== "phone" && item !== "email") {return "text"};
    if (item == "phone") {return "tel"};
    return item
}


export default function fillInForm(item, list, setMethod) {
    return <form onSubmit={(e) => { 
    e.preventDefault();
    let items = Object.keys(list);
    let temp = {};
    items.map(x => {
        temp[x] = list[x];
    });
temp[item] = e.target[0].value;
    setMethod(temp)
}}>
    <input
    name={item}
    type={inputType(item)} 
    placeholder={item.split('').map((x, i) => i == 0 ? x.toUpperCase() : x).join('')}
    onChange={(e) => {
        e.preventDefault();
    }}
    onBlur={(e) => {e.target.parentElement.requestSubmit()}}
    />
    <button hidden/>
</form>
}

export function resetForm(item, list, setMethod) {
    let items = Object.keys(list);
    let temp = {};
    items.map(x => {
        temp[x] = list[x];
    });
temp[item] = '';
    setMethod(temp)
}
