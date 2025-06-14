import { useNavigate } from "react-router-dom";
import { useFavourites } from "@/hooks/use-favourite";
import { useWeatherQuery } from "@/hooks/use-weather";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Loader2, X } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface FavouriteCityTabletProps {
  id: string;
  name: string;
  lat: number;
  lon: number;
  onRemove: (id: string) => void
}

const FavouriteCities = () => {

  const { favourites, removeFavourite } = useFavourites();

  if (!favourites.length) {
    return null;
  }

  return (
    <>
      <h1 className="text-xl font-bold tracking-tight">Favourite Cities</h1>
      <ScrollArea className="w-full pb-4">
        <div className="flex flex-wrap gap-4">
          {favourites.map((city) => {
            return (
              <FavouriteCityTablet
                key={city.id}
                {...city}
                onRemove={() => removeFavourite.mutate(city.id)}
              />
            )
          })}
        </div>
      </ScrollArea>
    </>
  );
};

const FavouriteCityTablet = ({ id, name, lat, lon, onRemove }: FavouriteCityTabletProps) => {
  const navigate = useNavigate();
  const { data: weather, isLoading } = useWeatherQuery({ lat, lon });

  return (
    <div
      onClick={() => navigate(`/city/${name}?lat=${lat}&lon=${lon}`)}
      role="button"
      tabIndex={0}
      // className="relative flex min-w-full sm:min-w-[120px] cursor-pointer items-center gap-3 rounded-lg border bg-card p-4 pr-8 shadow-sm transition-colors hover:shadow-md"
      className="relative sm:basis-[calc(50%-1rem)] md:basis-[calc(33%-1rem)] lg:sm:basis-[calc(25%-1rem)] flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer  gap-3 rounded-lg border bg-card p-4 pr-8 shadow-sm transition-colors hover:shadow-md"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1 h-6 w-6 rounded-full p-0 hover:text-destructive-foeground group-hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
          toast.info(`Removed ${name} from Favourites`);
        }}
      >
        <X className="h-4 w-4" />
      </Button>
      {isLoading ? (
        <div className="flex h-8 items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      ) : weather ? (
        <>
          <div className="flex items-center gap-2">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
              className="w-8 h-8"
            />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-xs text=muted-foreground">
                {weather.sys.country}
              </p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xl font-bold">
              {Math.round(weather.main.temp)}°
            </p>
            <p className="text-xs capitalize text-muted-foreground">
              {weather.weather[0].description}
            </p>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default FavouriteCities;
