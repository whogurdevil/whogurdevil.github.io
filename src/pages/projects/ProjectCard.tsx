import { Typography } from '@material-tailwind/react';
import Atropos from 'atropos/react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

type CardData = {
  name: string,
  description: string,
  url: string,
  github: string,
  bgimage: string,
}

export default function ProjectCard({ data }: { data: CardData }) {
  return (
    <div className="max-w-sm bg-primary border border-gray-200 rounded-lg shadow  hover:bg-opacity-90" onClick={() => { window.open(data.url, "_blank") }}>
      <a href="#">
        <img className="rounded-t-lg" src={data.bgimage} alt="" />
      </a>
      <div className="p-5 ">
        <div className='min-h-[calc(31vh)]'>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-brown-50">{data.name}</h5>
          </a>
          <p className="mb-3 font-normal text-brown-200">{data.description}</p>
        </div>
        <div className="flex items-center justify-between flex-grow-1">
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-brown-50 rounded-lg hover:bg-brown-100 focus:ring-4 focus:outline-none focus:ring-secondary">
            View on GitHub
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <ArrowTopRightOnSquareIcon className='w-9 ml-2 text-brown-50' />
        </div>
      </div>
    </div>
  );
}