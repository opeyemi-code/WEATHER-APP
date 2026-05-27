function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-(--neutral-800) p-4 rounded-xl space-y-2 text-[24px]">
      <h6 className="text-(--neutral-300) text-[18px]">{title}</h6>
      <p className="text-(--neutral-0)">{value}</p>
    </div>
  );
}

export default StatsCard;
