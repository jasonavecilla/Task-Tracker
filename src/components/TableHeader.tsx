import "./table.css";
import { useCurrentMonth } from "../hooks/useCurrentMonth";

interface TableHeaderProps {
  title?: string;
}

const TableHeader = ({ title }: TableHeaderProps) => {
  const { monthDays, weekDaysShort, currentMonth, currentYear } = useCurrentMonth();

  const weekDayRows = weekDaysShort.map((day, i) => (
    <>
      <th key={i} className="px-2">
        {day}
      </th>
      {day === "S" &&
        <th rowSpan={2} className="px-2 bg-sky-300">
          Wk
          <br />
          {Math.ceil(i / 7)}
        </th>
      }
    </>
  ));

  const monthDayRows = monthDays.map((day) => (
    <th key={day} className="px-2">
      {day}
    </th>
  ));

  return (
    title?
    (<>
        <th rowSpan={2} className="text-nowrap">
          {title}
        </th>
        <tr>{weekDayRows}</tr>
        <tr><td></td>{monthDayRows}</tr>
    </>):
    (<>
        <th className="text-nowrap">
          {`My Daily Checklist - ${currentMonth} ${currentYear}`}
        </th>
    </>)
  );
};

export default TableHeader;
