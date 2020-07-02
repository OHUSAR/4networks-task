## Instalation

#### Nginx

Install Nginx. For exmaple on

- Ubuntu
`sudo apt-get install nginx`
- MacOS
`brew install nginx`

Edit hosts for `local.zahrada.sk` to point to `127.0.0.1`

Add this line somewhere to `/etc/hosts`
- `127.0.0.1 local.zahrada.sk`


Run Nginx with custom config

`nginx -c /path/to/4networks-task/nginx.conf`

#### JS project

```
> git clone git@github.com:OHUSAR/4networks-task.git
> cd 4networks-task
> npm i
```

To run

```
npm start
```

Go to http://local.zahrada.sk

