# 🔧 API Testing Framework - Restful Booker

## 📝 About This Project
This project tests the Restful-Booker API. I built it as a portfolio project showcasing API automation skills with TypeScript and Playwright.

## 🛠️ Tech Stack
- **TypeScript** - Type-safe test development
- **Playwright** - API testing framework
- **Restful-Booker API** - Hotel booking practice API

## ✨ What I Tested
- **CRUD Operations**: Create, Read, Update, Delete bookings
- **Authentication**: Token generation with positive/negative scenarios
- **Real-World Scenarios**: Complete user journeys (book → update → cancel)
- **Error Handling**: Invalid credentials, failed requests

## 📁 Project Structure
```
├── api-clients/          # API client classes (AuthClient, BookingClient)
├── tests/
│   └── api/             # Test specs (auth, booking, scenarios)
├── playwright.config.ts
└── package.json
```

## 🚀 How to Run
```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run specific test file
npx playwright test auth.spec.ts

# View test report
npx playwright show-report
```

## 📊 Test Coverage
- ✅ Health check endpoint
- ✅ Authentication (create token, handle failures)
- ✅ Booking CRUD operations
- ✅ End-to-end booking scenarios

## 🎯 Key Highlights
- Page Object Model pattern for API clients
- TypeScript for type safety
- Comprehensive error handling
- Scenario-based testing approach
