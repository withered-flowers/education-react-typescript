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
