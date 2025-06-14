import type { WeatherData } from "@/api/types"
import { useFavourites } from "@/hooks/use-favourite"
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface FavouriteButtonProps {
  data: WeatherData
}

const FavouriteButton = ({ data }: FavouriteButtonProps) => {

  const { addToFavourite, isFavourite, removeFavourite } = useFavourites();
  const isCurrentylFavourite = isFavourite(data.coord.lat, data.coord.lon);

  const handleToggleFavourite = () => {
    if (isCurrentylFavourite) {
      removeFavourite.mutate(`${data.coord.lat}-${data.coord.lon}`);
      toast.error(`Removed ${data.name} from Favourites`);
    } else {
      addToFavourite.mutate({
        name: data.name,
        lat: data.coord.lat,
        lon: data.coord.lon,
        country: data.sys.country,
      });
      toast.success(`Added ${data.name} to Favourites`);
    }
  }

  return (
    <Button
      variant={isCurrentylFavourite ? "default" : "outline"}
      size={"icon"}
      onClick={handleToggleFavourite}
      className={`cursor-pointer ${isCurrentylFavourite ? "bg-yellow-500 hover:bg-yellow-600" : ""}`}
    >
      <Star className={`h-4 w-4 ${isCurrentylFavourite ? "fill-current" : ""}`} />
    </Button>
  )
}

export default FavouriteButton;
