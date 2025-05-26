import { ArrowBigLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() => navigate("/")}
      className="cursor-pointer mr-2"
    >
      <ArrowBigLeft className="h-4 w-4" />
    </Button>
  )
}

export default BackButton;
