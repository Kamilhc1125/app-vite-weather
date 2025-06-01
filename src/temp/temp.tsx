/**

https://api.openweathermap.org/geo/1.0/reverse?lat=52.23&lon=21.01&limit=1&appid=c49d4d45bcb8891db20bbf13a195ec92



https://api.openweathermap.org/data/2.5/weather?q=Warsaw&units=metric&appid=c49d4d45bcb8891db20bbf13a195ec92

**/


// Breakpoint prefix	Minimum width	CSS
// sm	40rem(640px)	@media(width >= 40rem) { ... }
// md	48rem(768px)	@media(width >= 48rem) { ... }
// lg	64rem(1024px)	@media(width >= 64rem) { ... }
// xl	80rem(1280px)	@media(width >= 80rem) { ... }
// 2xl	96rem(1536px)	@media(width >= 96rem) { ... }


{/* <ResponsiveContainer
            width={"100%"}
            height={"100%"}
          >
            <LineChart width={400} height={400} data={chartData}>
              <XAxis
                dataKey="time"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}°`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Temperature</span>
                            <span className="font-bold">{payload[0].value}°</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Feels Like</span>
                            <span className="font-bold">{payload[1].value}°</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="feels_like"
                stroke="##64748b"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer> */}
