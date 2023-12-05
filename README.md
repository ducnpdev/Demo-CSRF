# Demo CSRF
- demo call csrf cho nhiều service

## step run.
- start service backend 1
```sh
cd backends
go run main.go
```

- start service backend 2
```sh
cd backends_2
go run main.go
```

- start service frontend
```sh
cd frontends/web
go run main.go
```
  - start web browser: localhost:3000
  - and check log service backend 1 and backend 2