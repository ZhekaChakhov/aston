import { Dispatch, SetStateAction } from "react";
import { Icon } from "@iconify-icon/react";

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = (props: Props) => {
  const { page, setPage } = props;

  return (
    <div className="w-11/12 mx-auto flex items-center justify-between">
      <div className="flex items-center justify-start">
        <p className="text-md md:text-lg lg:text-2xl">Страница {page} из 42</p>
      </div>
      <div className="flex justify-end">
        <button
          className={page === 1 ? "text-gray-800 mr-4" : "text-blue-600 mr-4"}
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <Icon icon="iconamoon:arrow-left-2-duotone" width={50} />
        </button>
        <button
          className={page === 42 ? "text-gray-800" : "text-blue-600"}
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page === 42}
        >
          <Icon icon="iconamoon:arrow-right-2-duotone" width={50} />
        </button>
      </div>
    </div>
  );
};
