export default function Square({ value, onClick, winning }) {
    return (
        <button
            className={`aspect-square border-2 text-8xl ${
                winning ? "bg-green-500" : "bg-transparent/60"
            }`}
            onClick={onClick}
        >
            {value}
        </button>
    );
}
