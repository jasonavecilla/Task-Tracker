import { useCurrentMonth } from "../hooks/useCurrentMonth";

interface TableHeaderProps {
  title?: string;
}

const TableHeader = ({ title }: TableHeaderProps) => {
  const { monthDays, weekDays, currentMonth, currentYear } = useCurrentMonth();

  const weekDayRows = weekDays.map((day, i) => (
    <th key={i + day} className="px-2">
      {day}
    </th>
  ));

  const monthDayRows = monthDays.map((day) => (
    <th key={day} className="px-2">
      {day}
    </th>
  ));

  return (
    <>
      <tr>
        <th rowSpan={2} className="text-nowrap px-2">
          {title ?? `My Daily Checklist - ${currentMonth} ${currentYear}`}
        </th>
        {weekDayRows}
      </tr>
      <tr>{monthDayRows}</tr>
    </>
  );
};

export default TableHeader;
