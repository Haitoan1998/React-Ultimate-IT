import React from "react";
import axios from "axios";

// export default function Weather() {
//   return <div>Weather</div>;
// }

class Weather extends React.Component {
  state = {
    dataWeather: {},
    valueSearch: "",
    loading: true,
  };
  async componentDidMount() {
    let data = await axios({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3002/get-data-by-url",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        url: `http://api.weatherapi.com/v1/forecast.json?key=e27a111e9e0f4c77aaa100103231809&q=HANOI&days=5&aqi=yes&alerts=yes`,
      },
    });
    this.setState({ dataWeather: { ...data.data } });
    this.setState({ loading: false });
  }
  async HandleCallApi() {
    let data = await axios({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3002/get-data-by-url",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        url: `http://api.weatherapi.com/v1/forecast.json?key=e27a111e9e0f4c77aaa100103231809&q=${this.state.valueSearch}&days=5&aqi=yes&alerts=yes`,
      },
    });
    this.setState({ dataWeather: { ...data.data } });
    this.setState({ loading: false });
  }

  render() {
    let data = this.state.dataWeather;
    let dataNext = this.state.dataWeather.forecast?.forecastday;
    console.log(dataNext);
    return (
      <>
        <div className="search-weather">
          <input
            type="text"
            value={this.state.valueSearch}
            onChange={(e) => {
              this.setState({ ...this.state, valueSearch: e.target.value });
              this.setState({ loading: true });
            }}
          />
          <button
            onClick={() => {
              this.HandleCallApi();
            }}
          >
            Search
          </button>
        </div>
        {this.state.loading ? (
          <>loading...</>
        ) : (
          <div>
            <div className="title-weather">
              {data?.location?.name} Weather Forecast
            </div>
            <div className="country"> {data?.location?.country}</div>
            <div className="weather">
              <div className="current-day">
                <div className="current-icon">
                  <div className="current-img">
                    <img
                      src={data?.current?.condition?.icon}
                      alt="Weather data by WeatherAPI.com"
                      border="0"
                    />
                  </div>
                  <div>{data?.current?.condition?.text}</div>
                </div>
                <div className="current-info">
                  <div>
                    <div>Wind: {data?.current?.wind_mph} kmph</div>
                    <div>Precip: {data?.current?.precip_mm} mm</div>
                    <div>Pressure: {data?.current?.pressure_mb} mb</div>
                  </div>
                  <div className="current-temperature">
                    {data?.current?.temp_c} °c
                  </div>
                </div>
              </div>
              <div className="next-day">
                {dataNext &&
                  dataNext.length > 0 &&
                  dataNext.map((item) => {
                    const oldDate = item.date;
                    const arr = oldDate.split("-");
                    const newDate = arr[2] + "-" + arr[1] + "-" + arr[0];
                    return (
                      <div className="day">
                        <div>{newDate}</div>
                        <div>
                          <img
                            src={item.day?.condition?.icon}
                            alt="Weather data by WeatherAPI.com"
                            border="0"
                          />
                        </div>
                        <div>max: {item.day?.maxtemp_c} °c</div>
                        <div>min: {item.day?.mintemp_c} °c</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Weather;
