import { ICategory } from "./Interfaces";

interface RowHeaderProps {
  categories?: ICategory [];
}

const RowHeader = ({ categories }: RowHeaderProps) => {
  console.log(categories);
  return (
    <>
      <tr>
        <th rowSpan={2} className="text-nowrap px-2">
        </th>
      </tr>
    </>
  );
};

export default RowHeader;
