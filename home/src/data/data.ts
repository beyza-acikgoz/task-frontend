import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
    id: number;
	title: string;
	model: string;
	year: string;
    section: string;
}

export const columns: TableColumn<DataRow>[] = [
	{
		name: 'Title',
		selector: row => row.title,
	},
	{
		name: 'Year',
		selector: row => row.year,
	},
    {
		name: 'Model',
		selector: row => row.model,
	},
	{
		name: 'Section',
		selector: row => row.section,
	}
];

export const data: DataRow[] = [
  	{
		id: 1,
		title: 'home',
		year: '1988',
        model: 'Volkswagen Beetle',
        section: 'Cars',
	},
	{
		id: 2,
		title: 'home',
		year: '1984',
        model: 'Cadillac Ecto-1',
        section: 'Cars',
	},
    {
        id: 3,
        title: 'home',
        year: '1999',
        model: 'Nissan 350Z',
        section: 'Cars',
    },
    {
        id: 4,
        title: 'home',
        year: '2010',
        model: 'Lamborghini Murciélago',
        section: 'Cars',
    },
    {
        id: 5,
        title: 'home',
        year: '2014',
        model: 'Lexus RC F',
        section: 'Cars',
    },
    {
        id: 6,
        title: 'home',
        year: '2008',
        model: 'Tumbler',
        section: 'Cars',
    },
    {
        id: 7,
        title: 'home',
        year: '2015',
        model: 'War Rig',
        section: 'Cars',
    },
    {
        id: 8,
        title: 'home',
        year: '1993',
        model: 'Ford Explorer',
        section: 'Cars',
    },
    {
        id: 9,
        title: 'home',
        year: '2007',
        model: 'Chevrolet Camaro',
        section: 'Cars',
    },
    {
        id: 10,
        title: 'home',
        year: '2001',
        model: 'Mazda RX-7',
        section: 'Cars',
    },
];

