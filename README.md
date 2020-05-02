[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/nojaja/http-server-ui) 
[![Licence](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE) 

# http-server-ui

`http-server-ui`: a GUI http server that combines `http-server` and `electron`.

`http-server-ui` is a simple, zero-configuration GUI http server. 
It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, 
local development, and learning.

![screenshot](/assets/screenshots/screenshot.png)

## Installation
[v0.0.2](https://github.com/nojaja/http-server-ui/releases/tag/v0.0.2)

## Usage
```
http-server-ui.exe [path] [options]
```
`[path]` defaults to `./public` if the folder exists, and `./` otherwise.

Now you can visit ___http://localhost:8080___ to view your server

Note: Caching is on by default. Add `-c-1` as an option to disable caching.

## Available Options

`-p` or `--port` Port to use (defaults to 8080)

`-a` Address to use (defaults to 0.0.0.0)

`-d` Show directory listings (defaults to `true`)

`-i` Display autoIndex (defaults to `true`)

`-g` or `--gzip` When enabled (defaults to `false`) it will serve `./public/some-file.js.gz` in place of `./public/some-file.js` when a gzipped version of the file exists and the request accepts gzip encoding. If brotli is also enabled, it will try to serve brotli first.

`-b` or `--brotli` When enabled (defaults to `false`) it will serve `./public/some-file.js.br` in place of `./public/some-file.js` when a brotli compressed version of the file exists and the request accepts `br` encoding. If gzip is also enabled, it will try to serve brotli first.

`-e` or `--ext` Default file extension if none supplied (defaults to `html`)

`-s` or `--silent` Suppress log messages from output

`--cors` Enable CORS via the `Access-Control-Allow-Origin` header

`-o [path]` Open browser window after starting the server. Optionally provide a URL path to open. e.g.: -o /other/dir/

`-c` Set cache time (in seconds) for cache-control max-age header, e.g. `-c10` for 10 seconds (defaults to `3600`). To disable caching, use `-c-1`.

`-U` or `--utc` Use UTC time format in log messages.

`--log-ip` Enable logging of the client's IP address (default: `false`).

`-P` or `--proxy` Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com

`--username` Username for basic authentication [none]

`--password` Password for basic authentication [none]

`-S` or `--ssl` Enable https.

`-C` or `--cert` Path to ssl cert file (default: `cert.pem`).

`-K` or `--key` Path to ssl key file (default: `key.pem`).

`-r` or `--robots` Provide a /robots.txt (whose content defaults to `User-agent: *\nDisallow: /`)

`--no-dotfiles` Do not show dotfiles

`-h` or `--help` Print this list and exit.

`-v` or `--version` Print the version and exit.

## Magic Files

- `index.html` will be served as the default file to any directory requests.
- `404.html` will be served if a file is not found. This can be used for Single-Page App (SPA) hosting to serve the entry page.

## Catch-all redirect

To implement a catch-all redirect, use the index page itself as the proxy with:

```
http-server --proxy http://localhost:8080?
```

Note the `?` at the end of the proxy URL. Thanks to [@houston3](https://github.com/houston3) for this clever hack!

## TLS/SSL

First, you need to make sure that [openssl](https://github.com/openssl/openssl) is installed correctly, and you have `key.pem` and `cert.pem` files. You can generate them using this command:

``` sh
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

You will be prompted with a few questions after entering the command. Use `127.0.0.1` as value for `Common name` if you want to be able to install the certificate in your OS's root certificate store or browser so that it is trusted.

This generates a cert-key pair and it will be valid for 3650 days (about 10 years).

Then you need to run the server with `-S` for enabling SSL and `-C` for your certificate file.

``` sh
http-server -S -C cert.pem
```

This is what should be output if successful:

``` sh
Starting up http-server, serving ./ through https
Available on:
  https:127.0.0.1:8080
  https:192.168.1.101:8080
  https:192.168.1.104:8080
Hit CTRL-C to stop the server
```
## development
```
git clone https://github.com/nojaja/http-server-ui.git
npm install
npm run start
```

## development-dist
```
npm run dist
```

## publish
```
git tag v0.0.0
git push --tags
```
start CI ⇒ make release file

## License

Licensed under the [MIT](LICENSE) License.
