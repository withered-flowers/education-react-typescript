# Education React Typescript

## Table of Content

- [Disclaimer & Prerequisites](#disclaimer--prerequisites)
- [Introduction](#introduction)
- [What is TypeScript](#what-is-typescript)
- [Why TypeScript](#why-typescript)
- [Starting React with TypeScript](#starting-react-with-typescript)
  - [Langkah 1 - Inisialisasi Project](#langkah-1---inisialisasi-project)
  - [Langkah 2 - Duo Counter](#langkah-2---duo-counter)

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

### Langkah 1 - Inisialisasi Project

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
1. `Yay` ! aplikasi pertama kita menggunakan React versi TS sudah bisa berjalan dengan baik !

Mari kita coba lihat apa perbedaannya bila menggunakan versi JS dengan versi TS:

- `package.json` yang memiliki dependency tambahan untuk bisa menghandle react versi typescript
- `tsconfig.json` dan `tsconfig.node.json`, merupakan konfigurasi untuk TS untuk `Browser` dan `NodeJS`
- Pada folder `/src` akan ada file yang berbeda penamaannya dengan versi JS:

  - `App.jsx` (JS) akan berubah menjadi `App.tsx` (TS). Hal ini untuk memberitahukan Vite bahwa kita akan menggunakan TypeScript pada JSX yang ada. Bila dilihat di dalam sini, tidak ada perbedaan kode awal dari versi JS.
  - `main.jsx` (JS) akan berubah menjadi `main.tsx` (TS), dan ada sedikit perubahan kode:

    ```ts
    // Dalam kode ini menyatakan bahwa deklarasikan document.getElementById
    // adalah suatu tipe data yang bernama HTMLElement

    // HTMLElement adalah tipe data bawaan untuk element yang ada pada browser

    // https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
    document.getElementById("root") as HTMLElement;
    ```

Sampai pada titik ini artinya pembelajaran tentang inisialisasi React versi TypeScript sudah selesai. sekarang saatnya kita belajar untuk menggunakan TypeScript versi React yah !

### Langkah 2 - Duo Counter

Pada langkah ini kita akan coba untuk membuat dua buah counter yang keduanya berasal dari state yang sama: `duoCounter`, yang merupakan suatu object yang memiliki 2 props:

- `firstCounter` untuk angka pertama
- `secondCounter` untuk angka kedua

Pada halaman utama ini juga akan ada:

- sebuah button yang berfungsi untuk melakukan increment terhadap `firstCounter` sebanyak 1
- sebuah input yang akan menerima `amount` untuk menambahkan `secondCounter`
- sebuah button yang akan menambahkan `secondCounter` sejumlah `amount` yang ada pada input

Mari kita coba untuk membuat ini dalam versi TypeScript yah !

```
Disclaimer:

- Cara orang membuat TypeScript bisa jadi berbeda-beda, jadi bila Anda sudah ada di tingkat lanjut (Advanced), mungkin cara ini BUKAN CARA YANG TERBAIK YAH !
```

Langkah-langkah untuk membuat bagian ini adalah sebagai berikut:

1. Buka file `index.html` dan ganti isi dari title menjadi `Belajar React versi TypeScript`
1. Buka file `/src/main.tsx` dan comment / hapus `import './index.css'`
1. Buka file `/src/App.tsx` dan hapus seluruh code yang ada, karena kita akan mencoba membuatnya dari awal
1. Menuliskan kembali kerangka awal untuk `App.tsx` sebagai berikut:

   ```ts
   const App = () => {
     return <></>;
   };

   export default App;
   ```

1. Kemudian kita akan import useState dari react dan menuliskan state awal untuk `duoCounter` dalam versi typescript sebagai berikut:

   ```ts
   import { useState } from "react";

   // Di sini kita akan mendeclare tipe dari duoCounter
   // sebut saja namanya adalah DuoCounter
   type DuoCounter = {
     firstCounter: number;
     secondCounter: number;
   };

   const App = () => {
     // Di sini kita akan mendeclare useState dan menggunakan
     // tipe data DuoCounter yang sudah dideclare sebelumnya
     const [duoCounter, setDuoCounter] = useState<DuoCounter>({
       // Wajib memiliki "data" yang sudah dideklarasikan di dalam
       // type DuoCounter, tidak boleh lebih / kurang

       // TODO: Cobalah untuk menambahkan thirdCounter di sini, dan lihat apakah hasilnya?
       firstCounter: 0,
       secondCounter: 0,
     });

     return <></>;
   };

   export default App;
   ```
