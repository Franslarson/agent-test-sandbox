interface HistoryProps {
  history: number[];
}

export function History({ history }: HistoryProps) {
  return (
    <div className="history">
      <h3>History (last 5 values)</h3>
      {history.length === 0 ? (
        <p>No history yet</p>
      ) : (
        <ul>
          {history.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
