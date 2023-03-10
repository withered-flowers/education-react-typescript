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
  - [Langkah 4 - Form Page](#langkah-4---form-page)
  - [Langkah 5 - Table Page](#langkah-5---table-page)

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

1. Selanjutnya kita akan melempar (`passing`) fungsi `setCurrentPage` ini ke component `NavBar.tsx` agar dapat digunakan langsung oleh component.

   Apabila kita menggunakan JavaScript biasa, maka mungkin caranya adalah seperti ini:

   ```js
   // File: App.tsx

   const App = () => {
     return (
       <>
         <NavBar fnHandler={setCurrentPage} />
       </>
     );
   };
   ```

   ```js
   // File: /src/components/NavBar.tsx

   const NavBar = ({ fnHandler }) => {
     return <>...</>;
   };
   ```

   Namun, pada saat kita menggunakan TypeScript, kode di atas akan menerima error: `Type blablabla is not assignable to type 'IntrinsicAttributes'`.

   Hal ini terjadi karena `props` di dalam di-dalam component `NavBar.tsx` harus didefinisikan terlebih dahulu dalam sebuah `interface` di dalam **TypeScript**.

   Loh, padahal kan `fnHandler` isinya adalah suatu `setState` dari `useState`, jadi nanti isinya apa yah ???

   Dokumentasi:

   - https://www.typescriptlang.org/docs/handbook/jsx.html

1. Selanjutnya kita akan membuat props ini menjadi bisa berjalan dalam versi React TS nya yah ! Adapun kode yang harus dimodifikasi adalah sebagai berikut:

   ```ts
   // File: App.tsx

   // --sama seperti sebelumnya--

   const App = () => {
     // --sama seperti sebelumnya--
     return (
       <>
         {/* TODO: PseudoRouter - tambah fnHandler(1) */}
         <NavBar fnHandler={setCurrentPage} />

         {/* --sama seperti sebelumnya-- */}
       </>
     );
   };
   ```

   Yang berbeda cukup signifikan adalah pada halaman `NavBar.tsx` nya, yaitu menjadi sebagai berikut:

   ```ts
   // File: /src/components/NavBar.tsx

   // TODO: PseudoRouter - tambah fnHandler (2)
   import { SyntheticEvent } from "react";
   import { PageName } from "../config/constant";

   // TODO: PseudoRouter - tambah fnHandler (3)
   // Umumnya dibuat dengan menggunakan suatu interface
   interface Props {
     // Sebenarnya apabila ingin sangat detil
     // bisa menggunakan Dispatch type dari React TS

     // Namun bisa kita simplifikasi
     // dengan mendefinisikan bahwa fnHandler
     // adalah sebuah fungsi yang tidak akan return apapun

     // Ingat bahwa fnHandler ini sebenarnya adalah
     // setCurrentPage, yang membutuhkan parameter berupa type PageName

     // Pada line ini artinya adalah
     // - interface Props memiliki sebuah object dengan nama fnHandler
     // - yang berupa suatu fungsi yang tidak mengembalikan apapun
     // - menerima suatu parameter dengan nama pageName, yang bertipe PageName
     fnHandler: (pageName: PageName) => void;
   }

   // TODO: PseudoRouter - tambah fnHandler (4)
   // Selanjutnya untuk Props yang ada di NavBar ini
   // Akan menggunakan interface Props yang sudah didefinisikan di atas
   const NavBar = ({ fnHandler }: Props) => {
     // TODO: PseudoRouter - tambah fnHandler (5)
     // Di sini kita akan membuat sebuah fungsi yang memudahkan kita untuk memanggil fnHandler
     // Ingat juga bahwa karena ini adalah anchor, kita harus preventDefault agar tidak terjadi
     // refresh halaman

     // Loh eventnya kok berbeda dengan yang sebelumnya?
     // Ya, karena ini adalah React, dan memiliki banyak tipe Event, sehingga
     // Kita pun harus menyesuaikan event yang dimiliki !

     // Untuk anchorOnClick ini karena kita hanya ingin menggunakan preventDefault saja
     // Maka kita bisa menggunakan SyntheticEvent

     // https://reactjs.org/docs/events.html
     const anchorOnClickHandler = (
       event: SyntheticEvent,
       pageName: PageName
     ) => {
       event.preventDefault();
       fnHandler(pageName);
     };

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
               {/* TODO: PseudoRouter - tambah fnHandler (6a) */}
               {/* Gunakan fungsi anchorOnClickHandler di sini */}
               <a
                 href="#"
                 onClick={(e) => anchorOnClickHandler(e, PageName.COUNTER_PAGE)}
               >
                 Counter
               </a>
             </li>
             <li>
               {/* TODO: PseudoRouter - tambah fnHandler (6b) */}
               {/* Gunakan fungsi anchorOnClickHandler di sini */}
               <a
                 href="#"
                 onClick={(e) => anchorOnClickHandler(e, PageName.FORM_PAGE)}
               >
                 Form
               </a>
             </li>
             <li>
               {/* TODO: PseudoRouter - tambah fnHandler (6c) */}
               {/* Gunakan fungsi anchorOnClickHandler di sini */}
               <a
                 href="#"
                 onClick={(e) => anchorOnClickHandler(e, PageName.TABLE_PAGE)}
               >
                 Table
               </a>
             </li>
           </ul>
         </nav>
       </>
     );
   };

   export default NavBar;
   ```

Sampai pada tahap ini artinya kita sudah selesai membuat `Pseudo Router` yang digunakan dalam aplikasi React versi TS ini.

Selanjutnya kita akan membuat Halaman `FormPage` nya agar dapat berjalan dengan baik !

## Langkah 4 - Form Page

Pada langkah ini kita akan membuat sebuah Form pada page `FormPage.tsx`, yang memiliki dua buah input, yaitu `username` dan `password`. Pada saat Form ini di-`submit`, maka aplikasi akan mengecek, apakah `username` dan `password` yang di-input sudah tepat atau belum, kemudian akan memberikan respon, apabila berhasil maka akan memberikan info `Login Berhasil, silahkan cek Local Storage`, apabila gagal, maka akan memberikan info `Login Gagal`

Requirement:

- Asumsikan bahwa `username` dan `password` yang tepat adalah `belajar` sebagai `username` dan `react-ts` sebagai `password
- Aplikasi ini tidak melakukan `fetch` / penembakan ke backend terlebih dahulu yah, karena fokus kita adalah di React-nya !

Langkah-langkah untuk mengerjakannya adalah sebagai berikut:

1. Modifikasi tampilan `/src/pages/FormPage.tsx` untuk menggunakan layout sebagai berikut:

   ```ts
   const FormPage = () => {
     return (
       <>
         <p>Ini adalah halaman Form</p>

         {/* TODO: formPage - Layouting (1) */}
         <form
           style={{
             display: "flex",
             flexDirection: "column",
             gap: "1em",
             width: "50vw",
           }}
         >
           <input type="text" name="username" placeholder="Username" />
           <input type="password" name="password" placeholder="Password" />
           <button type="submit">Lakukan Login</button>
         </form>

         <p style={{ color: "#008744" }}>
           Login Berhasil, silahkan cek Local Storage
         </p>

         <p style={{ color: "#D62D20" }}>Login Gagal</p>
       </>
     );
   };

   export default FormPage;
   ```

1. Selanjutnya kita akan mencoba untuk membuat logic untuk form submission-nya tanpa menggunakan useState untuk masing masing input yah !

   (Namun kita tetap membutuhkan tambahan state untuk menyatakan apakah ada Error atau tidak)

   ```ts
   import { FormEvent, useState } from "react";

   // TODO: formPage - Form Handling (1)
   // Pada bagian ini kita akan deklarasi type dari state yang ada pada form
   type FormState = {
     isError: boolean;
     isSuccess: boolean;
   };

   const FormPage = () => {
     // TODO: formPage - Form Handling (2)
     // Pada bagian ini kita akan deklarasi state yang ada pada form
     const [formState, setFormState] = useState<FormState>({
       isError: false,
       isSuccess: false,
     });

     // TODO: formPage - Form Handling (3)
     // Pada bagian ini kita akan mencoba untuk membuat form submission handler
     const formOnSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
       event.preventDefault();

       localStorage.clear();

       // Ini menggunakan Uncontrolled components di dalam suatu form
       // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
       const target = event.target as typeof event.target & {
         username: { value: string };
         password: { value: string };
         // ceritanya di sini kita ingin menggunakan event.target.reset() pada form
         reset: () => void;
       };

       // Sebenarnya cara terbaiknya tetap ada state yang dikhususkan untuk masing masing input
       const username = target.username.value;
       const password = target.password.value;

       if (username === "belajar" && password === "react-ts") {
         setFormState({
           isError: false,
           isSuccess: true,
         });

         localStorage.setItem("login", btoa(username + password));
       } else {
         setFormState({
           isSuccess: false,
           isError: true,
         });
       }

       target.reset();
     };

     return (
       <>
         <p>Ini adalah halaman Form</p>

         {/* TODO: formPage - Layouting (1) */}
         <form
           // TODO: formPage - Form Handling (4)
           // Pada bagian ini kita menambahkan onSubmit pada form
           onSubmit={formOnSubmitHandler}
           style={{
             display: "flex",
             flexDirection: "column",
             gap: "1em",
             width: "50vw",
           }}
         >
           <input type="text" name="username" placeholder="Username" />
           <input type="password" name="password" placeholder="Password" />
           <button type="submit">Lakukan Login</button>
         </form>

         {/* TODO: formPage - Form Handling (3) */}
         {/* Handle untuk logic Form Success */}
         {formState.isSuccess && (
           <p style={{ color: "#008744" }}>
             Login Berhasil, silahkan cek Local Storage
           </p>
         )}

         {/* TODO: formPage - Form Handling (4) */}
         {/* Handle untuk logic Form Error */}
         {formState.isError && <p style={{ color: "#D62D20" }}>Login Gagal</p>}
       </>
     );
   };

   export default FormPage;
   ```

   Pada bagian ini terlihat perbedaan antara TS dengan JSnya umumnya adalah sebagai berikut:

   - Memiliki type untuk state dari Form (`FormState`)
   - pada saat menggunakan useState memasukkan type `FormState`
   - Pada saat form submission, tipe data untuk event adalah `FormEvent<HTMLFormElement>`
   - Untuk `target`-nya masing masing harus menggunakan gabungan type dari `event.target` dan Object untuk inputan punya value masing masing `{ name1: { value : string }, ... }`

Selanjutnya kita akan membuat sebuah tabel yang akan mencomot data dari luar. Data yang akan diambil adalah dari `https://jsonplaceholder.typicode.com/comments`.

## Langkah 5 - Table Page

Pada langkah ini kita akan mencoba untuk membuat sebuah table yang informasinya didapatkan dari `https://jsonplaceholder.typicode.com/comments`.

Requirement:

- Asumsikan data akan diambil pada saat Component yang bernama `TablePage.tsx` ini sudah dibuat.
- Tidak menggunakan `axios` ataupun `undici` ataupun package lainnya. Hanya akan menggunakan `fetch` API bawaan browser saja.
- Tabel akan memiliki data berupa `id`, `email`, `body` dan sebuah tombol action `Delete` yang akan menghapus data pada baris yang terpilih. (Karena delete ini tanpa menggunakan Backend, sehingga pastinya **pada saat halaman direfresh, data akan kembali seperti semula**)

Langkah untuk membuatnya adalah sebagai berikut:

1. Modifikasi file `/src/pges/TablePage.tsx`, untuk membuat layout tampilan, sekaligus membuat `fetch` data yang diperlukan. Adapun modifikasi kodenya adalah sebagai berikut:

   ```ts
   // TODO: tablePage - Table Render (1)
   // Di sini kita tetap hanya menggunakan useState dan useEffect saja
   import { useEffect, useState } from "react";

   // TODO: tablePage - Table Render (2)
   // Karena data yang ingin diambil adalah data yang sudah fix (id, email, dan body)
   // Maka di sini kita akan membuat type-nya untuk digunakan
   type Comment = {
     id: number;
     email: string;
     body: string;
   };

   const TablePage = () => {
     // TODO: tablePage - Table Render (3)

     // Karena pada saat fetch data harus ada yang ditampung
     // maka kita akan mendefinisikan state awalnya

     // Karena data akhirnya berupa Array of Comment (Comment[])
     // Maka state awalnya adalah array kosong ([])
     const [comments, setComments] = useState<Comment[]>([]);

     useEffect(() => {
       // TODO: tablePage - Table Render (4)
       // Di sini kita menggunakan useEffect seperti React versi JS pada umumnya
       (async () => {
         try {
           const response = await fetch(
             "https://jsonplaceholder.typicode.com/comments"
           );

           if (!response.ok) {
             // Di sini kita sengaja menggunakan response.text
             // Agar ada perbedaan antara bila berhasil (Comment[])
             // dan gagal (string)

             // Apabila pada backendnya juga menghasilkan JSON
             // maka di sini pun ada baiknya dibuat type Error Response
             // agar dapat dicatch dengan baik
             const body = await response.text();
             throw new Error(body);
           }

           // TODO: tablePage - Table Render (5)
           // Di sini kita mendefinisikan bahwa JSON yang diambil
           // akan menghasilkan Array of Comment (Comment[])
           const responseJson: Comment[] = await response.json();

           // Di sini kita akan set state nya
           setComments(responseJson);
         } catch (err) {
           // TODO: tablePage - Table Render (6)
           // Karena err di sini sifatnya adalah "any"
           // dan error di atas berupa string

           // Maka ada baiknya secara typescript kita akan mengecek tipe data
           // dari errornya apakah berupa string atau bukan
           if (typeof err === "string") {
             console.log(err);
           }
         }
       })();
     }, []);

     return (
       <>
         <p>Ini adalah halaman Table</p>

         <table>
           <thead>
             <tr>
               <th>Id</th>
               <th>Email</th>
               <th>Body</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {/* TODO: tablePage - Table Render (7) */}
             {comments.map((comment) => (
               <tr key={comment.id}>
                 <td>{comment.id}</td>
                 <td>{comment.email}</td>
                 <td>{comment.body}</td>
                 <td>
                   <button>Delete</button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </>
     );
   };

   export default TablePage;
   ```

1. Pada tahap ini data sudah berhasil di-`fetch` dan sudah berhasil masuk ke dalam tabel.

   Namun perlu diperhatikan bahwa tombol delete di sini belum bisa berjalan dengan baik.

1. Modifikasi kode tambahan lagi pada `TabelPage.tsx` agar dapat menggunakan Deletenya dengan baik. adapun modifikasi kodenya adalah sebagai berikut:

   ```ts
   // Sama seperti sebelumnya

   const TablePage = () => {
     // Sebelum return
     // TODO: tablePage - Delete Button (1)
     // Pada langkah ini kita akan membuat handler ketika button di-click
     // Perhatikan di sini untuk parameter data, menggunakan type Comment
     const eachRowButtonDeleteOnClickHandler = (data: Comment) => {
       // Logic javascript umum, tidak dibahas di sini yah
       let filteredComments = comments.filter(
         (comment) => comment.id !== data.id
       );
       setComments(filteredComments);
     };

     return (
       <>
         {/* sama seperti sebelumnya */}

         {/* Di dalam tbody */}
         {comments.map((comment) => (
           <tr key={comment.id}>
             <td>{comment.id}</td>
             <td>{comment.email}</td>
             <td>{comment.body}</td>
             <td>
               {/* TODO: tablePage - Delete Button (2) */}
               {/* Tambahkan handler onClick di sini */}
               <button
                 onClick={() => eachRowButtonDeleteOnClickHandler(comment)}
               >
                 Delete
               </button>
             </td>
           </tr>
         ))}

         {/* sama seperti sebelumnya */}
       </>
     );
   };
   ```

Sampai pada tahap ini artinya kita sudah belajar membuat table dan bisa menghapus datanya dengan baik (secara tampilan, bukan secara backend).

Dan artinya sampai pada tahap ini kita sudah belajar untuk membuat aplikasi React berbasis TypeScript yang cukup sederhana yah !

Mari tetap belajar React versi TS !
