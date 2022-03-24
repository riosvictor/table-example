import { useState } from 'react';
import { IColumn, SortType } from '../../models';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

interface IProps {
  columns: IColumn[];
  handleSorting: (accessor: string, sortOrder: SortType) => void;
}

const TableHead = ({ columns, handleSorting }: IProps) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (accessor: string) => {
    const sortOrder: SortType =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const getPositionSort = (sortable: boolean, accessor: string) => {
    if (!sortable) {
      return <></>;
    }

    if (sortField && sortField === accessor && order === 'asc') {
      return <FaSortUp />;
    }

    if (sortField && sortField === accessor && order === 'desc') {
      return <FaSortDown />;
    }

    return <FaSort />;
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          return (
            <th
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : undefined
              }
            >
              {getPositionSort(sortable, accessor)}
              {' '}
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
