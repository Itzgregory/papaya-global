'use client';
import Link from 'next/link';
import { SubmenuItem } from '@/features/landingPage/type/nav/nav';

interface SubmenuProps {
  items: SubmenuItem[] | { column1: SubmenuItem[]; column2: SubmenuItem[] } | undefined;
}

export default function Submenu({ items }: SubmenuProps) {
  const renderColumn = (columnItems: SubmenuItem[] | undefined) => {
    if (!Array.isArray(columnItems) || columnItems.length === 0) {
      console.warn('renderColumn: columnItems is not a valid array or is empty:', columnItems);
      return null;
    }

    return (
      <ul className="list-none p-0">
        {columnItems.map((item, index) => (
          <li
            key={index}
            className=" laptop:pb-0 laptop:mb-0 laptop:last:mb-0"
          >
            <Link
              href={item.href}
              className="block text-papaya-black text-base font-medium p-2 rounded hover:bg-[#ffe3e0]  hover:border hover:border-black hover:text-black-600 transition-all duration-300"
              target={item.target}
            >
              <span>{item.title}</span>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  if (!items) {
    console.warn('Submenu: items is undefined or null:', items);
    return null;
  }

  return (
    <div className="w-full">
      {Array.isArray(items) ? (
        renderColumn(items)
      ) : Array.isArray(items.column1) && Array.isArray(items.column2) ? (
        <div className="flex flex-col laptop:flex-row laptop:space-x-8">
          <div className="flex-1">{renderColumn(items.column1)}</div>
          <div className="flex-1">{renderColumn(items.column2)}</div>
        </div>
      ) : (
        <>
          {console.warn('Submenu: items.column1 or items.column2 is not a valid array:', items)}
          {null}
        </>
      )}
    </div>
  );
}