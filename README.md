# Scores App

A React frontend application that displays scores fetched from an API endpoint.

## Features

- Fetches scores from `/scores` endpoint on page load
- Displays scores in a clean, modern interface
- Scores are automatically sorted by score (highest to lowest)
- Responsive design with hover effects
- Error handling for API failures
- Loading states

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## API Requirements

The application expects a `/scores` endpoint that returns an array of score objects with the following structure:

```typescript
{
  id: string;
  name: string;
  score: number;
  updated: Date;
}
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Main application styles
├── Score.tsx        # Individual score component
├── Score.css        # Score component styles
├── types.ts         # TypeScript type definitions
└── index.tsx        # Application entry point
```

## Features in Detail

### Score Display
- Each score shows the name and score value
- Scores are displayed in cards with hover effects
- Score values are highlighted with a blue badge
- Scores are automatically sorted by score (highest to lowest)

### Data Fetching
- Fetches scores once when the component mounts
- Error handling with user-friendly messages
- Loading states during initial fetch

### Styling
- Modern, clean design
- Responsive layout
- Smooth transitions and hover effects
- Professional color scheme
