import React from 'react'
import { useState } from 'react';
import { Layout, Input, Button, Card, Row, Col } from 'antd';
const { Header, Content } = Layout;
import WeatherImage from './WeatherImage'
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=bf9d8715432a5bc306f2f56ce149ed3d`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <Layout>
      <Header style={{ color: 'white' }}>Weather App</Header>
      <Content style={{ padding: '20px' }}>
        <Input
          placeholder="Enter city name"
          style={{ width: '300px', marginRight: '10px' }}
          value={city}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={fetchWeatherData}>
          Get Weather
        </Button>
        {weatherData && (
          <Card title={weatherData.name}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                {/* Add other weather details here */}
              </Col>
              {/* You can add more columns for additional weather data */}
            </Row>
          </Card>
        )}
      </Content>
    </Layout>
  )
}

export default Weather