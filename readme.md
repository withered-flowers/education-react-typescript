# Education React Typescript

## Table of Content

- [Disclaimer & Prerequisites](#disclaimer--prerequisites)
- [Introduction](#introduction)
- [What is TypeScript](#what-is-typescript)
- [Why TypeScript](#why-typescript)
- [Starting React with TypeScript](#starting-react-with-typescript)
  - [Langkah 1 - Inisialisasi Project](#langkah-1---inisialisasi-project)
  - [Langkah 2 - Duo Counter](#langkah-2---duo-counter)
  - [Langkah 3 - Pseudo Router](#langkah-3---pseudo-router)

## Disclaimer & Prerequisites

Dalam mempelajari ini Anda diharapkan sudah:

- Mengerti penggunaan `git` dan `node`
- Mengerti dasar-dasar dari `React`
- Sudah mengerti **"sedikit"** tentang dasar `Typescript`

Pembelajaran ini cukup panjang, jadi mohon siapkan otak yang cukup dingin dalam mepelajari ini yah !

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

1. Selanjutnya kita akan menuliskan tampilan yang akan digunakan dalam Bagian ini, yaitu:

   - dua buah paragraph untuk melihat isi dari `firstCounter` dan `secondCounter`
   - sebuah button untuk menambahkan `firstCounter`
   - sebuah input untuk menyimpan `amount` yang digunakan untuk menambah `secondCounter`
   - sebuah button untuk menambahkan `secondCounter` berdasarkan `amount` yang ada

1. Untuk mengerjakan point di atas, kita akan memodifikasi kode `/src/App.tsx` menjadi seperti berikut:

   ```ts
   // sama dengan sebelumnya

   const App = () => {
     // Sama dengan sebelumnya

     // Mulai modifikasi dari sini
     return (
       <>
         <section className="Duo Counter">
           <p>Value dari firstCounter adalah: {duoCounter.firstCounter}</p>
           <p>Value dari secondCounter adalah: {duoCounter.secondCounter}</p>

           <div style={{ marginBottom: "1em" }}>
             <button>Tambah (firstCounter)</button>
           </div>

           <div>
             <input
               style={{ marginRight: "1em" }}
               type="number"
               placeholder="Amount"
             />
             <button>Tambah (secondCounter)</button>
           </div>
         </section>
       </>
     );
   };
   ```

1. Selanjutnya kita akan memulai untuk menggunakan event handling ala react untuk menambahkan`firstCounter` pada saat button `Tambah (firstCounter)` ditekan. Perubahan kode pada `/src/App.tsx` nya adalah sebagai berikut:

   ```ts
   // sama dengan sebelumnya

   const App = () => {
     // sama dengan sebelumnya

     // Tambahkan ini sebelum return
     // TODO: duoCounter - Tambah firstCounter (1)
     // Tambahkan kode di sini untuk menambahkan firstCounter
     const buttonFirstIncrementOnClickHandler = () => {
       // Karena state dianggap "immutable"

       // Maka kita akan membuat object yang baru yang isinya sama dengan
       // duoCounter sebelumnya, namun firstCounternya akan berubah + 1
       setDuoCounter({
         ...duoCounter,
         firstCounter: duoCounter.firstCounter + 1,
       });
     };

     return (
       <>
         <section className="Duo Counter">
           <p>Value dari firstCounter adalah: {duoCounter.firstCounter}</p>
           <p>Value dari secondCounter adalah: {duoCounter.secondCounter}</p>

           <div style={{ marginBottom: "1em" }}>
             {/* TODO: duoCounter - Tambah firstCounter (2) */}
             {/* Tambahkan kode di sini untuk menambahkan firstCounter */}
             <button onClick={buttonFirstIncrementOnClickHandler}>
               Tambah (firstCounter)
             </button>
           </div>

           {/* Selebihnya ke bawah ini masih sama */}
         </section>
       </>
     );
   };
   ```

1. Dari kode yang ada di sini, terlihat bahwa sebenarnya tidak ada perubahan kode yang signifikan apabila kita menggunakan baik JS maupun TS dalam menuliskan kodenya.

   Selanjutnya Kita akan coba melihat untuk yang menggunakan input `amount` dan button `Tambah (secondCounter)` nya, apakah masih sama saja?

1. Berikut adalah modifikasi kode pada `/src/App.tsx` (**Perhatikan baik baik bahwa kode tidak dituliskan lengkap di sini !**)

   ```ts
   // Perhatikan importnya berubah
   import { ChangeEvent, useState } from "react";

   // -- Sama seperti sebelumnya --

   const App = () => {
     // Tambahkan sebelum return

     // TODO: duoCounter - Tambah secondCounter (1)
     // Tambahkan kode di sini untuk menambahkan secondCounter
     // Perhatikan pada bagian ini useState nya menerima tipe data number saja
     const [amount, setAmount] = useState<number>(0);

     // TODO: duoCounter - Tambah secondCounter (2)
     // Tambahkan kode di sini untuk menambahkan secondCounter

     // Perhatikan di sini kita menggunakan event untuk mendapatkan value dari input number
     // Di sini kita harus mendeklarasikan tipe data dari "event" yang biasanya
     // digunakan untuk mengambil value dari target yang ada

     // Nama dari tipe data Event yang digunakan dalam React ini bernama
     // ChangeEvent (interface)

     // ChangeEvent ini mirip dengan useState, harus dideklarasikan tipe data
     // yang digunakan untuk element awalnya, yaitu sebuah "input element"
     // input element ini nama tipe datanya adalah "HTMLInputElement"
     const inputAmountOnChangeHandler = (
       event: ChangeEvent<HTMLInputElement>
     ) => {
       // Coba hover amountValue ini dan coba lihat tipe data yang dikembalikan
       // apakah sebuah integer (number) ?
       const amountValue = event.currentTarget.value;

       // amountValue di sini tidak bisa di-set langsung ke dalam setAmount
       // karena amountValue tipe datanya adalah suatu "string"

       // Karena itu kita harus melakukan konversi tipe data dari string menjadi number
       // terlebih dahulu

       // Karena angkanya sudah pasti sebuah integer (angka bula)
       // maka kita bisa menggunakan parseInt

       // Bila nanti bisa angka decimal (dengan koma)
       // maka kita bisa menggunakan Number() atau parseFloat()

       // https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which/17106702#17106702
       const amounValueInNumber = parseInt(amountValue);

       // set state
       setAmount(amounValueInNumber);
     };

     return (
       <>
         {/* -- Sama seperti sebelumnya -- */}

         <div>
           {/* TODO: duoCounter - Tambah secondCounter (4) */}
           {/* Tambahkan kode di sini untuk menambahkan secondCounter */}
           {/* Tidak ada yang berbeda dengan versi javascript */}
           <input
             style={{ marginRight: "1em" }}
             type="number"
             placeholder="Amount"
             value={amount}
             onChange={inputAmountOnChangeHandler}
           />

           {/* TODO: duoCounter - Tambah secondCounter (5) */}
           {/* Tambahkan kode di sini untuk menambahkan secondCounter */}
           {/* Tidak ada yang berbeda dengan versi javascript */}
           <button onClick={buttonSecondIncrementOnClickHandler}>
             Tambah (secondCounter)
           </button>
         </div>

         {/* -- Sama seperti sebelumnya -- */}
       </>
     );
   };
   ```

1. Perhatikan kode yang sudah dimodifikasi di atas, apabila kita sudah terbiasa menggunakan JS, pastinya muncul di benak kita sebuah pertanyaan aneh: **Mengapa jadi lebih panjang kodenya???**

   Hal ini terjadi karena ketika menggunakan TypeScript, kode yang dituliskan umumnya akan menjadi lebih panjang dari versi JavaScript, NAMUN AKAN MENJADI LEBIH AMAN dari konversi tipe data yang berbeda.

   Perhatikan pada `inputAmountOnChangeHandler`, apabila menggunakan javascript, tentunya kita umumnya membiarkan / ignore parsing input string menjadi number bukan?

   Hal ini tidak boleh dilakukan di dalam TypeScript karena pastinya akan "dimarahi" oleh compiler-nya ketika menuliskan kode (error conversion string to number)

   Selain itu, kita juga akan lebih "menghargai" tipe data yang harus dituliskan, sehingga bisa mendapatkan intellisense yang lebih baik lagi ketika menuliskan kode (pada saat menekan . (`dot`) di VSCode, kita akan diberikan informasi variabel dan function yang lebih baik daripada saat kita menggunakan versi Javascript)

1. Full Codenya adalah sebagai berikut:

   ```ts
   // File: /src/App.tsx
   import { ChangeEvent, useState } from "react";

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

     // TODO: duoCounter - Tambah firstCounter (1)
     // Tambahkan kode di sini untuk menambahkan firstCounter
     const buttonFirstIncrementOnClickHandler = () => {
       // Karena state dianggap "immutable"

       // Maka kita akan membuat object yang baru yang isinya sama dengan
       // duoCounter sebelumnya, namun firstCounternya akan berubah + 1
       setDuoCounter({
         ...duoCounter,
         firstCounter: duoCounter.firstCounter + 1,
       });
     };

     // TODO: duoCounter - Tambah secondCounter (1)
     // Tambahkan kode di sini untuk menambahkan secondCounter
     // Perhatikan pada bagian ini useState nya menerima tipe data number saja
     const [amount, setAmount] = useState<number>(0);

     // TODO: duoCounter - Tambah secondCounter (2)
     // Tambahkan kode di sini untuk menambahkan secondCounter

     // Perhatikan di sini kita menggunakan event untuk mendapatkan value dari input number
     // Di sini kita harus mendeklarasikan tipe data dari "event" yang biasanya
     // digunakan untuk mengambil value dari target yang ada

     // Nama dari tipe data Event yang digunakan dalam React ini bernama
     // ChangeEvent (interface)

     // ChangeEvent ini mirip dengan useState, harus dideklarasikan tipe data
     // yang digunakan untuk element awalnya, yaitu sebuah "input element"
     // input element ini nama tipe datanya adalah "HTMLInputElement"
     const inputAmountOnChangeHandler = (
       event: ChangeEvent<HTMLInputElement>
     ) => {
       // Coba hover amountValue ini dan coba lihat tipe data yang dikembalikan
       // apakah sebuah integer (number) ?
       const amountValue = event.currentTarget.value;

       // amountValue di sini tidak bisa di-set langsung ke dalam setAmount
       // karena amountValue tipe datanya adalah suatu "string"

       // Karena itu kita harus melakukan konversi tipe data dari string menjadi number
       // terlebih dahulu

       // Karena angkanya sudah pasti sebuah integer (angka bula)
       // maka kita bisa menggunakan parseInt

       // Bila nanti bisa angka decimal (dengan koma)
       // maka kita bisa menggunakan Number() atau parseFloat()

       // https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which/17106702#17106702
       const amounValueInNumber = parseInt(amountValue);

       // set state
       setAmount(amounValueInNumber);
     };

     // TODO: duoCounter - Tambah secondCounter (3)
     // Tambahkan kode di sini untuk menambahkan secondCounter
     // Tidak ada logic yang berbeda dengan yang sebelumnya
     const buttonSecondIncrementOnClickHandler = () => {
       setDuoCounter({
         ...duoCounter,
         secondCounter: duoCounter.secondCounter + amount,
       });
     };

     return (
       <>
         <section className="Duo Counter">
           <p>Value dari firstCounter adalah: {duoCounter.firstCounter}</p>
           <p>Value dari secondCounter adalah: {duoCounter.secondCounter}</p>

           <div style={{ marginBottom: "1em" }}>
             {/* TODO: duoCounter - Tambah firstCounter (2) */}
             {/* Tambahkan kode di sini untuk menambahkan firstCounter */}
             <button onClick={buttonFirstIncrementOnClickHandler}>
               Tambah (firstCounter)
             </button>
           </div>

           <div>
             {/* TODO: duoCounter - Tambah secondCounter (4) */}
             {/* Tambahkan kode di sini untuk menambahkan secondCounter */}
             {/* Tidak ada yang berbeda dengan versi javascript */}
             <input
               style={{ marginRight: "1em" }}
               type="number"
               placeholder="Amount"
               value={amount}
               onChange={inputAmountOnChangeHandler}
             />

             {/* TODO: duoCounter - Tambah secondCounter (5) */}
             {/* Tambahkan kode di sini untuk menambahkan secondCounter */}
             {/* Tidak ada yang berbeda dengan versi javascript */}
             <button onClick={buttonSecondIncrementOnClickHandler}>
               Tambah (secondCounter)
             </button>
           </div>
         </section>
       </>
     );
   };

   export default App;
   ```

## Langkah 3 - Pseudo Router

Pada langkah ini kita akan mencoba untuk membuat "Navigasi" secara manual, tanpa menggunakan routing, yang bisa mengarahkan pada 3 halaman:

- Halaman Counter
- Halaman Form
- Halaman Table

Halaman Counter merupakan Halaman yang kita buat pada langkah sebelumnya yang menempel pada halaman `App.tsx`

Halaman Form dan Halaman Table, adalah halaman dalam bentuk 2 buah Component baru dengan nama `FormPage.tsx` dan `TablePage.tsx` yang hanya akan menampilkan tulisan `Ini adalah halaman Form` dan `Ini adalah halaman Table`

"Navigasi" ini akan dibuat dalam bentuk sebuah `Navigation Bar`, dalam sebuah Component yang bernama `NavBar.tsx`

Requirementnya adalah:

- State untuk menampung `current page` ada pada `App.tsx`
- Pengubah Statenya terdapat di dalam `NavBar.tsx`

Berikut adalah langkah langkahnya:

1. Buat dua buah file baru dengan nama `/src/pages/FormPage.tsx` dan `/src/pages/TablePage.tsx`, kemudian isilah keduanya dengan kode sebagai berikut:

   ```ts
   // File: /src/pages/FormPage.tsx
   const FormPage = () => {
     return (
       <>
         <p>Ini adalah halaman Form</p>
       </>
     );
   };

   export default FormPage;
   ```

   ```ts
   // File: /src/pages/TablePage.tsx
   const TablePage = () => {
     return (
       <>
         <p>Ini adalah halaman Table</p>
       </>
     );
   };

   export default TablePage;
   ```

1. Selanjutnya kita akan membuat halaman dasar untuk Navigation Barnya, adapun kode yang harus dituliskan pada file `/src/components/NavBar.tsx` adalah sebagai berikut:

   ```ts
   // File: /src/components/NavBar.tsx
   const NavBar = () => {
     return (
       <>
         <nav>
           <ul
             style={{
               display: "flex",
               flexDirection: "row",
               gap: "1em",
               listStyle: "none",
               paddingLeft: "0",
             }}
           >
             <li>
               <a href="#">Counter</a>
             </li>
             <li>
               <a href="#">Form</a>
             </li>
             <li>
               <a href="#">Table</a>
             </li>
           </ul>
         </nav>
       </>
     );
   };

   export default NavBar;
   ```

1. Lalu kita akan memanggil `NavBar.tsx` pada `App.tsx`. Dengan asumsi bahwa teman-teman sudah mengerti React maka kode yang harus dituliskan hanyalah beberapa baris ini saja:

   ```ts
   // File: App.tsx
   // TODO: PseudoRouter - tambah NavBar (1)
   import NavBar from "./components/NavBar";
   import FormPage from "./pages/FormPage";
   import TablePage from "./pages/TablePage";

   // sama dengan sebelumnya
   const App = () => {
     // sama dengan sebelumnya

     return (
       <>
         {/* TODO: PseudoRouter - tambah NavBar (2) */}
         <NavBar />

         {/* Selebihnya sama dengan sebelumnya */}

         {/* Panggil 2 Page ini sebelum tutup Fragment */}
         <FormPage />
         <TablePage />
       </>
     );
   };
   ```

1. Selanjutnya kita akan membuat "constant" yang akan menahan beberapa "nama" dari halaman yang ada. Kita membutuhkan "constant" ini karena kita akan menggunakannya nanti pada beberapa tempat (`App.tsx` dan `NavBar.tsx`).

   Nama Halaman yang akan kita gunakan adalah:

   - `COUNTER_PAGE` untuk halaman **Counter**
   - `FORM_PAGE` untuk halaman **Form**
   - `TABLE_PAGE` untuk halaman **Table**

1. Untuk itu kita akan membuat sebuah file untuk menahan "constant" tersebut dengan nama `/src/config/constant.ts`, pada TypeScript kita bisa menahan "constant" dengan menggunakan `enum(erations)` (https://www.typescriptlang.org/docs/handbook/enums.html). Kodenya adalah sebagai berikut:

   ```ts
   // File: /src/config/contsant.ts
   // Pada file ini kita langsung export saja tanpa menggunakan default
   export enum PageName {
     // Secara default apabila tidak menggunakan nama alias pada enum
     // adalah akses by value index

     COUNTER_PAGE, // valuenya adalah 0
     FORM_PAGE, // valuenya adalah 1
     TABLE_PAGE, // valuenya adalah 2

     // Namun karena kita menggunakan enum, kita tidak mempedulikan valuenya
     // Kita akan mempedulikan "nama alias"-nya !
   }
   ```

1. Selanjutnya kita akan mencoba untuk menggunakan `enum` ini pada `App.tsx`. Adapun modifikasi kodenya adalah sebagai berikut:

   ```ts
   // Tambahkan di import terbawah
   // TODO: PseudoRouter - menggunakan Enum (1)
   // Tambahkan kode di sini untuk menggunakan enum
   import { PageName } from "./config/constant";

   // -- sama seperti sebelumnya --
   const App = () => {
     // Tambahkan sebelum return

     // TODO: PseudoRouter - menggunakan Enum (2)
     // Tambahkan kode di sini untuk menggunakan enum
     // Perhatikan di sini useState-nya menggunakan tipe data enum yang dibuat (PageName)
     const [currentPage, setCurrentPage] = useState<PageName>(
       // Set default valuenya mengarah pada halaman Counter
       PageName.COUNTER_PAGE
     );

     return (
       <>
         {/* Sama seperti sebelumnya */}

         {/* Pada bagian section Duo Counter kita akan menambahkan */}
         {/* Conditional Rendering */}

         {/* TODO: PseudoRouter - menggunakan Enum (3) */}
         {/* Tambahkan kode di sini untuk menggunakan enum */}
         {/* Di sini menggunakan normal conditional rendering */}
         {/* Hanya saja kondisinya menggunakan enum ! */}
         {currentPage === PageName.COUNTER_PAGE && (
           <section className="Duo Counter">...</section>
         )}

         {/* TODO: PseudoRouter - menggunakan Enum (4) */}
         {/* Tambahkan kode di sini untuk menggunakan enum */}
         {currentPage === PageName.FORM_PAGE && <FormPage />}
         {currentPage === PageName.TABLE_PAGE && <TablePage />}
       </>
     );
   };
   ```
