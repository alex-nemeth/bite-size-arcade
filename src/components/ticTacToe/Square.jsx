export default function Square({ value, onClick, winning }) {
    return (
        <button
            className={`aspect-square border-2 text-3xl ${
                winning && "bg-green-400"
            }`}
            onClick={onClick}
        >
            {value}
        </button>
    );
}
