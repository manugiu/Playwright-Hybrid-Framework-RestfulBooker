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

## 🧪 Test Scenarios

### Basic CRUD Operations
- Create, read, update, and delete bookings
- Authentication token generation

### Data-Driven Testing
- Multiple booking scenarios with edge cases
- Special characters (Chinese, accents)
- Boundary testing (long names, min/max values)

### Schema Validation
- Response structure verification
- Data type validation for all fields

### Negative Testing
- Invalid authentication
- Unauthorized update/delete attempts
- Missing required fields

## 🎯 Key Highlights
- Page Object Model pattern for API clients
- TypeScript for type safety
- Comprehensive error handling
- Scenario-based testing approach
