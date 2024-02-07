// hook that returns information about the current month
export const useCurrentMonth = () => {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  // returns the shorthand weekday name for a given Date
  function getDayOfTheWeek(day: Date): string {
    return day.getDay() === 4
      ? "Th"
      : day.getDay() === 6
      ? "Sa"
      : day.toLocaleDateString("en-US", { weekday: "narrow" });
  }

  // returns an object containing two arrays describing the days of the month
  // weekDays: ["M", "T", "W", "R", "F", ...]
  // monthDays: ["1", "2", "3", ...]
  function getMonthDays(
    month: number,
    year: number
  ): { weekDays: string[]; monthDays: string[] } {
    const date = new Date(year, month, 1);
    const weekDays: string[] = [];
    const monthDays: string[] = [];
    while (date.getMonth() === month) {
      monthDays.push(date.getDate().toString());
      weekDays.push(getDayOfTheWeek(date));
      date.setDate(date.getDate() + 1);
    }
    return { weekDays, monthDays };
  }

  const { weekDays, monthDays } = getMonthDays(today.getMonth(), year);

  return {
    currentMonth: month,
    currentYear: year.toString(),
    monthDays,
    weekDays,
  };
};
