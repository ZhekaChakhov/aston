import { Link } from "react-router-dom";
import { Button } from "src/shared/ui/Button/Button";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div>404 Not Found</div>
      <Link to="/">
        <Button className="border-green-400 bg-green-50" text="Return Home" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
