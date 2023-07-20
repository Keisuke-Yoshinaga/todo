# node
FROM node:20-slim

# 作業ディレクトリ
WORKDIR /app

COPY package*.json .
COPY yarn.lock .

# パッケージ一覧(インデックス)を更新
RUN apt update \
  && yarn install

COPY . .

# ポート番号5173
EXPOSE 5173
