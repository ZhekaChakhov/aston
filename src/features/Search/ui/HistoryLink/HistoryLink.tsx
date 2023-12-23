import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { historyApi } from "src/shared/api/historyApi";

interface History {
  name: string;
  id: string;
}

interface Props {
  item: History;
}

export const HistoryLink = (props: Props) => {
  const { item } = props;

  const [removeHistoryItem] = historyApi.useRemoveHistoryMutation();

  const onRemoveHistory = () => {
    removeHistoryItem({ id: item.id });
  };

  return (
    <li
      className="
      flex items-center justify-between
      mt-2 w-1/2 h-14
      border-2 border-[#12b488]
      "
    >
      <Link
        className="
        w-full h-full text-md lg:text-lg font-semibold uppercase
        flex items-center hover:bg-gray-200
        "
        to={`/search?name=${item.name}`}
      >
        <div className="ml-7">{item.name}</div>
      </Link>
      <button type="button" onClick={onRemoveHistory}>
        <Icon
          icon="ic:round-delete"
          width={50}
          height={50}
          className="hover:opacity-50"
        />
      </button>
    </li>
  );
};
