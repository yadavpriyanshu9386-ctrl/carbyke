

function SectionHeading({ icon, title, subtitle }) {
  return (
    <div className="mb-5 flex gap-3 border-b border-line pb-4">
      <span className="text-red">{icon}</span>
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default SectionHeading;
