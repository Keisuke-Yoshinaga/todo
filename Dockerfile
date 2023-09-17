# node
FROM node:20-slim

ENV LANG=C.UTF-8 \
  TZ=Asia/Tokyo

# 作業ディレクトリ
WORKDIR /app

COPY package*.json .
COPY yarn.lock .

# パッケージ一覧(インデックス)を更新
RUN yarn install && yarn cache clean --force

COPY . .

# ポート番号5173
EXPOSE 5173
