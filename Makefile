# Makefile para instalar dependencias con npm ci
install:
		npm ci
brain-games:
		node bin/brain-games.js
publish:
		 npm publish --dry-run

lint:
		npx eslint .


