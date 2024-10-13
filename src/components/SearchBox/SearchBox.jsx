export default function SearchBox({ value, onChange }) {
  return (
    <label className="search">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </label>
  );
}
