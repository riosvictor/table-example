import { useState } from 'react';
import { IColumn, SortType } from '../../models';
import mockdata from '../../server/data.json';
import styles from '../../styles/Table.module.css';
import TableBody from '../TableBody';
import TableHead from '../TableHead';

const Table = () => {
  const [tableData, setTableData] = useState(mockdata);

  const columns: IColumn[] = [
    { label: 'Full Name', accessor: 'full_name', sortable: true },
    { label: 'Email', accessor: 'email', sortable: false },
    { label: 'Gender', accessor: 'gender', sortable: true },
    { label: 'Age', accessor: 'age', sortable: true },
    { label: 'Start date', accessor: 'start_date', sortable: true }
  ];

  const handleSorting = (sortField: string, sortOrder: SortType) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        const valueA = (a as any);
        const valueB = (b as any);
        const lang = navigator.language;

        if (valueA === null) return 1;
        if (valueB === null) return -1;
        if (valueA === null && valueB === null) return 0;

        return (
          String(valueA[sortField]).localeCompare(
            String(valueB[sortField]),
            lang,
            {
              numeric: true
            }
          ) * (sortOrder === 'asc' ? 1 : -1)
        );
      });

      setTableData(sorted);
    }
  };

  return (
    <>
      <table className={styles.table}>
        <caption>
          Column headers are sortable.
        </caption>
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;
