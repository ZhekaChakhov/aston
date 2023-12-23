import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { historyApi } from "src/shared/api/historyApi";
import { Loader } from "src/shared/ui/Loader/Loader";

import { HistoryLink } from "../HistoryLink/HistoryLink";

export const History = () => {
  const { data: history, isLoading, refetch } = historyApi.useGetHistoryQuery();
  const [isRefetched, setIsRefetched] = useState(false);

  useEffect(() => {
    if (history) {
      refetch();
    }
    const timer = setTimeout(() => {
      setIsRefetched(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isRefetched || isLoading) {
    return <Loader />;
  }

  return (
    <ul className="mt-8 px-7 flex justify-center items-center flex-col">
      {!history?.length ? (
        <div className="mt-10 text-md lg:text-xl text-center">
          <p>History is empty</p>
          <Link className="underline text-green-500" to="/">
            Back to main
          </Link>
        </div>
      ) : (
        history.map((item) => <HistoryLink key={item.id} item={item} />)
      )}
    </ul>
  );
};
