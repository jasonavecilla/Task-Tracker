import { useCurrentMonth } from "../hooks/useCurrentMonth";

interface TableHeaderProps {
  title?: string;
  children?: JSX.Element[];
}

const TableHeader = ({ title, children }: TableHeaderProps) => {
  const { monthDays, weekDays, currentMonth, currentYear } = useCurrentMonth();

  const weekDayRows = weekDays.map((day, i) => (
    <th key={i + day} className="text-center border-2 min-w-9">
      {day}
    </th>
  ));

  const monthDayRows = monthDays.map((day) => (
    <th key={day} className="text-center border-2 font-normal">
      {day}
    </th>
  ));

  return (
    <>
      <tr className="bg-blue-400">
        <th rowSpan={2} className="text-nowrap px-1 border-2">
          {title ?? `My Daily Checklist - ${currentMonth} ${currentYear}`}
        </th>
        {weekDayRows}
      </tr>
      <tr className="bg-blue-400">{monthDayRows}</tr>
      {children}
    </>
  );
};

export default TableHeader;
