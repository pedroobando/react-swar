import { useEffect, useState } from 'react';
import { TablePeople } from './components/TablePeople';
import { IPeoplesColl } from './interface';

const baseUrl = 'https://swapi.dev/api/';

const initVale: IPeoplesColl = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

interface iPageState {
  active: number;
  totPage: number;
}

export const PeoplePage = () => {
  const [peoples, setPeoples] = useState<IPeoplesColl>(initVale);
  const [pageState, setPageState] = useState<number>(1);
  const [totPageState, setTotPageState] = useState<number>(10);

  useEffect(() => {
    const readData = async () => {
      await fetch(`${baseUrl}people/?page=${pageState}`)
        .then((response) => response.json())
        .then((data) => {
          setPeoples(data);
          let pageCount: number = data.count / 10;
          pageCount =
            pageCount - Math.trunc(pageCount) > 0
              ? Math.trunc(pageCount) + 1
              : Math.trunc(pageCount);
          setTotPageState(pageCount);
        });
    };

    readData();
    return () => {};
  }, [pageState]);

  if (peoples.count <= 0) return <div>loading...</div>;

  const handleChangePage = (pageNew: number): void => {
    if (pageNew >= 1 && pageNew <= totPageState) setPageState(pageNew);
  };

  return (
    <>
      <h1>Personas</h1>

      <TablePeople
        count={peoples.count}
        next={peoples.next}
        previous={peoples.previous}
        results={peoples.results}
        onChangePage={handleChangePage}
        activePage={pageState}
        totalPage={totPageState}
      />
      {/* 
      {peoples.results.map((people) => {
        return <div key={people.name}>{people.name}</div>;
      })} */}
    </>
  );
};
