class TableData {
  id: number;
  name: string;
  path: string;
}
const TablesList: any = {
  COURSE: new TableData(),
};

const numHash = (t: string) =>
  [...t].map((v, i) => (i + 1) * v.charCodeAt(0)).reduce((a, b) => a + b);

const genTablesName: any = ({ p, s }) => {
  Object.keys(TablesList).forEach((v) => {
    TablesList[v].id = numHash(v);
    TablesList[v].name = p + v.toLowerCase() + s;
  });
  const ids = Object.values(TablesList).map((v: any) => v.id);
  if (ids.length !== new Set(ids).size) {
    throw new Error('Non Unique Id');
  }
  return TablesList;
};

export const TABLES = genTablesName({ p: '', s: '' });
