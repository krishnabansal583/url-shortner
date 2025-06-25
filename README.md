# 🌐 URL Shortener

A simple URL shortener application built using **Node.js**, **Express**, and **MongoDB**. This service shortens long URLs into compact, shareable links and redirects users to the original URL when accessed.

---

## ✨ Features

- 🔗 Shorten long URLs
- 🚀 Redirect to original URL
- 💾 Store URL data in MongoDB
- 🧾 Keep track of number of visits (**Bonus**)
- 🔒 Unique, auto-generated short codes using `nanoid`

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- nanoid

---

## 📦 Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/krishnabansal583/url-shortner.git
   cd url-shortener
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file:
   ```env
   MONGO_URI=mongodb+srv://krishna:krishna123@url-shortner.hfuaum.mongodb.net/?retryWrites=true&w=majority&appName=url-shortner
   ```

4. **Start the server**  
   ```bash
   npm start
   ```
   Server will run at `http://localhost:3000`

---

## 📡 API Endpoints

### ➕ POST `/shorten`

Creates a shortened version of a long URL.

**Request:**
```json
{
  "originalUrl": "https://example.com/very-long-url"
}
```

**Response:**
```json
{
  "originalUrl": "https://example.com/very-long-url",
  "shortUrl": "http://localhost:3000/RXY69V"
}
```

---

### 🔁 GET `/:shortId`

Redirects the user to the original long URL.

**Example:**
- Visit `http://localhost:3000/RXY69V`
- You'll be redirected to `https://example.com/very-long-url`

---

## 🏆 Bonus Feature: Visit Count

Every time a short URL is visited, a counter is incremented in the database.

**Example Extended Response:**
```json
{
  "originalUrl": "https://example.com/very-long-url",
  "shortUrl": "http://localhost:3000/RXY69V",
  "visitCount": 4
}
```

This feature helps track how many times a link has been clicked.

> You can extend this to show analytics or top links later!

---

## 🧪 Testing with Thunder Client

- **POST** to `/shorten` with a JSON body to shorten a URL.
- **GET** the returned `shortUrl` in a new Thunder Client tab to test the redirect and visit counting.

> ⚠️ If you test with `https://example.com`, and see the “Example Domain” HTML — that's expected and not an error.

---

## 🧱 Project Structure

```
url-shortener/
│
├── index.js           # Entry point
├── models/
│   └── url.js         # URL schema
├── routes/
│   └── url.js         # API logic
├── .env               # Environment variables
├── package.json
```

## 🙋‍♂️ Author

**Krishna Bansal**  
GitHub: [krishnabansal583](https://github.com/krishnabansal583)
