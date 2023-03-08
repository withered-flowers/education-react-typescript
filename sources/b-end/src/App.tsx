import { ChangeEvent, SyntheticEvent, useState } from "react";

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
  const inputAmountOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
          <input
            style={{ marginRight: "1em" }}
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={inputAmountOnChangeHandler}
          />

          {/* TODO: duoCounter - Tambah secondCounter (5) */}
          {/* Tambahkan kode di sini untuk menambahkan secondCounter */}
          <button onClick={buttonSecondIncrementOnClickHandler}>
            Tambah (secondCounter)
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
