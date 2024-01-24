interface TableHeaderProps {
  title?: string,
}

const TableHeader = ({title}: TableHeaderProps) => {
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const weekdays = [];
  const monthDays = [];
  for (let i = 1; i<=lastDay.getDate(); i++) {
    const day = new Date(today.getFullYear(), today.getMonth(), i);
    const dayString = day.getDay() === 4 ? "R" : day.getDay() === 6 ? "Sa" : day.toLocaleDateString("en-US", {weekday: "narrow"});
    weekdays.push(<th key={i} className="px-2">{dayString}</th>);
    monthDays.push(<th key={i} className="px-2">{i}</th>);
  }

  return (
    <>
      <tr>
        <th rowSpan={2} className="text-nowrap px-2">
          {title ?? `My Daily Checklist - ${today.toLocaleDateString("en-US", {month: "long"})} ${today.getFullYear()}`}
        </th>
        {weekdays}
      </tr>
      <tr>
        {monthDays}
      </tr>
    </>
  );
};

export default TableHeader;
