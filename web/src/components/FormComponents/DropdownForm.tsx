import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export interface Action {
  label: string;
  onClick: (currentSelected: any) => void;
  keyValidadeOptionDisable?: string;
}

type Props = {
  menuItens: Action[];
  nameButton: string;
};

const DropdownForm = ({ menuItens, nameButton }: Props) => {
  return (
    <Menu as="div" className="relative inline-block w-[136px]">
      <Menu.Button className="relative cursor-pointer w-full list-item hover:text-teal-400 transition-all rounded border-[1px] border-teal-900 py-1 pl-4 pr-2 ease-in-out">
        <div className="flex flex-row items-center justify-between gap-2 w-full">
          {nameButton}
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </Menu.Button>
      <div className="relative">
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full bg-stone-900 shadow-xl z-20 rounded border-[1px] border-teal-900">
          {menuItens.map((menuItem, index) => (
            <Menu.Item
              as="span"
              key={index}
              onClick={menuItem.onClick}
              className={`flex justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white
                  cursor-pointer hover:text-teal-400 border-b last:border-b-0
              `}
            >
              {menuItem.label}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DropdownForm;
