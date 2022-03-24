import type { NextPage } from 'next';
import Table from '../components/Table';

const Home: NextPage = () => {
  return (
    <div className="table_container">
      <h1>Sortable table with React</h1>
      <Table />
    </div>
  );
};

export default Home;
