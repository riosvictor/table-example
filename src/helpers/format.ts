import { ITableData } from '../models';

/**
   * Format date by navigator language.
   *
   * @param {string} value The date on format yyyy-mm-dd.
   * @return {string} The date formatted.
   */
export const formatDate = (value: string): string => {
  // const lang = navigator?.language
  const lang = 'pt-BR';

  return new Intl.DateTimeFormat(lang).format(new Date(value));
};

export const validateValue = (accessor: string, object: ITableData): any => {
  if (accessor in object) {
    let value = (object as any)[accessor];

    if (accessor === 'start_date') {
      value = formatDate(value);
    }

    return value;
  }

  return '——';
};
