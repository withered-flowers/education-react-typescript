# Education React Typescript

## Table of Content

- Disclaimer & Prerequisites
- Introduction
- What is TypeScript
- Why TypeScript
- Starting React with TypeScript

## Disclaimer & Prerequisites

Dalam mempelajari ini Anda diharapkan sudah:

- Mengerti penggunaan `git` dan `node`
- Mengerti dasar-dasar dari `React`
- Sudah mengerti **"sedikit"** tentang dasar `Typescript`

## Introduction

Mengingat React sudah menjadi salah satu library yang sangat populer dan hampir _FrontEnd-er_ sudah pernah menjajal React, sepertinya kita tidak perlu lagi mengenal React itu apa yah.

Nah sekarang barang barunya adalah pada **TypeScript**-nya.

## What is TypeScript

Apa itu **TypeScript** dan mengapa **TypeScript** sangat populer?

**TypeScript** secara sederhananya adalah bahasa perluasan dari **JavaScript** oleh **Microsoft** yang memiliki tipe data yang ketat (_strict type_).

Berbeda dengan JavaScript yang tidak punya tipe data yang ketat (_loose type_)

Mari kita coba lihat contoh di bawah ini:

```js
// Inisialisasi variabel
let x = 10; // Perhatikan di sini kita menggunakan angka (integer)

// Mutasi value
x = "Halo Dunia"; // Perhatikan di sini assignment x menjadi tulisan (string)
```

Dalam JavaScript ini adalah hal yang biasa terjadi, dan tidak akan error.

Hal ini terjadi karena JavaScript tidak pernah peduli dengan tipe data yang ada pada suatu variable

Mari kita coba lihat bila kita menggunakan **TypeScript**

```ts
// Perhatikan di sini kita assign variabel x dengan tipe data number (integer)
let x: number = 10;

// Mutasi value
x = "Halo Dunia"; // error: Type 'string' is not assignable to type 'number'.
```

Hal ini tidak bisa terjadi pada saat kita menggunakan **TypeScript** (**TS**), karena pada **TS** tipe data akan dicek secara terus menerus !

**Wah ! kok kayaknya jadi ribet yah ngoding seperti ini?**

## Why TypeScript

**Strict Data Type** seperti ini, walaupun merepotkan, sebenarnya dalam jangka panjang suatu project:

> Hal ini akan sangat memudahkan programmer dalam memantain kodenya, karena
> dengan cepat kita bisa mengetahui suatu variabel ini bisa menerima tipe data
> apa saja.

Tapi apakah **TS** hanya sebatas ini saja?

Tentunya **tydaque** !

Apa saja jadinya?

- Meningkatkan keamanan kode untuk mencegah adanya "undefined" / "null" yang tidak diinginkan
- Meningkatkan kualitas kode kita menjadi lebih mudah dibaca dan dimengerti
- Meningkatkan kemungkinan refactor kode menjadi lebih efisien
- [!] Memaksa kita menulis kode yang lebih kompleks dan panjang dari **JS**

Nah setelah melihat kegunaan **TS**, mari kita coba yah untuk menuliskan kode React namun menggunakan **TS** yah !

## Starting React with TypeScript

Untuk memulai project React dengan menggunakan TypeScript sebenarnya ada beberapa cara:

1. Menggunakan `create-react-app` namun dengan template `typescript`
1. Menggunakan `vite` dan memilih `react` versi `typescript`
1. Menggunakan monorepo seperti `nx` dan memulai project `react` versi `typescript`
1. Menuliskan `package.json` seluruhnya manual

Pada pembelajaran ini kita akan menggunakan cara yang **kedua**, yaitu menggunakan `vite` dan memilih `react` versi `typescript`

Mari kita mulai !

Langkah-langkah untuk memulainya adalah sebagai berikut:

1. Buka terminal dan pindah ke folder workspaces yang dimiliki
1. Menggunakan perintah sesuai dengan package manager yang digunakan pada node:
   - [npm] `npm create vite@latest`
   - [yarn] `yarn create vite`
   - [pnpm] `pnpm create vite`
1. Kemudian kita akan diberikan beberapa pertanyaan interaktif dari terminal:
   - **Project name**: `nama-project-yang-ingin-dibuat`
   - **Select a framework**: `React`
   - **Select a variant**: `TypeScript`
1. Selanjutnya kita akan masuk ke folder yang dibuat, kemudian dengan menggunakan package manager yang digunakan sebelum-nya kita akan menginstall package dengan perintah:
   - [npm] `npm install`
   - [yarn] `yarn install`
   - [pnpm] `pnpm install`
1. Selanjutnya kita akan coba untuk menjalankan kode yang sudah dibuat dengan menggunakan perintah:
   - [npm] `npm run dev`
   - [yarn] `yarn run dev`
   - [pnpm] `pnpm run dev`
1. Kemudian kita akan membuka browser kita pada `http://localhost:5173`, default port development pada `vite`
