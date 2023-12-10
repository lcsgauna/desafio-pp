install:
	yarn add package.json

clean:
	rm -rf node_modules/

build:
	docker build -t Dockerfile desafio-picpay .

push:
	docker push desafio-picpay