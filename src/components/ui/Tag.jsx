const colorMap = {
    green: 'tag',
    blue: 'tag tag--blue',
    orange: 'tag tag--orange',
    purple: 'tag tag--purple'
}

export default function Tag({label, color="green"}) {
    return (
        <span className={colorMap[color]}>{label}</span>        
    )
}