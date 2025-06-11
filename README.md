
# 🌦️ ARICE Weather Forecast App

A cross-platform weather forecasting application built with **React Native** and **Expo** for the web and mobile, powered by **GenCast**, Google's cutting-edge AI weather model developed by DeepMind.

This project focuses on **showcasing the application** of AI-based weather forecasting through a clean, mobile-first user interface.

---

## 🧠 Powered by GenCast

> **GenCast** is a generative AI model created by Google DeepMind, offering accurate and fast weather predictions by simulating atmospheric dynamics. It enables state-of-the-art nowcasting and forecasting using machine learning.

🔗 Learn more: [GenCast on DeepMind](https://www.deepmind.com/research/highlighted-research/gencast)

---

## ✨ Features

- 🌍 **Location-Based Forecasts**  
  Detects user location and fetches relevant forecast data.

- 🔮 **AI-Powered Weather Predictions**  
  Integrates GenCast model outputs for accurate forecasting.

- 📱 **Responsive Web UI**  
  Built with React Native for Web to ensure consistent design across devices.

- 📊 **Forecast Visuals**  
  Modular components like `ForecastCard`, `WeatherIcon`, and `SearchText` make the interface clean and intuitive.

---

## 📁 Project Structure

```bash
.
├── app/
│   ├── (pages)/
│   │   ├── Weather.tsx
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── assets/
│   ├── components/
│   ├── ui/
│   │   └── phone/
│   │       ├── weather/
│   │       │   ├── ForecastCard.tsx
│   │       │   ├── ForecastCardBig.tsx
│   │       │   ├── SearchText.tsx
│   │       │   ├── WeatherIcon.tsx
│   │       ├── HomeWeather.tsx
│   │       ├── PhoneHome.tsx
│   │       ├── PhoneSoil.tsx
│   │       └── Header.tsx
│   ├── constant/
│   │   ├── Colors.ts
│   │   └── TextStyle.ts
│   └── dataset/
│       └── forecast.json
├── types/
│   └── forecastProps.ts
├── .gitignore
├── app.json
├── eslint.config.js
├── expo-env.d.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```
---

## 📸 Screenshots
### Landing Page
![image](https://github.com/user-attachments/assets/438e9baf-851f-4fe7-8e30-683cd05cab1d)
![image](https://github.com/user-attachments/assets/f5002091-73b4-41d9-8c21-ca85e97f9ab8)
![image](https://github.com/user-attachments/assets/b6fe70b8-e443-4b00-adb7-b7a70d09d661)

### Weather Forecast
![image](https://github.com/user-attachments/assets/d183d642-938a-4f45-9407-b81f0a9aefeb)
![image](https://github.com/user-attachments/assets/bbbabc17-b836-423b-b303-415d85fc2b04)

---

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Native for Web](https://necolas.github.io/react-native-web/)
- TypeScript
- JSON-based sample forecast data
- Modular UI components

---

## 🧪 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/gencast-weather-app.git
cd gencast-weather-app

# 2. Install dependencies
npm install

# 3. Run the app (web version)
npm run web
```
