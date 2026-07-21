export function PricingTable({
  rows,
}: {
  rows: { type: string; size: string; price: string }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border-strong text-xs uppercase tracking-wide text-muted-foreground">
            <th className="py-3 pr-4 font-medium">Unit Type</th>
            <th className="py-3 pr-4 font-medium">Size</th>
            <th className="py-3 font-medium">Starting Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.type} className="border-b border-border">
              <td className="py-4 pr-4 font-medium text-foreground">{row.type}</td>
              <td className="py-4 pr-4 text-muted-foreground">{row.size}</td>
              <td className="py-4 tabular-nums text-foreground">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="pt-3 text-xs text-muted-foreground">
        Prices exclude registration, stamp duty, and applicable GST. Final pricing confirmed at
        booking.
      </p>
    </div>
  );
}
