import { validateValue } from '../../helpers';
import { IColumn, ITableData } from '../../models';

interface IProps {
  tableData: ITableData[];
  columns: IColumn[];
}

const TableBody = ({ tableData, columns }: IProps) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = validateValue(accessor, data);

              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
