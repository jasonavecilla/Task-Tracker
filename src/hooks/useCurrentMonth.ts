// hook that returns information about the current month
export const useCurrentMonth = () => {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  // returns the shorthand weekday name for a given Date
  function getDayOfTheWeekShort(day: Date): string {
    return day.getDay() === 4
      ? "Th"
      : day.getDay() === 6
      ? "Sa"
      : day.toLocaleDateString("en-US", { weekday: "narrow" });
  }

  // returns the long weekday name for a given Date
  function getDayOfTheWeekLong(day: Date): string {
    return day.toLocaleDateString("en-US", { weekday: "long" });
  }

  // returns an object containing two arrays describing the days of the month
  // weekDays: ["M", "T", "W", "R", "F", ...]
  // monthDays: ["1", "2", "3", ...]
  function getMonthDays(
    month: number,
    year: number
  ): { weekDaysShort: string[]; weekDaysLong: string[]; monthDays: string[] } {
    const date = new Date(year, month, 1);
    const weekDaysShort: string[] = [];
    const weekDaysLong: string[] = [];
    const monthDays: string[] = [];
    while (date.getMonth() === month) {
      monthDays.push(date.getDate().toString());
      weekDaysShort.push(getDayOfTheWeekShort(date));
      weekDaysLong.push(getDayOfTheWeekLong(date));
      date.setDate(date.getDate() + 1);
    }
    return { weekDaysShort, weekDaysLong, monthDays };
  }

  const { weekDaysShort, weekDaysLong, monthDays } = getMonthDays(today.getMonth(), year);

  return {
    currentMonth: month,
    currentYear: year.toString(),
    monthDays,
    weekDaysShort,
    weekDaysLong
  };
};
