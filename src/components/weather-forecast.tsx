import type { ForecastData } from "@/api/types";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";
import Slider from "react-slick";

interface WeatherForecastProps {
  data: ForecastData
}

interface DailyForecast {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  cssEase: string;
}

const WeatherForecast = ({ data }: WeatherForecastProps) => {

  const dailyForecasts = data.list.reduce((acc, forecast) => {

    const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");

    if (!acc[date]) {
      acc[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        wind: forecast.wind.speed,
        weather: {
          id: forecast.weather[0].id,
          main: forecast.weather[0].main,
          description: forecast.weather[0].description,
          icon: forecast.weather[0].icon
        },
        date: forecast.dt,

      }
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, forecast.main.temp_max);
    }

    return acc;

  }, {} as Record<string, DailyForecast>);

  const nextDays = Object.values(dailyForecasts).slice(0, 6);

  console.log(nextDays)

  const formatTemp = (temp: number) => `${Math.round(temp)}°`;

  const sliderSettings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <Slider {...sliderSettings}>
          {nextDays.map((day) => {

            return (
              <div key={day.date} className="px-2">
                <div
                  key={day.date}
                  className="rounded-lg border p-4"
                >
                  <p className="font-medium">
                    {format(new Date(day.date * 1000), "EEE, MMM d")}
                  </p>
                  <div className="flex items-center justify-between ">
                    <p className="text-sm text-muted-foreground capitalize">
                      {day.weather.description}
                    </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${day.weather.icon}.png`}
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="flex justify-between ">
                      <span className="text-sm text-muted-foreground">Temp Max</span>
                      <span className="flex items-center text-red-500">
                        <ArrowUp className="mr-1 h-4 w-4" />
                        {formatTemp(day.temp_max)}
                      </span>
                    </div>
                    <div className="flex justify-between ">
                      <span className="text-sm text-muted-foreground">Temp Min</span>
                      <span className="flex items-center text-blue-500">
                        <ArrowDown className="mr-1 h-4 w-4" />
                        {formatTemp(day.temp_min)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Humidity</span>
                      <span className="flex items-center text-green-500">
                        <Droplets className="mr-1 h-4 w-4" />
                        {day.humidity}%
                      </span>
                    </div>
                    <div className="flex justify-between ">
                      <span className="text-sm text-muted-foreground">Wind speed</span>
                      <span className="flex items-center text-purple-500">
                        <Wind className="mr-1 h-4 w-4" />
                        {day.wind}m/s
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </CardContent>


    </Card >

  )
}

export default WeatherForecast;
