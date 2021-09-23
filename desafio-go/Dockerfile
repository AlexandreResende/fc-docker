FROM golang:1.17.1-alpine3.14 AS builder

WORKDIR /app

COPY main.go .

RUN go build main.go

FROM scratch

COPY --from=builder /app/main .

CMD [ "./main" ]
