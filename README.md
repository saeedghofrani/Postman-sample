# Browser API Request Playground

A small browser-based exercise for sending simple HTTP requests and viewing JSON
responses. It provides separate tabs for `GET` and `POST` requests and runs
entirely in the browser.

## Features

- Send a `GET` request to a URL entered by the user
- Send a JSON `POST` body after validating its syntax
- Display the response body and HTTP status
- Responsive interface built with Bootstrap, Bulma, jQuery, and custom CSS

## Run locally

The project has no build step. Serve the repository with any static web server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Files

- `index.html` contains the request form and response panels.
- `js/index.js` validates JSON and performs the AJAX requests.
- `css/style.css` provides the small amount of project-specific styling.

## Limitations

- The target API must allow browser requests through CORS.
- Only basic `GET` and JSON `POST` requests are supported.
- There is no support for custom headers, authentication, query builders,
  request history, environments, file uploads, or secret storage.
- Error handling reports a generic missing-page message rather than the actual
  response status and body.
- The `GET` view expects useful response content under a `data` property.
- UI dependencies are loaded from third-party CDNs and require internet access.

## Status

This is a historical front-end learning project from 2022. It is an API request
playground, not a replacement for a full API development client.
