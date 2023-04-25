export default function Square({ value, onClick }) {
    return (
        <button className="aspect-square border-2 text-3xl" onClick={onClick}>
            {value}
        </button>
    );
}
